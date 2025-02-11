import { useAIStore } from '@/stores'

export interface AIStreamOptions {
  prompt: string
  onToken?: (token: string) => void
  onError?: (error: Error) => void
  onFinish?: () => void
}

export async function streamAIContent({
  prompt,
  onToken,
  onError,
  onFinish,
}: AIStreamOptions) {
  const aiStore = useAIStore()
  aiStore.setGenerating(true)

  try {
    const response = await fetch(`https://api.puzhehei.top/v1/chat/completions`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        'Authorization': `Bearer ${aiStore.apiKey}`,
      },
      body: JSON.stringify({
        model: aiStore.customModel || aiStore.selectedModel,
        messages: [{ role: `user`, content: prompt }],
        temperature: aiStore.temperature,
        max_tokens: aiStore.maxLength,
        stream: true,
      }),
    })

    if (!response.ok) {
      aiStore.setGenerating(false)
      let errorMessage = ``

      switch (response.status) {
        case 401:
          errorMessage = `认证失败：API Key 无效。请先前往"AI助手 -> 天马座API"注册并获取 API Key，然后在"AI助手 -> OpenAI设置"中填写。注意 Key 应以 sk- 开头`
          break
        case 403:
          errorMessage = `API Key 无访问权限。请前往"AI助手 -> 天马座API"检查 Key 是否有效或额度是否用尽`
          break
        case 429:
          errorMessage = `请求过于频繁，请稍后再试。如需更高请求限制，请前往"AI助手 -> 天马座API"升级账户`
          break
        case 500:
          errorMessage = `AI 服务器错误，请稍后重试。如持续出现此问题，请前往"AI助手 -> 天马座API"查看服务状态`
          break
        default:
          errorMessage = `请求失败 (${response.status}): ${response.statusText}。如需帮助，请访问"AI助手 -> 天马座API"获取支持`
      }

      throw new Error(errorMessage)
    }

    const reader = response.body?.getReader()
    const decoder = new TextDecoder()

    if (!reader) {
      throw new Error(`No reader available`)
    }

    while (true) {
      const { done, value } = await reader.read()

      if (done) {
        aiStore.setGenerating(false)
        onFinish?.()
        break
      }

      const chunk = decoder.decode(value)
      const lines = chunk.split(`\n`)

      for (const line of lines) {
        if (line.startsWith(`data: `)) {
          const data = line.slice(6)
          if (data === `[DONE]`)
            continue

          try {
            const parsed = JSON.parse(data)
            const token = parsed.choices[0]?.delta?.content
            if (token) {
              onToken?.(token)
            }
          }
          catch (e) {
            console.error(`Error parsing SSE message:`, e)
          }
        }
      }
    }
  }
  catch (error) {
    aiStore.setGenerating(false)
    onError?.(error as Error)
  }
}

export function generateWithAI(prompt: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let content = ``

    streamAIContent({
      prompt,
      onToken: (token) => {
        content += token
      },
      onError: (error) => {
        reject(error)
      },
      onFinish: () => {
        resolve(content)
      },
    })
  })
}

// AI 服务接口
export async function callAI(prompt: string): Promise<string> {
  try {
    const response = await fetch(`/api/ai`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
      },
      body: JSON.stringify({ prompt }),
    })

    if (!response.ok) {
      throw new Error(`AI 服务请求失败: ${response.statusText}`)
    }

    const data = await response.json()
    return data.content
  }
  catch (error) {
    console.error(`调用 AI 服务失败:`, error)
    throw error
  }
}
