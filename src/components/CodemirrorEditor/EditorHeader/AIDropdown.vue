<script setup lang="ts">
import { useAIStore } from '@/stores'
import { BrainCircuit } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { ref, watch } from 'vue'
import { Button } from '../../../components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/dialog'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../../../components/ui/menubar'
import { useToast } from '../../../components/ui/use-toast'
import AIModelSelector from './AIModelSelector.vue'

const aiStore = useAIStore()
const { toast } = useToast()

const {
  apiKey,
  selectedModel,
  apiDomain,
  presetWords,
  temperature,
  maxLength,
  isGenerating,
  settingsDialogVisible,
} = storeToRefs(aiStore)

// 添加保存设置的方法
function saveSettings() {
  // 打印当前设置
  console.log(`保存设置前的状态:`, {
    selectedModel: selectedModel.value,
    apiKey: apiKey.value,
    apiDomain: apiDomain.value,
  })

  // 确保调用selectModel方法更新当前选择的模型
  // 这一步非常重要，必须先调用selectModel确保模型选择被正确更新
  aiStore.selectModel(selectedModel.value)

  // 使用aiStore的方法保存所有设置
  aiStore.saveAllSettings()

  // 强制更新localStorage中的模型选择
  localStorage.setItem(`md-ai-selected-model`, selectedModel.value)

  // 打印保存后的状态
  console.log(`保存设置后的状态:`, {
    selectedModel: selectedModel.value,
    storeModel: aiStore.selectedModel,
    localStorage: localStorage.getItem(`md-ai-selected-model`),
    aiSettings: localStorage.getItem(`aiSettings`),
  })

  // 关闭对话框
  settingsDialogVisible.value = false

  // 显示保存成功提示
  toast({
    title: `设置已保存`,
    description: `AI设置已成功保存，已选择模型: ${selectedModel.value}`,
  })
}

// 自定义模型名称
const customModelName = ref(``)
async function addCustomModel() {
  if (!customModelName.value) {
    toast({
      title: `无法添加模型`,
      description: `请输入模型名称`,
      variant: `destructive`,
    })
    return
  }

  try {
    await aiStore.addCustomModel(customModelName.value)
    toast({
      title: `模型已添加`,
      description: `${customModelName.value} 已添加到自定义模型列表`,
    })
    customModelName.value = ``
  }
  catch (error) {
    toast({
      title: `添加模型失败`,
      description: error instanceof Error ? error.message : `请检查模型名称是否正确`,
      variant: `destructive`,
    })
  }
}

// 当对话框打开时，检查模型列表是否需要刷新
watch(settingsDialogVisible, async (newVal) => {
  if (newVal === true) {
    console.log(`设置对话框打开，检查模型列表和当前设置`)

    // 恢复已保存的模型选择
    const savedModel = localStorage.getItem(`md-ai-selected-model`)
    if (savedModel) {
      console.log(`恢复保存的模型选择:`, savedModel, `当前模型:`, selectedModel.value)
      // 只有当保存的模型与当前不同时才更新
      if (savedModel !== selectedModel.value) {
        selectedModel.value = savedModel
        aiStore.selectModel(savedModel)
      }
    }

    // 如果模型列表为空且有API配置，自动获取模型列表
    if (aiStore.models.length === 0 && apiKey.value && apiDomain.value) {
      try {
        await aiStore.fetchModels()
        console.log(`成功获取模型列表`)
      }
      catch (err) {
        console.error(`获取模型列表失败:`, err)
      }
    }
  }
})
</script>

<template>
  <MenubarMenu>
    <MenubarTrigger :disabled="isGenerating">
      <div class="flex items-center">
        <BrainCircuit class="mr-2 size-4" :class="{ 'animate-spin': isGenerating }" />
        {{ isGenerating ? 'AI生成中...' : 'AI助手' }}
      </div>
    </MenubarTrigger>
    <MenubarContent align="start">
      <MenubarItem @click="settingsDialogVisible = true">
        <BrainCircuit class="mr-2 size-4" />
        OpenAI 设置
      </MenubarItem>
      <MenubarItem as="a" :href="apiDomain" target="_blank">
        <BrainCircuit class="mr-2 size-4" />
        天马座API
      </MenubarItem>
    </MenubarContent>
  </MenubarMenu>

  <!-- OpenAI设置对话框 -->
  <Dialog v-model:open="settingsDialogVisible">
    <DialogContent class="mobile-dialog sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle>OpenAI 设置</DialogTitle>
        <DialogDescription>
          配置OpenAI API相关设置，包括API密钥、模型选择等
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <!-- API Key -->
        <div class="grid gap-2">
          <Label for="apiKey">API Key</Label>
          <Input
            id="apiKey"
            v-model="apiKey"
            type="password"
            placeholder="sk-..."
          />
        </div>

        <!-- API 域名 -->
        <div class="grid gap-2">
          <Label for="apiDomain">API 地址</Label>
          <div class="flex items-center gap-2">
            <Input
              id="apiDomain"
              v-model="apiDomain"
              placeholder="https://api.puzhehei.top"
            />
          </div>
          <p class="text-muted-foreground text-xs">
            输入 https或http加域名，系统会自动补全完整路径，如：https://api.puzhehei.top
          </p>
        </div>

        <!-- 模型选择 -->
        <div class="grid gap-2">
          <Label>模型</Label>
          <div class="flex flex-wrap items-center gap-2">
            <AIModelSelector v-model:model-id="selectedModel" />
            <div class="mt-2 w-full flex items-center gap-2">
              <Input
                v-model="customModelName"
                placeholder="输入自定义模型名称"
                class="flex-1"
              />
              <Button
                variant="outline"
                class="whitespace-nowrap"
                @click="addCustomModel"
              >
                添加模型
              </Button>
            </div>
          </div>
        </div>

        <!-- 系统提示词 -->
        <div class="grid gap-2">
          <Label>系统提示词</Label>
          <Input
            v-model="presetWords[0]"
            placeholder="输入系统提示词"
          />
        </div>

        <!-- 温度 -->
        <div class="grid gap-2">
          <Label for="temperature">温度 ({{ temperature }})</Label>
          <Input
            id="temperature"
            v-model="temperature"
            type="range"
            min="0"
            max="2"
            step="0.1"
          />
        </div>

        <!-- 最大长度 -->
        <div class="grid gap-2">
          <Label for="maxLength">最大长度 ({{ maxLength }})</Label>
          <Input
            id="maxLength"
            v-model="maxLength"
            type="range"
            min="100"
            max="4000"
            step="100"
          />
        </div>
      </div>

      <DialogFooter class="flex justify-between">
        <Button variant="outline" @click="settingsDialogVisible = false">
          取消
        </Button>
        <Button @click="saveSettings">
          保存
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
@media (max-width: 768px) {
  .mobile-dialog {
    width: 90% !important;
    max-width: none !important;
    margin: 16px auto !important;
    padding: 16px !important;
  }

  .mobile-dialog :deep(.DialogHeader) {
    padding: 0 0 8px 0;
  }

  .mobile-dialog :deep(.DialogTitle) {
    font-size: 16px;
  }

  .mobile-dialog :deep(label) {
    font-size: 14px;
  }

  .mobile-dialog :deep(input),
  .mobile-dialog :deep(button) {
    height: 36px;
    font-size: 14px;
  }

  .mobile-dialog :deep(.DialogFooter) {
    margin-top: 16px;
  }
}
</style>
