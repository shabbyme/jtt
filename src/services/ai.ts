import { useAIStore } from '@/stores'

// 添加检查和纠正模型的函数
function validateAndFixModel(model: string): string {
  console.log(`用户选择的模型: ${model}`)
  return model
}

// 处理流式响应的函数
async function processStreamResponse(
  response: Response,
  onToken?: (token: string) => void,
  onFinish?: () => void,
) {
  const aiStore = useAIStore()
  const reader = response.body?.getReader()
  const decoder = new TextDecoder()

  if (!reader) {
    throw new Error(`无法读取响应数据流`)
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
          console.error(`解析响应数据失败:`, e)
        }
      }
    }
  }
}

export interface AIStreamOptions {
  prompt: string | Array<{ role: string, content: string }> | {
    system?: string
    user?: string
  }
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
    // 验证必要的配置
    if (!aiStore.apiKey) {
      throw new Error(`请先设置 API Key`)
    }

    if (!aiStore.apiDomain || aiStore.apiDomain === `YOUR_API_BASE_URL`) {
      throw new Error(`请先设置 API 地址`)
    }

    // 添加日志记录，显示实际使用的模型
    console.log(`AI Store中的模型状态:`, {
      selectedModel: aiStore.selectedModel,
      customModel: aiStore.customModel,
    })

    const selectedModel = aiStore.customModel || aiStore.selectedModel
    console.log(`发送请求前使用的模型：${selectedModel}`)

    // 验证并修复可能的模型问题
    const validatedModel = validateAndFixModel(selectedModel)
    console.log(`验证后使用的模型：${validatedModel}`)

    const response = await fetch(`${aiStore.apiDomain}/v1/chat/completions`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        'Authorization': `Bearer ${aiStore.apiKey}`,
        'Accept': `application/json`,
      },
      body: JSON.stringify({
        model: validatedModel,
        messages: [
          ...aiStore.presetWords.map(word => ({ role: `system` as const, content: word })),
          ...(typeof prompt === `string`
            ? [{ role: `user` as const, content: prompt }]
            : Array.isArray(prompt)
              ? prompt
              : [
                  { role: `system` as const, content: (prompt as { system?: string }).system || `` },
                  { role: `user` as const, content: (prompt as { user?: string }).user || `` },
                ]
          ).filter(msg => msg.content),
        ],
        temperature: aiStore.temperature,
        max_tokens: aiStore.maxLength,
        stream: true,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => `无法获取错误详情`)
      console.error(`API错误：`, {
        状态码: response.status,
        状态文本: response.statusText,
        错误详情: errorText,
      })

      // 特殊处理模型不存在错误
      if (errorText.includes(`model`) && (errorText.includes(`not found`) || errorText.includes(`cannot find`))) {
        console.warn(`模型不可用错误：${errorText}`)
        throw new Error(`所选模型(${validatedModel})不可用，请选择其他模型或联系API提供商确认支持的模型列表`)
      }

      throw new Error(`API请求失败 (${response.status}): ${errorText || response.statusText}`)
    }

