import type { Model } from '../services/aiModels'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { aiModelsService } from '../services/aiModels'

export const useAIStore = defineStore(`ai`, () => {
  const apiKey = useStorage(`md-ai-api-key`, ``)
  const selectedModel = useStorage(`md-ai-selected-model`, `gpt-3.5-turbo`)
  const customModel = useStorage(`md-ai-custom-model`, ``)
  const apiDomain = useStorage(`md-ai-api-domain`, `https://api.puzhehei.top`)
  const presetWords = useStorage<string[]>(`md-ai-preset-words`, [])
  const temperature = useStorage<number>(`md-ai-temperature`, 0.7)
  const maxLength = useStorage<number>(`md-ai-max-length`, 2048)
  const isGenerating = ref(false)
  const settingsDialogVisible = ref(false)

  // 新增模型列表相关状态
  const models = ref<Model[]>([])
  const isLoading = ref(false)
  const error = ref(``)

  // 初始化时设置API配置
  if (apiDomain.value) {
    aiModelsService.setBaseUrl(apiDomain.value)
  }
  if (apiKey.value) {
    aiModelsService.setApiKey(apiKey.value)
  }

  // 保存API Key
  function setApiKey(key: string) {
    console.log(`更新API Key`)
    apiKey.value = key
    // 更新aiModelsService的apiKey
    aiModelsService.setApiKey(key)
    // 尝试重新获取模型列表
    if (key) {
      fetchModels()
    }
  }

  // 选择模型
  function selectModel(model: string) {
    selectedModel.value = model
  }

  // 设置自定义模型
  function setCustomModel(model: string) {
    customModel.value = model
  }

  // 设置 API 域名
  function setApiDomain(domain: string) {
    console.log(`更新API域名:`, domain)
    apiDomain.value = domain
    // 更新aiModelsService的baseUrl
    aiModelsService.setBaseUrl(domain)
    // 重新获取模型列表
    if (domain && apiKey.value) {
      fetchModels()
    }
  }

  // 获取可用模型列表
  async function fetchModels() {
    if (!apiKey.value) {
      error.value = `请先设置API Key`
      return
    }
    if (!apiDomain.value) {
      error.value = `请先设置API地址`
      return
    }

    try {
      isLoading.value = true
      error.value = ``
      models.value = await aiModelsService.fetchAvailableModels()
    }
    catch (e) {
      error.value = e instanceof Error ? e.message : `获取模型列表失败`
      console.error(`获取模型列表失败:`, e)
      models.value = []
    }
    finally {
      isLoading.value = false
    }
  }

  // 添加预设词
  function addPresetWord(word: string) {
    presetWords.value.push(word)
  }

  // 删除预设词
  function removePresetWord(index: number) {
    presetWords.value.splice(index, 1)
  }

  // 更新温度
  function setTemperature(temp: number) {
    temperature.value = temp
  }

  // 更新最大长度
  function setMaxLength(length: number) {
    maxLength.value = length
  }

  // 设置生成状态
  function setGenerating(status: boolean) {
    isGenerating.value = status
  }

  return {
    apiKey,
    selectedModel,
    customModel,
    apiDomain,
    presetWords,
    temperature,
    maxLength,
    isGenerating,
    settingsDialogVisible,
    // 新增返回值
    models,
    isLoading,
    error,
    setApiKey,
    selectModel,
    setCustomModel,
    setApiDomain,
    addPresetWord,
    removePresetWord,
    setTemperature,
    setMaxLength,
    setGenerating,
    fetchModels,
  }
})
