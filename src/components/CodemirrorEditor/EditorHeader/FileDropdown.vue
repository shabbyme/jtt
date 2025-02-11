<script setup lang="ts">
import { toast } from '@/composables/useToast'
import { exportToWord } from '@/services/export'
import { useStore } from '@/stores'
import { Download, FileCode, FileText, FileType, Image, Newspaper, Upload } from 'lucide-vue-next'
import { ref } from 'vue'
import { Toaster } from 'vue-sonner'
import ExportImageDialog from './ExportImageDialog.vue'
import ImportWechatDialog from './ImportWechatDialog.vue'
import MarkdownTemplateDialog from './MarkdownTemplateDialog.vue'

const store = useStore()

const {
  isDark,
  isEditOnLeft,
} = storeToRefs(store)

const {
  exportEditorContent2HTML,
  exportEditorContent2MD,
  importMarkdownContent,
} = store

const showImportDialog = ref(false)
const showExportDialog = ref(false)
const showTemplateDialog = ref(false)

function showImportWechatDialog() {
  showImportDialog.value = true
}

function handleExportImage() {
  showExportDialog.value = true
}

async function exportWord() {
  try {
    const content = store.posts[store.currentPostIndex].content
    const title = store.posts[store.currentPostIndex].title || `Markdown Export`
    await exportToWord(content, {
      title,
      author: `MD Editor`,
      subject: `从 Markdown 导出的文档`,
    })
    toast.success(`Word文档导出成功`)
  }
  catch (error) {
    console.error(`导出Word文档失败:`, error)
    toast.error(`导出失败：${error instanceof Error ? error.message : `未知错误`}`)
  }
}
</script>

<template>
  <MenubarMenu>
    <MenubarTrigger>
      文件
    </MenubarTrigger>
    <MenubarContent align="start">
      <MenubarItem @click="importMarkdownContent()">
        <Upload class="mr-2 size-4" />
        导入 .md
      </MenubarItem>
      <MenubarItem @click="showImportWechatDialog">
        <Newspaper class="mr-2 size-4" />
        导入公众号文章
      </MenubarItem>
      <MenubarItem @click="showTemplateDialog = true">
        <FileType class="mr-2 size-4" />
        插入模板
      </MenubarItem>
      <MenubarSeparator />
      <MenubarItem @click="exportEditorContent2MD()">
        <Download class="mr-2 size-4" />
        导出 .md
      </MenubarItem>
      <MenubarItem @click="exportEditorContent2HTML()">
        <FileCode class="mr-2 size-4" />
        导出 .html
      </MenubarItem>
      <MenubarItem @click="exportWord">
        <FileText class="mr-2 size-4" />
        导出 .docx
      </MenubarItem>
      <MenubarItem @click="handleExportImage">
        <Image class="mr-2 size-4" />
        导出长图
      </MenubarItem>
      <MenubarSeparator />
      <MenubarCheckboxItem v-model:checked="isDark">
        深色模式
      </MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarCheckboxItem v-model:checked="isEditOnLeft">
        左侧编辑
      </MenubarCheckboxItem>
    </MenubarContent>
  </MenubarMenu>

  <ImportWechatDialog v-model:show="showImportDialog" />
  <ExportImageDialog v-model:show="showExportDialog" />
  <MarkdownTemplateDialog v-model:show="showTemplateDialog" />
  <Toaster position="top-center" theme="system" close-button />
</template>