    return processStreamResponse(response, onToken, onFinish)
  }
  catch (error) {
    aiStore.setGenerating(false)
    console.error(`AI 请求失败:`, {
      错误信息: error instanceof Error ? error.message : String(error),
      API地址: aiStore.apiDomain,
      模型: aiStore.customModel || aiStore.selectedModel,
    })
    onError?.(error instanceof Error ? error : new Error(String(error)))
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

// CSS改写相关的提示词模板
export const CSS_REWRITE_PROMPTS = {
  optimize: `优化CSS结构,使用更合理的选择器和层级`,
  readability: `提高代码可读性,添加适当的空行和缩进`,
  simplify: `精简代码,去除冗余的样式声明`,
  comment: `为重要的样式块添加注释说明`,
  selectors: `保持原有的选择器名称不变`,
  important: `保留所有!important声明`,
  media: `保留所有媒体查询`,
  animation: `保留所有动画相关代码`,
}

// 生成CSS改写提示词
export function generateCssRewritePrompt(options: {
  styles: string[]
  retains: string[]
  css: string
  customPrompt?: string
}) {
  const { styles, retains, css, customPrompt } = options

  // 基础提示词
  const basePrompt = [
    `你是一个专业的CSS优化专家。你的任务是根据以下要求优化CSS代码:`,
    ``,
    `优化要求:`,
  ]

  // 添加优化选项
  styles.forEach((style) => {
    if (CSS_REWRITE_PROMPTS[style as keyof typeof CSS_REWRITE_PROMPTS]) {
      basePrompt.push(`- ${CSS_REWRITE_PROMPTS[style as keyof typeof CSS_REWRITE_PROMPTS]}`)
    }
  })

  // 添加保留选项
  if (retains.length > 0) {
    basePrompt.push(``, `保留要求:`)
    retains.forEach((retain) => {
      if (CSS_REWRITE_PROMPTS[retain as keyof typeof CSS_REWRITE_PROMPTS]) {
        basePrompt.push(`- ${CSS_REWRITE_PROMPTS[retain as keyof typeof CSS_REWRITE_PROMPTS]}`)
      }
    })
  }

  // 添加自定义提示词
  if (customPrompt?.trim()) {
    basePrompt.push(
      ``,
      `自定义要求:`,
      customPrompt.trim(),
    )
  }

  // 添加处理说明
  basePrompt.push(
    ``,
    `请严格按照以下步骤处理:`,
    `1. 仔细阅读上述优化和保留要求`,
    `2. 分析CSS代码的结构和特点`,
    `3. 根据要求优化代码,同时确保保留指定的特性`,
    `4. 检查优化后的代码是否符合所有要求`,
    ``,
    `需要优化的CSS代码:`,
    ``,
    css,
    ``,
    `请开始优化:`,
  )

  return {
    system: basePrompt.join(`\n`),
    user: css,
  }
}

// AI 服务接口
export async function callAI(prompt: string): Promise<string> {
  const aiStore = useAIStore()
  try {
    // 添加日志记录，显示callAI中使用的模型
    console.log(`callAI函数 - AI Store中的模型状态:`, {
      selectedModel: aiStore.selectedModel,
      customModel: aiStore.customModel,
    })

    const selectedModel = aiStore.customModel || aiStore.selectedModel
    console.log(`callAI函数 - 使用模型：${selectedModel}`)

    // 验证并修复可能的模型问题
    const validatedModel = validateAndFixModel(selectedModel)
    console.log(`callAI函数 - 验证后的模型：${validatedModel}`)

    const response = await fetch(`${aiStore.apiDomain}/v1/chat/completions`, {
      method: `POST`,
      headers: {
        'Content-Type': `application/json`,
        'Authorization': `Bearer ${aiStore.apiKey}`,
      },
      body: JSON.stringify({
        model: validatedModel,
        messages: [{ role: `user`, content: prompt }],
        temperature: aiStore.temperature,
        max_tokens: aiStore.maxLength,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text().catch(() => `无法获取错误详情`)
      console.error(`callAI API错误：`, {
        状态码: response.status,
        状态文本: response.statusText,
        错误详情: errorText,
      })

      // 特殊处理模型不存在错误
      if (errorText.includes(`model`) && (errorText.includes(`not found`) || errorText.includes(`cannot find`))) {
        console.warn(`模型不可用错误：${errorText}`)
        throw new Error(`所选模型(${validatedModel})不可用，请选择其他模型或联系API提供商确认支持的模型列表`)
      }

      throw new Error(`API请求失败 (${response.status}): ${errorText || response.statusText}`)
    }

    const data = await response.json()
    return data.choices[0].message.content
  }
  catch (error) {
    console.error(`调用 AI 服务失败:`, error)
    throw error
  }
}
