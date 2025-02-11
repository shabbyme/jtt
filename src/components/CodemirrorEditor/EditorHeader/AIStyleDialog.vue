<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Progress } from '@/components/ui/progress'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { streamAIContent } from '@/services/ai'
import { useStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { computed, ref } from 'vue'

defineProps<{
  show: boolean
}>()
const emit = defineEmits([`update:show`])
const store = useStore()
const { posts, currentPostIndex } = storeToRefs(store)

// 直接使用 store.editor 而不是通过 ref 包装
const editor = computed(() => store.editor)

type StyleType = `academic` | `blog` | `technical` | `custom`
const styleType = ref<StyleType>(`academic`) // 默认学术风格
const isProcessing = ref(false)
const processProgress = ref(0)
const customPrompt = ref(``) // 添加自定义提示词变量
const customStyleName = ref(``) // 添加自定义风格名称变量

interface StyleTemplate {
  name: string
  prompt: string
}

// 预定义的样式模板
const styleTemplates: Record<StyleType, StyleTemplate> = {
  academic: {
    name: `学术风格`,
    prompt: [
      `你是一个学术风格的Markdown排版大师。你的唯一任务是调整文本的排版格式，严禁对内容做任何修改。`,
      ``,
      `严格遵守以下规则：`,
      `1. 绝对禁止：`,
      `   - 添加任何新的文字、符号或标点`,
      `   - 修改任何现有的文字、符号或标点`,
      `   - 删除任何现有的内容`,
      `   - 改变任何代码、链接或图片的内容`,
      `   - 添加任何装饰性内容`,
      ``,
      `2. 仅允许调整以下Markdown排版元素：`,
      `   - 标题标记的数量(#)`,
      `   - 段落之间的空行数量`,
      `   - 列表的缩进层级`,
      `   - 引用符号(>)的数量`,
      `   - 分隔线的位置`,
      ``,
      `3. 按照学术论文格式要求：`,
      `   - 标题层级清晰（一级标题作为文章标题，二级标题作为章节标题）`,
      `   - 段落间保持两个空行`,
      `   - 列表和引用前后各加一个空行`,
      `   - 章节间用分隔线(---)分隔`,
      ``,
      `请严格检查输出，确保没有添加或修改任何原文内容。`,
    ].join(`\n`),
  },
  blog: {
    name: `博客风格`,
    prompt: [
      `你是一个博客风格的Markdown排版大师。你的唯一任务是调整文本的排版格式，严禁对内容做任何修改。`,
      ``,
      `严格遵守以下规则：`,
      `1. 绝对禁止：`,
      `   - 添加任何新的文字、符号或标点`,
      `   - 修改任何现有的文字、符号或标点`,
      `   - 删除任何现有的内容`,
      `   - 改变任何代码、链接或图片的内容`,
      `   - 添加任何装饰性内容`,
      ``,
      `2. 仅允许调整以下Markdown排版元素：`,
      `   - 标题标记的数量(#)`,
      `   - 段落之间的空行数量`,
      `   - 列表的缩进层级`,
      `   - 引用符号(>)的数量`,
      `   - 分隔线的位置`,
      ``,
      `3. 按照博客风格要求：`,
      `   - 标题间距较大（三个空行）`,
      `   - 段落间使用一个空行`,
      `   - 重要内容前后可以加额外空行`,
      `   - 使用***作为分隔线`,
      ``,
      `请严格检查输出，确保没有添加或修改任何原文内容。`,
    ].join(`\n`),
  },
  technical: {
    name: `技术文档风格`,
    prompt: [
      `你是一个技术文档风格的Markdown排版大师。你的唯一任务是调整文本的排版格式，严禁对内容做任何修改。`,
      ``,
      `严格遵守以下规则：`,
      `1. 绝对禁止：`,
      `   - 添加任何新的文字、符号或标点`,
      `   - 修改任何现有的文字、符号或标点`,
      `   - 删除任何现有的内容`,
      `   - 改变任何代码、链接或图片的内容`,
      `   - 添加任何装饰性内容`,
      ``,
      `2. 仅允许调整以下Markdown排版元素：`,
      `   - 标题标记的数量(#)`,
      `   - 段落之间的空行数量`,
      `   - 列表的缩进层级`,
      `   - 引用符号(>)的数量`,
      `   - 分隔线的位置`,
      ``,
      `3. 按照技术文档要求：`,
      `   - 标题使用规范的层级关系（#、##、###、####）`,
      `   - 代码块前后加空行`,
      `   - 列表使用统一的缩进`,
      `   - 重要信息用引用块标注`,
      `   - 使用---作为章节分隔线`,
      ``,
      `请严格检查输出，确保没有添加或修改任何原文内容。`,
    ].join(`\n`),
  },
  custom: {
    name: `自定义风格`,
    get prompt() {
      const styleName = customStyleName.value.trim() || `自定义`
      const basePrompt = [
        `你是一个${styleName}风格的Markdown排版大师。你的唯一任务是调整文本的排版格式，严禁对内容做任何修改。`,
        ``,
        `严格遵守以下规则：`,
        `1. 绝对禁止：`,
        `   - 添加任何新的文字、符号或标点`,
        `   - 修改任何现有的文字、符号或标点`,
        `   - 删除任何现有的内容`,
        `   - 改变任何代码、链接或图片的内容`,
        `   - 添加任何装饰性内容`,
        ``,
        `2. 仅允许调整以下Markdown排版元素：`,
        `   - 标题标记的数量(#)`,
        `   - 段落之间的空行数量`,
        `   - 列表的缩进层级`,
        `   - 引用符号(>)的数量`,
        `   - 分隔线的位置`,
      ].join(`\n`)

      if (customPrompt.value.trim()) {
        const userRequirements = customPrompt.value
          .split(`\n`)
          .map(line => line.trim())
          .filter(line => line)
          .join(`\n`)

        return [
          basePrompt,
          ``,
          `3. 用户指定的"${styleName}风格"排版规则：`,
          userRequirements,
          ``,
          `请严格按照以下步骤处理：`,
          `1. 仔细阅读用户的排版规则`,
          `2. 在不改变任何内容的前提下，按照用户规则调整排版格式`,
          `3. 检查确保没有添加或修改任何文字内容`,
          `4. 确认所有调整都符合用户的排版要求`,
          ``,
          `开始处理文本：`,
        ].join(`\n`)
      }

      return [
        basePrompt,
        ``,
        `请仅调整上述允许的排版元素，严格保持所有内容不变。`,
        ``,
        `开始处理文本：`,
      ].join(`\n`)
    },
  },
}

// 分批处理文本的函数
async function processTextInBatches(text: string, prompt: string) {
  // 移除多余的空行但保留原有格式
  text = text.replace(/\n{4,}/g, `\n\n\n`)

  const paragraphs = text.split(/\n{2,}/)
  let processedText = ``
  let currentBatch = ``

  for (let i = 0; i < paragraphs.length; i += 3) {
    const batch = paragraphs.slice(i, i + 3).join(`\n\n`)
    if (!batch.trim())
      continue

    try {
      await new Promise<void>((resolve, reject) => {
        currentBatch = ``
        streamAIContent({
          prompt: [
            prompt,
            ``,
            `需要排版的文本内容：`,
            ``,
            batch,
            ``,
            `请按照上述规则对这段文本进行排版，不要改变任何实际内容：`,
          ].join(`\n`),
          onToken: (token) => {
            currentBatch += token
            // 实时更新编辑器内容
            if (editor.value) {
              const currentContent = processedText + currentBatch
              // 使用 replaceRange 而不是 setValue
              const doc = editor.value.getDoc()
              const lastLine = doc.lastLine()
              const lastCh = doc.getLine(lastLine).length
              doc.replaceRange(currentContent, { line: 0, ch: 0 }, { line: lastLine, ch: lastCh })
              editor.value.refresh()
              // 更新 store
              posts.value[currentPostIndex.value].content = currentContent
            }
          },
          onError: (error) => {
            console.error(`处理批次失败:`, error)
            reject(error)
          },
          onFinish: () => {
            // 如果 AI 没有返回内容，使用原始内容
            if (!currentBatch.trim()) {
              currentBatch = batch
            }
            // 移除可能的 AI 额外响应文本
            if (currentBatch.includes(`需要排版的文本内容：`)) {
              currentBatch = currentBatch.split(`需要排版的文本内容：`).pop() || batch
            }
            if (currentBatch.includes(`请按照上述规则`)) {
              currentBatch = currentBatch.split(`请按照上述规则`)[0].trim()
            }

            processedText += currentBatch + (i < paragraphs.length - 3 ? `\n\n` : ``)
            processProgress.value = Math.round(((i + 3) / paragraphs.length) * 100)

            // 确保编辑器内容更新
            if (editor.value) {
              const fullContent = processedText
              const doc = editor.value.getDoc()
              const lastLine = doc.lastLine()
              const lastCh = doc.getLine(lastLine).length
              doc.replaceRange(fullContent, { line: 0, ch: 0 }, { line: lastLine, ch: lastCh })
              editor.value.refresh()
              // 更新 store
              posts.value[currentPostIndex.value].content = fullContent
            }
            resolve()
          },
        })
      })

      await new Promise(resolve => setTimeout(resolve, 300))
    }
    catch (error) {
      console.error(`处理批次失败:`, error)
      processedText += batch + (i < paragraphs.length - 3 ? `\n\n` : ``)
    }
  }

  return processedText
}

async function handleApplyStyle() {
  try {
    isProcessing.value = true
    processProgress.value = 0

    if (!editor.value) {
      console.error(`编辑器实例不存在`)
      return
    }

    const originalContent = editor.value.getValue()
    const selectedTemplate = styleTemplates[styleType.value]

    // 分批处理文本
    const processedContent = await processTextInBatches(
      originalContent,
      selectedTemplate.prompt,
    )

    // 如果处理后的内容为空，保持原内容不变
    if (!processedContent.trim()) {
      console.warn(`处理后的内容为空，保持原内容不变`)
      return
    }

    // 更新编辑器内容
    const doc = editor.value.getDoc()
    const lastLine = doc.lastLine()
    const lastCh = doc.getLine(lastLine).length
    doc.replaceRange(processedContent, { line: 0, ch: 0 }, { line: lastLine, ch: lastCh })
    editor.value.refresh()

    // 更新 store
    posts.value[currentPostIndex.value].content = processedContent

    // 完成后关闭对话框
    setTimeout(() => {
      emit(`update:show`, false)
      isProcessing.value = false
      processProgress.value = 0
    }, 500)
  }
  catch (error) {
    console.error(`应用样式失败:`, error)
    isProcessing.value = false
    processProgress.value = 0
  }
}
</script>

<template>
  <Dialog :open="show" @update:open="(val) => emit('update:show', val)">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>AI智能排版</DialogTitle>
        <DialogDescription>
          选择文章风格,智能优化排版样式
        </DialogDescription>
      </DialogHeader>
      <div class="grid gap-4 py-4">
        <div class="grid grid-cols-4 items-center gap-4">
          <label class="text-right">文章风格</label>
          <Select v-model="styleType" class="col-span-3">
            <SelectTrigger>
              <SelectValue placeholder="选择文章风格" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="academic">
                学术风格
              </SelectItem>
              <SelectItem value="blog">
                博客风格
              </SelectItem>
              <SelectItem value="technical">
                技术文档风格
              </SelectItem>
              <SelectItem value="custom">
                自定义风格
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div v-if="styleType === 'custom'" class="grid gap-4">
          <div class="grid grid-cols-4 items-center gap-4">
            <label class="text-right">风格名称</label>
            <input
              v-model="customStyleName"
              type="text"
              class="col-span-3 h-9 border rounded-md px-3"
              placeholder="请输入自定义风格的名称"
            >
          </div>
          <div class="grid grid-cols-4 items-center gap-4">
            <label class="text-right">排版要求</label>
            <textarea
              v-model="customPrompt"
              class="col-span-3 h-32 border rounded-md p-2"
              placeholder="请输入自定义的排版要求，例如：&#10;1. 保持原有的Markdown语法&#10;2. 使用特定的写作风格&#10;3. 添加自定义的格式要求"
            />
          </div>
        </div>
        <div v-if="isProcessing" class="mt-2">
          <Progress :value="processProgress" class="w-full" />
        </div>
      </div>
      <div class="flex justify-end gap-3">
        <Button variant="outline" @click="emit('update:show', false)">
          取消
        </Button>
        <Button :disabled="isProcessing || (styleType === 'custom' && !customPrompt.trim())" @click="handleApplyStyle">
          {{ isProcessing ? '处理中...' : '应用样式' }}
        </Button>
      </div>
    </DialogContent>
  </Dialog>
</template>
