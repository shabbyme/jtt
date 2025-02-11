<script setup lang="ts">
import { useStore } from '@/stores'
import { Edit3, Ellipsis, Plus, Trash } from 'lucide-vue-next'

const store = useStore()

const isOpen = ref(false)
const addPostInputVal = ref(``)
const editTarget = ref(-1)
const isOpenEditDialog = ref(false)
const renamePostInputVal = ref(``)
const isOpenDelPostConfirmDialog = ref(false)

// 监听对话框状态
watch(isOpen, () => {
  if (isOpen.value) {
    addPostInputVal.value = ``
  }
})

// 添加新文章
function addPost() {
  if (!addPostInputVal.value.trim()) {
    toast.error(`内容标题不可为空`)
    return
  }
  store.addPost(addPostInputVal.value.trim())
  isOpen.value = false
  toast.success(`内容新增成功`)
}

// 开始重命名
function startRenamePost(index: number) {
  editTarget.value = index
  renamePostInputVal.value = store.posts[index].title
  isOpenEditDialog.value = true
}

// 确认重命名
function renamePost() {
  if (!renamePostInputVal.value.trim()) {
    toast.error(`内容标题不可为空`)
    return
  }
  store.renamePost(editTarget.value, renamePostInputVal.value.trim())
  isOpenEditDialog.value = false
  toast.success(`内容重命名成功`)
}

// 开始删除
function startDelPost(index: number) {
  editTarget.value = index
  isOpenDelPostConfirmDialog.value = true
}

// 确认删除
function delPost() {
  store.delPost(editTarget.value)
  isOpenDelPostConfirmDialog.value = false
  toast.success(`内容删除成功`)
}

// 切换文章
function switchPost(index: number) {
  store.currentPostIndex = index
}
</script>

<template>
  <div
    class="from-background/50 to-muted/50 backdrop-blur-sm post-slider bg-gradient-to-b border-border/40 supports-[backdrop-filter]:bg-background/60 relative h-full flex flex-shrink-0 flex-grow-0 transform-gpu overflow-hidden border-r transition-all duration-300 ease-in-out"
    :class="[
      store.isOpenPostSlider ? 'w-[240px]' : 'w-0',
    ]"
  >
    <nav
      class="space-y-3 h-full w-[240px] flex flex-col overflow-x-hidden overflow-y-auto p-3 transition-transform duration-300"
      :class="[
        store.isOpenPostSlider ? 'translate-x-0' : '-translate-x-full',
      ]"
    >
      <!-- 新增按钮 -->
      <Dialog v-model:open="isOpen">
        <DialogTrigger as-child>
          <Button
            variant="outline"
            class="group bg-background/60 hover:bg-background relative w-full overflow-hidden shadow-sm transition-all duration-200 hover:shadow"
            size="sm"
          >
            <div class="from-primary/10 via-primary/5 to-transparent bg-gradient-to-r absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Plus class="text-primary mr-2 size-4" />
            <span class="font-medium">新建文章</span>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>新建文章</DialogTitle>
            <DialogDescription>请输入文章标题</DialogDescription>
          </DialogHeader>
          <Input
            v-model="addPostInputVal"
            placeholder="请输入文章标题"
            class="shadow-sm"
            @keyup.enter="addPost"
          />
          <DialogFooter>
            <Button class="shadow-sm" @click="addPost">
              确定
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <!-- 文章列表 -->
      <div class="space-y-1.5 flex flex-col">
        <div
          v-for="(post, index) in store.posts"
          :key="post.title"
          class="group relative flex items-center rounded-md transition-all duration-200"
          :class="[
            store.currentPostIndex === index
              ? 'bg-primary shadow-md ring-1 ring-primary/20 text-primary-foreground dark:bg-primary-dark dark:text-primary-foreground-dark'
              : 'hover:bg-muted/80 hover:shadow-sm hover:ring-1 hover:ring-border',
          ]"
        >
          <button
            class="h-9 flex flex-1 items-center px-3 text-sm font-medium transition-transform duration-200 group-hover:translate-x-1"
            @click="switchPost(index)"
          >
            <span class="line-clamp-1">{{ post.title }}</span>
          </button>
          <div
            class="absolute right-2 flex items-center opacity-0 transition-all duration-200 group-hover:opacity-100"
          >
            <DropdownMenu>
              <DropdownMenuTrigger as-child>
                <Button
                  size="icon"
                  variant="ghost"
                  class="h-7 w-7"
                >
                  <Ellipsis class="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem class="gap-2" @click="startRenamePost(index)">
                  <Edit3 class="size-4" />
                  重命名
                </DropdownMenuItem>
                <DropdownMenuItem
                  v-if="store.posts.length > 1"
                  class="text-destructive gap-2 dark:text-red-400"
                  @click="startDelPost(index)"
                >
                  <Trash class="size-4" />
                  删除
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      <!-- 重命名对话框 -->
      <Dialog v-model:open="isOpenEditDialog">
        <DialogContent>
          <DialogHeader>
            <DialogTitle>重命名文章</DialogTitle>
            <DialogDescription>请输入新的文章标题</DialogDescription>
          </DialogHeader>
          <Input
            v-model="renamePostInputVal"
            placeholder="请输入新的标题"
            class="shadow-sm"
            @keyup.enter="renamePost"
          />
          <DialogFooter>
            <Button variant="outline" class="shadow-sm" @click="isOpenEditDialog = false">
              取消
            </Button>
            <Button class="shadow-sm" @click="renamePost">
              保存
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <!-- 删除确认对话框 -->
      <AlertDialog v-model:open="isOpenDelPostConfirmDialog">
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>确认删除</AlertDialogTitle>
            <AlertDialogDescription>
              删除后将无法恢复，是否确认删除该文章？
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel class="shadow-sm">
              取消
            </AlertDialogCancel>
            <AlertDialogAction class="bg-destructive hover:bg-destructive/90 shadow-sm" @click="delPost">
              删除
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </nav>
  </div>
</template>

<style scoped>
.post-slider {
  will-change: width;
}

/* 自定义滚动条样式 */
nav::-webkit-scrollbar {
  width: 3px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background-color: rgba(var(--primary), 0.15);
  border-radius: 1.5px;
}

nav::-webkit-scrollbar-thumb:hover {
  background-color: rgba(var(--primary), 0.3);
}

/* 暗色模式滚动条 */
:global(.dark) nav::-webkit-scrollbar-thumb {
  background-color: rgba(var(--primary), 0.2);
}

:global(.dark) nav::-webkit-scrollbar-thumb:hover {
  background-color: rgba(var(--primary), 0.4);
}

/* 列表项动画效果 */
.group {
  position: relative;
  overflow: hidden;
}

.group::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, transparent, rgba(var(--primary), 0.05), transparent);
  transform: translateX(-100%);
  transition: transform 0.6s ease;
}

.group:hover::after {
  transform: translateX(100%);
}
</style>
