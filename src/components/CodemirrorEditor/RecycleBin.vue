<script setup lang="ts">
import { useStore } from '@/stores'
import { RotateCcw, Trash2 } from 'lucide-vue-next'
import { toast } from 'vue-sonner'

const store = useStore()

const isOpenDialog = ref(false)
const isOpenClearDialog = ref(false)

// 格式化删除时间
function formatDeleteTime(timestamp: number) {
  const date = new Date(timestamp)
  return date.toLocaleString()
}

// 恢复分组
function handleRestoreGroup(id: string) {
  store.restoreGroup(id)
  toast.success(`分组恢复成功`)
}

// 恢复文章
function handleRestorePost(index: number) {
  store.restorePost(index)
  toast.success(`文章恢复成功`)
}

// 清空回收站
function handleClearRecycleBin() {
  store.clearRecycleBin()
  isOpenClearDialog.value = false
  toast.success(`回收站已清空`)
}
</script>

<template>
  <Dialog v-model:open="isOpenDialog">
    <DialogTrigger as-child>
      <Button
        variant="ghost"
        size="icon"
        class="hover:bg-muted/50"
      >
        <Trash2 class="size-5" />
      </Button>
    </DialogTrigger>
    <DialogContent class="max-w-3xl">
      <DialogHeader>
        <DialogTitle class="flex items-center justify-between">
          <span>回收站</span>
          <Button
            v-if="store.recycleBin.groups.length > 0 || store.recycleBin.posts.length > 0"
            variant="destructive"
            size="sm"
            @click="isOpenClearDialog = true"
          >
            清空回收站
          </Button>
        </DialogTitle>
      </DialogHeader>

      <div class="space-y-4">
        <!-- 已删除的分组 -->
        <div v-if="store.recycleBin.groups.length > 0" class="space-y-2">
          <h3 class="font-medium">
            已删除的分组
          </h3>
          <div class="space-y-2">
            <div
              v-for="group in store.recycleBin.groups"
              :key="group.id"
              class="bg-muted/40 hover:bg-muted/60 flex items-center justify-between rounded-md p-2 transition-colors"
            >
              <div class="space-y-1">
                <div class="font-medium">
                  {{ group.title }}
                </div>
                <div class="text-muted-foreground text-sm">
                  删除时间：{{ formatDeleteTime(group.deletedAt) }}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                class="gap-2"
                @click="handleRestoreGroup(group.id)"
              >
                <RotateCcw class="size-4" />
                恢复
              </Button>
            </div>
          </div>
        </div>

        <!-- 已删除的文章 -->
        <div v-if="store.recycleBin.posts.length > 0" class="space-y-2">
          <h3 class="font-medium">
            已删除的文章
          </h3>
          <div class="space-y-2">
            <div
              v-for="(post, index) in store.recycleBin.posts"
              :key="post.title + post.deletedAt"
              class="bg-muted/40 hover:bg-muted/60 flex items-center justify-between rounded-md p-2 transition-colors"
            >
              <div class="space-y-1">
                <div class="font-medium">
                  {{ post.title }}
                </div>
                <div class="text-muted-foreground text-sm">
                  删除时间：{{ formatDeleteTime(post.deletedAt) }}
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                class="gap-2"
                @click="handleRestorePost(index)"
              >
                <RotateCcw class="size-4" />
                恢复
              </Button>
            </div>
          </div>
        </div>

        <!-- 空状态 -->
        <div
          v-if="store.recycleBin.groups.length === 0 && store.recycleBin.posts.length === 0"
          class="text-muted-foreground py-8 text-center"
        >
          回收站是空的
        </div>
      </div>
    </DialogContent>
  </Dialog>

  <!-- 清空回收站确认对话框 -->
  <AlertDialog v-model:open="isOpenClearDialog">
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>清空回收站</AlertDialogTitle>
        <AlertDialogDescription>
          确定要清空回收站吗？此操作将永久删除所有已删除的分组和文章，且无法恢复。
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel @click="isOpenClearDialog = false">
          取消
        </AlertDialogCancel>
        <AlertDialogAction
          class="bg-destructive hover:bg-destructive/90"
          @click="handleClearRecycleBin"
        >
          清空
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
</template>
