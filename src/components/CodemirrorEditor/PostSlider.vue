<script setup lang="ts">
import { useStore } from '@/stores'
import { Edit3, Ellipsis, Plus, Trash } from 'lucide-vue-next'
import { toast } from 'vue-sonner'
import RecycleBin from './RecycleBin.vue'

const store = useStore()

const isOpen = ref(false)
const addPostInputVal = ref(``)
const editTarget = ref(-1)
const isOpenEditDialog = ref(false)
const renamePostInputVal = ref(``)
const isOpenDelPostConfirmDialog = ref(false)

// 分组相关
const isOpenAddGroupDialog = ref(false)
const addGroupInputVal = ref(``)
const editGroupTarget = ref(``)
const isOpenEditGroupDialog = ref(false)
const renameGroupInputVal = ref(``)
const isOpenDelGroupConfirmDialog = ref(false)

// 监听对话框状态
watch(isOpen, () => {
  if (isOpen.value) {
    addPostInputVal.value = ``
  }
})

watch(isOpenAddGroupDialog, () => {
  if (isOpenAddGroupDialog.value) {
    addGroupInputVal.value = ``
  }
})

// 添加新文章
function addPost() {
  if (!addPostInputVal.value.trim()) {
    toast.error(`内容标题不可为空`)
    return
  }
  store.addPost(addPostInputVal.value.trim(), store.currentGroupId)
  isOpen.value = false
  toast.success(`内容新增成功`)
}

// 添加新分组
function addGroup() {
  if (!addGroupInputVal.value.trim()) {
    toast.error(`分组名称不可为空`)
    return
  }
  const id = store.addGroup(addGroupInputVal.value.trim())
  store.currentGroupId = id
  isOpenAddGroupDialog.value = false
  toast.success(`分组新增成功`)
}

// 开始重命名分组
function startRenameGroup(id: string) {
  editGroupTarget.value = id
  const group = store.groups.find(g => g.id === id)
  if (group) {
    renameGroupInputVal.value = group.title
    isOpenEditGroupDialog.value = true
  }
}

// 确认重命名分组
function renameGroup() {
  if (!renameGroupInputVal.value.trim()) {
    toast.error(`分组名称不可为空`)
    return
  }
  store.renameGroup(editGroupTarget.value, renameGroupInputVal.value.trim())
  isOpenEditGroupDialog.value = false
  toast.success(`分组重命名成功`)
}

// 开始删除分组
function startDelGroup(id: string) {
  editGroupTarget.value = id
  isOpenDelGroupConfirmDialog.value = true
}

// 确认删除分组
function delGroup() {
  store.deleteGroup(editGroupTarget.value)
  isOpenDelGroupConfirmDialog.value = false
  toast.success(`分组删除成功`)
}

// 切换分组
function switchGroup(id: string) {
  store.currentGroupId = id
}

