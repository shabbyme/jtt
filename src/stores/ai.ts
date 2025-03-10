import type { Model } from '../services/aiModels'
import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { aiModelsService } from '../services/aiModels'

export const useAIStore = defineStore(`ai`, () => {
  const apiKey = useStorage(`md-ai-api-key`, ``)
  const selectedModel = useStorage(`md-ai-selected-model`, `gpt-3.5-turbo`)
  const customModel = useStorage(`md-ai-custom-model`, ``)
  const apiDomain = useStorage(`md-ai-api-domain`, `https://api.puzhehei.top`)

  console.log(`AI Store 初始化 - 当前选择的模型:`, selectedModel.value)
  console.log(`AI Store 初始化 - 当前自定义模型:`, customModel.value)

  const presetWords = useStorage<string[]>(`md-ai-preset-words`, [``])
  const temperature = useStorage<number>(`md-ai-temperature`, 0.7)
  const maxLength = useStorage<number>(`md-ai-max-length`, 2048)
  const isGenerating = ref(false)
  const settingsDialogVisible = ref(false)

  // 新增模型列表相关状态
  const models = ref<Model[]>([])
  const customModels = useStorage<string[]>(`md-ai-custom-models`, [])
  const isLoading = ref(false)
  const error = ref(``)

  // 初始化时设置API配置
  if (apiDomain.value) {
    aiModelsService.setBaseUrl(apiDomain.value)
  }
  if (apiKey.value) {
    aiModelsService.setApiKey(apiKey.value)
  }

  // 确保从localStorage读取选择的模型
  const savedModel = localStorage.getItem(`md-ai-selected-model`)
  if (savedModel) {
    console.log(`从localStorage恢复保存的模型选择:`, savedModel)
    selectedModel.value = savedModel

    // 同时更新到localStorage的aiSettings
    try {
      const settings = localStorage.getItem(`aiSettings`)
      if (settings) {
        const parsedSettings = JSON.parse(settings)
        parsedSettings.selectedModel = savedModel
        localStorage.setItem(`aiSettings`, JSON.stringify(parsedSettings))
      }
    }
    catch (e) {
      console.error(`更新aiSettings失败:`, e)
    }
  }

  // 监听selectedModel的变化，确保它被正确同步到localStorage
  watch(() => selectedModel.value, (newVal) => {
    if (newVal) {
      console.log(`监听到selectedModel变化，同步到localStorage:`, newVal)
      localStorage.setItem(`md-ai-selected-model`, newVal)

      // 同时更新到aiSettings
      try {
        const settings = localStorage.getItem(`aiSettings`)
        if (settings) {
          const parsedSettings = JSON.parse(settings)
          parsedSettings.selectedModel = newVal
          localStorage.setItem(`aiSettings`, JSON.stringify(parsedSettings))
        }
      }
      catch (e) {
        console.error(`更新aiSettings失败:`, e)
      }
    }
  })

  // 如果有API配置，自动尝试获取模型列表
  if (apiKey.value && apiDomain.value && models.value.length === 0) {
    console.log(`初始化时自动尝试获取模型列表`)
    setTimeout(() => {
      fetchModels().catch((err) => {
        console.error(`自动获取模型列表失败:`, err)
      })
    }, 1000) // 延迟1秒执行，避免初始化冲突
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
    if (!model)
      return // 防止空值

    console.log(`更新选择的模型，输入值:`, model)
    console.log(`之前的模型值:`, selectedModel.value)

    // 更新selectedModel值
    selectedModel.value = model

    console.log(`更新后的模型值:`, selectedModel.value)

    // 保存到localStorage以确保持久化
    localStorage.setItem(`md-ai-selected-model`, model)

    // 同时更新到aiSettings
    try {
      const settings = localStorage.getItem(`aiSettings`)
      if (settings) {
        const parsedSettings = JSON.parse(settings)
        parsedSettings.selectedModel = model
        localStorage.setItem(`aiSettings`, JSON.stringify(parsedSettings))
      }
      else {
        // 如果aiSettings不存在，创建它
        const newSettings = {
          apiKey: apiKey.value,
          selectedModel: model,
          apiDomain: apiDomain.value,
          presetWords: presetWords.value,
          temperature: temperature.value,
          maxLength: maxLength.value,
        }
        localStorage.setItem(`aiSettings`, JSON.stringify(newSettings))
      }
    }
    catch (e) {
      console.error(`更新aiSettings失败:`, e)
    }

    // 双重检查，确保值已正确更新
    setTimeout(() => {
      console.log(`延迟检查模型值:`, {
        selectedModel: selectedModel.value,
        localStorage: localStorage.getItem(`md-ai-selected-model`),
      })
    }, 100)
  }

  // 设置自定义模型
  function setCustomModel(model: string) {
    console.log(`更新自定义模型:`, model)
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

  // 保存所有AI设置
  function saveAllSettings() {
    const settings = {
      apiKey: apiKey.value,
      selectedModel: selectedModel.value,
      apiDomain: apiDomain.value,
      presetWords: presetWords.value,
      temperature: temperature.value,
      maxLength: maxLength.value,
      customModels: customModels.value,
    }

    localStorage.setItem(`aiSettings`, JSON.stringify(settings))
    localStorage.setItem(`md-ai-selected-model`, selectedModel.value)
    console.log(`已保存所有AI设置:`, settings)

    // 确保UI状态与数据一致
    selectModel(selectedModel.value)
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

  // 添加自定义模型
  function addCustomModel(modelName: string) {
    if (!modelName || customModels.value.includes(modelName))
      return
    customModels.value.push(modelName)

    // 直接选择新添加的模型
    selectModel(modelName)
  }

  // 删除自定义模型
  function removeCustomModel(modelName: string) {
    const index = customModels.value.indexOf(modelName)
    if (index > -1) {
      customModels.value.splice(index, 1)
      // 如果删除的是当前选中的模型，重置为默认模型
      if (selectedModel.value === modelName) {
        selectModel(`gpt-3.5-turbo`)
      }
    }
  }

  // 获取当前选择的模型ID
  function getCurrentModelId() {
    // 首先从Store中获取
    let modelId = selectedModel.value

    // 如果Store中没有，尝试从localStorage获取
    if (!modelId) {
      modelId = localStorage.getItem(`md-ai-selected-model`) || `gpt-3.5-turbo`
    }

    return modelId
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
    customModels,
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
    addCustomModel,
    removeCustomModel,
    saveAllSettings,
    getCurrentModelId,
  }
})
