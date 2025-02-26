<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([`close`])

const links = [
  {
    label: `项目地址`,
    url: `https://github.com/357929231/jtt`,
  },
]

function onUpdate(val: boolean) {
  if (!val) {
    emit(`close`)
  }
}
function onRedirect(url: string) {
  window.open(url, `_blank`)
}
</script>

<template>
  <Dialog :open="props.visible" @update:open="onUpdate">
    <DialogContent class="sm:max-w-[600px]">
      <DialogHeader>
        <DialogTitle class="text-center">
          基于MD二次开发，新增AI功能
        </DialogTitle>
      </DialogHeader>
      <div class="text-center">
        <h3 class="mb-4 text-lg font-medium">
          一款高度简洁的微信 Markdown 编辑器
        </h3>

        <div class="grid grid-cols-2 my-6 gap-6">
          <div class="flex flex-col items-center">
            <p class="mb-3">
              扫码进入项目群，获取最新资讯
            </p>
            <img
              class="object-cover h-32 w-32 rounded-lg shadow-md"
              src="https://chucun-lianchengyun.oss-cn-beijing.aliyuncs.com/file/upload/2025/02/26/1894624886018543616.jpg"
              alt="公众号二维码"
            >
            <p class="text-muted-foreground mt-2 text-sm">
              扫码进群
            </p>
          </div>

          <div class="flex flex-col items-center">
            <p class="mb-3">
              添加作者微信进群交流
            </p>
            <img
              class="object-cover h-32 w-32 rounded-lg shadow-md"
              src="https://chucun-lianchengyun.oss-cn-beijing.aliyuncs.com/file/upload/2025/02/15/1890680560871804928.jpg"
              alt="作者微信二维码"
            >
            <p class="text-muted-foreground mt-2 text-sm">
              扫码添加
            </p>
          </div>
        </div>
      </div>

      <DialogFooter class="border-t pt-4 sm:justify-evenly">
        <Button
          v-for="link in links"
          :key="link.url"
          variant="outline"
          @click="onRedirect(link.url)"
        >
          {{ link.label }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>

<style scoped>
.grid {
  display: grid;
}
@media (max-width: 640px) {
  .grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>