// 开始重命名
function startRenamePost(index: number) {
  editTarget.value = index
  const post = store.currentGroupPosts[index]
  if (post) {
    renamePostInputVal.value = post.title
    isOpenEditDialog.value = true
  }
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
      <div class="flex items-center justify-between">
        <!-- 新增分组按钮 -->
        <Dialog v-model:open="isOpenAddGroupDialog">
          <DialogTrigger as-child>
            <Button
              variant="outline"
              class="group bg-background/60 hover:bg-background relative flex-1 overflow-hidden shadow-sm transition-all duration-200 hover:shadow"
              size="sm"
            >
              <div class="from-primary/10 via-primary/5 to-transparent bg-gradient-to-r absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Plus class="text-primary mr-2 size-4" />
              <span class="font-medium">新建分组</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>新建分组</DialogTitle>
              <DialogDescription>请输入分组名称</DialogDescription>
            </DialogHeader>
            <Input
              v-model="addGroupInputVal"
              placeholder="请输入分组名称"
              class="shadow-sm"
              @keyup.enter="addGroup"
            />
            <DialogFooter>
              <Button class="shadow-sm" @click="addGroup">
                确定
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <!-- 回收站 -->
        <RecycleBin />
      </div>

      <!-- 分组列表 -->
      <div class="space-y-1.5 flex flex-col">
        <!-- 默认分组 -->
        <div
          v-for="group in store.groups.filter(g => g.id === 'default')"
          :key="group.id"
          class="group relative"
        >
          <!-- 分组标题 -->
          <div
            class="bg-background/60 flex items-center rounded-md transition-all duration-200"
            :class="[
              store.currentGroupId === group.id
                ? 'bg-primary shadow-md ring-1 ring-primary/20 text-primary-foreground dark:bg-primary-dark dark:text-primary-foreground-dark'
                : 'hover:bg-muted/80 hover:shadow-sm hover:ring-1 hover:ring-border',
            ]"
          >
            <button
              class="h-9 flex flex-1 items-center px-3 text-sm font-medium transition-transform duration-200 group-hover:translate-x-1"
              @click="switchGroup(group.id)"
            >
              <span class="line-clamp-1">{{ group.title }}</span>
            </button>
          </div>

          <!-- 该分组下的文章列表 -->
          <div v-if="store.currentGroupId === group.id" class="space-y-1.5 ml-4 mt-1.5">
            <!-- 新增文章按钮 -->
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
            <div
              v-for="(post, index) in store.currentGroupPosts"
              :key="post.title"
              class="group bg-background/60 relative flex items-center rounded-md transition-all duration-200"
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
                      v-if="store.currentGroupPosts.length > 1"
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
        </div>

        <!-- 其他分组 -->
        <div
          v-for="group in store.groups.filter(g => g.id !== 'default')"
          :key="group.id"
          class="group relative"
        >
          <!-- 分组标题 -->
          <div
            class="bg-background/60 flex items-center rounded-md transition-all duration-200"
            :class="[
              store.currentGroupId === group.id
                ? 'bg-primary shadow-md ring-1 ring-primary/20 text-primary-foreground dark:bg-primary-dark dark:text-primary-foreground-dark'
                : 'hover:bg-muted/80 hover:shadow-sm hover:ring-1 hover:ring-border',
            ]"
          >
            <button
              class="h-9 flex flex-1 items-center px-3 text-sm font-medium transition-transform duration-200 group-hover:translate-x-1"
              @click="switchGroup(group.id)"
            >
              <span class="line-clamp-1">{{ group.title }}</span>
            </button>
            <div class="absolute right-2 flex items-center opacity-0 transition-all duration-200 group-hover:opacity-100">
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
                  <DropdownMenuItem class="gap-2" @click="startRenameGroup(group.id)">
                    <Edit3 class="size-4" />
                    重命名
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    class="text-destructive gap-2 dark:text-red-400"
                    @click="startDelGroup(group.id)"
                  >
                    <Trash class="size-4" />
                    删除
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <!-- 该分组下的文章列表 -->
          <div v-if="store.currentGroupId === group.id" class="space-y-1.5 ml-4 mt-1.5">
            <!-- 新增文章按钮 -->
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
            <div
              v-for="(post, index) in store.currentGroupPosts"
              :key="post.title"
              class="group bg-background/60 relative flex items-center rounded-md transition-all duration-200"
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
                      v-if="store.currentGroupPosts.length > 1"
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
        </div>
      </div>
    </nav>
  </div>

  <!-- 重命名分组对话框 -->
  <Dialog v-model:open="isOpenEditGroupDialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>重命名分组</DialogTitle>
        <DialogDescription>请输入新的分组名称</DialogDescription>
      </DialogHeader>
      <Input
        v-model="renameGroupInputVal"
        placeholder="请输入分组名称"
        class="shadow-sm"
        @keyup.enter="renameGroup"
      />
      <DialogFooter>
        <Button class="shadow-sm" @click="renameGroup">
          确定
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  <!-- 删除分组确认对话框 -->
  <Dialog v-model:open="isOpenDelGroupConfirmDialog">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>删除分组</DialogTitle>
        <DialogDescription>
          确定要删除该分组吗？该分组下的所有文章将会被一并删除且无法恢复。
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" @click="isOpenDelGroupConfirmDialog = false">
          取消
        </Button>
        <Button variant="destructive" @click="delGroup">
          确定
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>

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
