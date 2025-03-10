<script setup lang="ts">
import { useAIStore } from '@/stores'
import { Trash2 } from 'lucide-vue-next'
import { storeToRefs } from 'pinia'
import { computed, onMounted, onUnmounted, ref, watch } from 'vue'
import { Button } from '../../ui/button'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../../ui/select'
import { useToast } from '../../ui/use-toast'

const props = defineProps({
  modelId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([`update:modelId`])
const mounted = ref(true)
const currentModelId = ref(props.modelId) // 使用ref直接跟踪当前选中的模型
const { toast } = useToast()

const aiStore = useAIStore()
const { models, customModels, isLoading, error } = storeToRefs(aiStore)

// 计算属性用于显示
const displayModelId = computed(() => {
  return currentModelId.value || props.modelId || `选择AI模型`
})

// 监听prop变化，同步到当前状态
watch(() => props.modelId, (newVal) => {
  if (newVal && newVal !== currentModelId.value) {
    console.log(`监听到modelId prop变化:`, newVal)
    currentModelId.value = newVal
  }
}, { immediate: true })

onMounted(async () => {
  // 首先从localStorage中恢复用户选择的模型
  const savedModel = localStorage.getItem(`md-ai-selected-model`)
  console.log(`组件挂载时的modelId:`, props.modelId)
  console.log(`localStorage中保存的模型:`, savedModel)

  // 如果localStorage中有保存的模型，优先使用它
  if (savedModel) {
    currentModelId.value = savedModel
    emit(`update:modelId`, savedModel)
    aiStore.selectModel(savedModel)
    console.log(`从localStorage恢复模型选择:`, savedModel)
  }

  if (models.value.length === 0) {
    try {
      await aiStore.fetchModels()

      // 检查是否成功获取了模型列表
      if (models.value && models.value.length > 0) {
        // 只有当用户尚未选择模型(currentModelId为空或默认值)时，才自动选择第一个模型
        if ((!currentModelId.value || currentModelId.value === `gpt-3.5-turbo`) && models.value[0].id) {
          // 更新store中的选中模型
          const firstModelId = models.value[0].id
          aiStore.selectModel(firstModelId)
          // 更新当前状态
          currentModelId.value = firstModelId
          // 通知父组件更新
          emit(`update:modelId`, firstModelId)
          // 保存到localStorage
          localStorage.setItem(`md-ai-selected-model`, firstModelId)

          console.log(`初始化：自动选择第一个获取到的模型:`, firstModelId)
        }
        else {
          console.log(`保持用户已选择的模型:`, currentModelId.value)
        }
      }

      toast({
        title: `模型列表已更新`,
        description: `已获取最新可用模型列表`,
      })
    }
    catch (e) {
      console.error(`获取模型列表失败:`, e)
      toast({
        title: `获取模型列表失败`,
        description: e instanceof Error ? e.message : `请检查API配置是否正确`,
        variant: `destructive`,
      })
    }
  }
})

onUnmounted(() => {
  mounted.value = false
})

async function handleFetchModels() {
  if (!mounted.value)
    return

  // 保存当前选择的模型，以便刷新后保留选择
  const previousSelectedModel = currentModelId.value
  console.log(`刷新列表前选择的模型:`, previousSelectedModel)

  try {
    await aiStore.fetchModels()

    // 检查是否成功获取了模型列表
    if (models.value && models.value.length > 0) {
      if (previousSelectedModel) {
        // 检查当前所选模型是否在新获取的模型列表中
        const modelExists = models.value.some(m => m.id === previousSelectedModel)
          || customModels.value.includes(previousSelectedModel)

        if (modelExists) {
          // 如果所选模型在新列表中存在，保持选择
          console.log(`保留当前选择的模型:`, previousSelectedModel)
        }
        else if (models.value[0].id) {
          // 如果所选模型不在新列表中，选择第一个可用模型
          const firstModelId = models.value[0].id
          aiStore.selectModel(firstModelId)
          currentModelId.value = firstModelId
          emit(`update:modelId`, firstModelId)
          localStorage.setItem(`md-ai-selected-model`, firstModelId)
          console.log(`所选模型不在新列表中，自动选择第一个模型:`, firstModelId)
        }
      }
      else if (models.value[0].id) {
        // 没有选择的模型，选择第一个
        const firstModelId = models.value[0].id
        aiStore.selectModel(firstModelId)
        currentModelId.value = firstModelId
        emit(`update:modelId`, firstModelId)
        localStorage.setItem(`md-ai-selected-model`, firstModelId)
        console.log(`自动选择第一个获取到的模型:`, firstModelId)
      }
    }

    toast({
      title: `模型列表已更新`,
      description: `已获取最新可用模型列表`,
    })
  }
  catch (e) {
    console.error(`获取模型列表失败:`, e)
    toast({
      title: `获取模型列表失败`,
      description: e instanceof Error ? e.message : `请检查API配置是否正确`,
      variant: `destructive`,
    })
  }
}

function handleModelChange(value: string) {
  if (!mounted.value)
    return

  console.log(`模型选择器 - 用户选择模型:`, value)
  console.log(`模型选择器 - 选择前状态:`, {
    propsModelId: props.modelId,
    currentModelId: currentModelId.value,
    storeSelectedModel: aiStore.selectedModel,
  })

  // 更新当前状态
  currentModelId.value = value

  // 确保在store中更新
  aiStore.selectModel(value)

  // 保存到localStorage
  localStorage.setItem(`md-ai-selected-model`, value)

  // 通知父组件
  emit(`update:modelId`, value)

  // 打印更新后的状态
  console.log(`模型选择器 - 选择后状态:`, {
    propsModelId: props.modelId,
    currentModelId: currentModelId.value,
    storeSelectedModel: aiStore.selectedModel,
    localStorage: localStorage.getItem(`md-ai-selected-model`),
  })
}

function handleRemoveCustomModel(modelName: string, event: Event) {
  event.stopPropagation()
  aiStore.removeCustomModel(modelName)
  toast({
    title: `模型已移除`,
    description: `已从自定义模型列表中移除 ${modelName}`,
  })
}

function findModelName(id: string): string {
  if (!id)
    return `选择AI模型`

  // 先从models列表中查找
  const model = models.value.find(m => m.id === id)
  if (model && model.name)
    return model.name

  // 如果是自定义模型，直接返回ID作为名称
  if (customModels.value.includes(id))
    return id

  // 默认返回ID本身
  return id
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <Select :model-value="currentModelId" @update:model-value="handleModelChange">
        <SelectTrigger class="w-[240px]" :class="{ 'opacity-50': isLoading }">
          <SelectValue :placeholder="displayModelId">
            <template v-if="isLoading">
              加载中...
            </template>
            <template v-else>
              {{ findModelName(currentModelId) }}
            </template>
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>OpenAI 模型</SelectLabel>
            <SelectItem
              v-for="model in models"
              :key="model.id"
              :value="model.id"
            >
              {{ model.name }}
            </SelectItem>
          </SelectGroup>

          <SelectGroup v-if="customModels.length > 0">
            <SelectLabel>自定义模型</SelectLabel>
            <div
              v-for="model in customModels"
              :key="model"
              class="relative"
            >
              <SelectItem
                :value="model"
              >
                {{ model }}
              </SelectItem>
              <button
                type="button"
                class="absolute right-2 top-1/2 p-1 opacity-0 transition-opacity -translate-y-1/2 hover:text-red-500 group-hover:opacity-100"
                @click.stop="handleRemoveCustomModel(model, $event)"
              >
                <Trash2 class="size-4" />
              </button>
            </div>
          </SelectGroup>
        </SelectContent>
      </Select>
      <div class="flex gap-2">
        <Button
          variant="outline"
          size="sm"
          :disabled="isLoading"
          @click="handleFetchModels"
        >
          {{ isLoading ? '获取中...' : '获取模型' }}
        </Button>
        <Button
          variant="outline"
          size="sm"
          :disabled="isLoading"
          @click="handleFetchModels"
        >
          刷新列表
        </Button>
      </div>
    </div>
    <p v-if="error" class="text-sm text-red-500">
      {{ error }}
    </p>
    <p v-if="models.length === 0 && !error && !isLoading" class="text-sm text-gray-500">
      请点击"获取模型"按钮获取可用的模型列表
    </p>
  </div>
</template>

<style scoped>
.relative:hover button {
  opacity: 1;
}

button:focus {
  outline: none;
}
</style>
