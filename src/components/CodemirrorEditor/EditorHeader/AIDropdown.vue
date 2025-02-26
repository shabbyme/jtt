<script setup lang="ts">
import { useAIStore } from '@/stores'
import { BrainCircuit } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { Button } from '../../../components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../../../components/ui/dialog'
import { Input } from '../../../components/ui/input'
import { Label } from '../../../components/ui/label'
import { MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '../../../components/ui/menubar'
import AIModelSelector from './AIModelSelector.vue'

const aiStore = useAIStore()

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
          </div>
        </div>

        <!-- 系统提示词 -->
        <div class="grid gap-2">
          <Label>系统提示词</Label>
          <div class="flex flex-wrap gap-2">
            <Input
              v-for="(_word, index) in presetWords"
              :key="index"
              v-model="presetWords[index]"
              class="flex-1"
            />
            <Button
              variant="outline"
              class="whitespace-nowrap"
              @click="presetWords.push('')"
            >
              添加提示词
            </Button>
          </div>
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

      <DialogFooter>
        <Button @click="settingsDialogVisible = false">
          关闭
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
