import axios from 'axios'

export interface Model {
  id: string
  name: string
  maxTokens: number
  available: boolean
}

export class AIModelsService {
  private static instance: AIModelsService
  private baseUrl: string = `YOUR_API_BASE_URL`
  private apiKey: string = ``
  private models: Model[] = []

  private constructor() {}

  public static getInstance(): AIModelsService {
    if (!AIModelsService.instance) {
      AIModelsService.instance = new AIModelsService()
    }
    return AIModelsService.instance
  }

  public async fetchAvailableModels(): Promise<Model[]> {
    try {
      if (!this.apiKey) {
        console.warn(`API Key未设置，将返回默认模型列表`)
        return this.getDefaultModels()
      }

      console.log(`正在请求API:`, `${this.baseUrl}/v1/models`)
      console.log(`请求头:`, {
        'Authorization': `Bearer ${this.apiKey.slice(0, 4)}...${this.apiKey.slice(-4)}`,
        'Content-Type': `application/json`,
      })

      const response = await axios.get(`${this.baseUrl}/v1/models`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'Content-Type': `application/json`,
        },
      })

      // 检查响应状态
      console.log(`API响应状态:`, {
        status: response.status,
        statusText: response.statusText,
      })

      // 检查响应头
      console.log(`API响应头:`, {
        'content-type': response.headers[`content-type`],
        'x-request-id': response.headers[`x-request-id`],
      })

      console.log(`API返回的原始数据:`, JSON.stringify(response.data, null, 2))
      console.log(`API返回数据类型:`, typeof response.data)
      console.log(`API返回数据结构:`, Object.keys(response.data))

      // 尝试解析不同的数据格式
      let modelList: any[] = []

      if (response.data?.data && Array.isArray(response.data.data)) {
        // OpenAI 标准格式
        console.log(`使用OpenAI标准格式解析，data字段内容:`, JSON.stringify(response.data.data, null, 2))
        modelList = response.data.data
      }
      else if (Array.isArray(response.data)) {
        // 直接数组格式
        console.log(`使用直接数组格式解析，数组内容:`, JSON.stringify(response.data, null, 2))
        modelList = response.data
      }
      else if (typeof response.data === `object`) {
        // 对象格式，尝试提取models字段
        console.log(`使用对象格式解析，尝试提取models/items字段:`, {
          hasModels: `models` in response.data,
          hasItems: `items` in response.data,
          availableFields: Object.keys(response.data),
        })
        modelList = response.data.models || response.data.items || []
      }

      console.log(`解析后的原始模型列表:`, JSON.stringify(modelList, null, 2))

      // 如果获取到了模型列表
      if (modelList && modelList.length > 0) {
        const processedModels = modelList.map((model: any) => {
          // 尝试从不同的属性中获取数据
          const id = model.id || model.model_id || model.name || ``
          const name = model.name || this.formatModelName(id)
          // 根据模型ID设置默认的maxTokens
          let maxTokens = model.max_tokens || model.maxTokens || 0
          if (maxTokens === 0) {
            if (id.includes(`gpt-4`)) {
              maxTokens = 8192
            }
            else if (id.includes(`gpt-3.5`)) {
              maxTokens = 4096
            }
          }

          return {
            id,
            name,
            maxTokens,
            available: true,
          }
        }).filter(model => model.id) // 过滤掉没有id的模型

        console.log(`处理后的模型列表:`, processedModels)

        if (processedModels.length > 0) {
          this.models = processedModels
          return this.models
        }
      }

      console.log(`未获取到有效的模型列表，将使用默认模型`)
      this.models = this.getDefaultModels()
      console.log(`使用默认模型列表:`, this.models)

      return this.models
    }
    catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status
        const responseData = error.response?.data
        let errorMessage = `获取模型列表失败`

        if (status === 401) {
          errorMessage = `API认证失败，请检查API Key是否正确设置`
        }
        else if (status === 403) {
          errorMessage = `没有权限访问模型列表，请检查API Key权限`
        }
        else if (status === 404) {
          errorMessage = `API地址不正确或服务不可用`
        }
        else if (status === 429) {
          errorMessage = `请求过于频繁，请稍后再试`
        }

        console.error(`API请求失败:`, {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: responseData,
          url: this.baseUrl,
          message: errorMessage,
          headers: error.response?.headers,
          errorCode: responseData?.error?.code,
          errorType: responseData?.error?.type,
        })

        throw new Error(errorMessage)
      }
      else {
        console.error(`获取模型列表失败:`, error)
        throw error
      }
    }
  }

  private formatModelName(id: string): string {
    // 美化模型名称显示
    return id
      .replace(`gpt-`, `GPT-`)
      .split(`-`)
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(` `)
  }

  private getDefaultModels(): Model[] {
    return [
      {
        id: `gpt-3.5-turbo`,
        name: `GPT-3.5 Turbo`,
        maxTokens: 4096,
        available: true,
      },
      {
        id: `gpt-4`,
        name: `GPT-4`,
        maxTokens: 8192,
        available: true,
      },
    ]
  }

  public getModels(): Model[] {
    return this.models
  }

  public setBaseUrl(url: string): void {
    if (!url) {
      console.warn(`API地址为空，将使用默认地址`)
      return
    }
    const trimmedUrl = url.trim()
    console.log(`设置API地址:`, trimmedUrl)
    this.baseUrl = trimmedUrl
  }

  public setApiKey(key: string): void {
    if (!key) {
      console.warn(`API Key为空`)
      return
    }
    const trimmedKey = key.trim()
    console.log(`设置API Key`)
    this.apiKey = trimmedKey
  }
}

export const aiModelsService = AIModelsService.getInstance()
