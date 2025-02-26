<script setup lang="ts">
import { useAIStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { Button } from '../../ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select'

const { modelId } = defineProps({
  modelId: {
    type: String,
    required: true,
  },
})

const emit = defineEmits([`update:modelId`])
const mounted = ref(true)

const aiStore = useAIStore()
const { models, isLoading, error } = storeToRefs(aiStore)

onMounted(async () => {
  if (models.value.length === 0) {
    try {
      await aiStore.fetchModels()
    }
    catch (e) {
      console.error(`获取模型列表失败:`, e)
    }
  }
})

onUnmounted(() => {
  mounted.value = false
})

async function handleFetchModels() {
  if (!mounted.value)
    return
  try {
    await aiStore.fetchModels()
  }
  catch (e) {
    console.error(`获取模型列表失败:`, e)
  }
}

function handleModelChange(value: string) {
  if (!mounted.value)
    return
  emit(`update:modelId`, value)
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center gap-4">
      <Select :value="modelId" @update:value="handleModelChange">
        <SelectTrigger class="w-[240px]">
          <SelectValue :placeholder="isLoading ? '加载中...' : '选择AI模型'" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem
            v-for="model in models"
            :key="model.id"
            :value="model.id"
          >
            {{ model.name }}
          </SelectItem>
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
