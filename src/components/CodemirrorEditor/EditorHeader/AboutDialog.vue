<script setup lang="ts">
const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([`close`])

function onUpdate(val: boolean) {
  if (!val) {
    emit(`close`)
  }
}

const links = [
  { label: `原GitHub 仓库`, url: `https://github.com/doocs/md` },
  { label: `原Gitee 仓库`, url: `https://gitee.com/doocs/md` },
  { label: `原GitCode 仓库`, url: `https://gitcode.com/doocs/md` },
]

function onRedirect(url: string) {
  window.open(url, `_blank`)
}
</script>

<template>
  <Dialog :open="props.visible" @update:open="onUpdate">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>基于MD二次开发，新增AI功能</DialogTitle>
      </DialogHeader>
      <div class="text-center">
        <h3>一款高度简洁的微信 Markdown 编辑器</h3>
        <p>扫码关注公众号 天马座AI，原创技术内容第一时间推送！</p>
        <img
          class="mx-auto my-5"
          src="https://chucun-lianchengyun.oss-cn-beijing.aliyuncs.com/file/upload/2024/07/12/1811639659546021888.jpg"
          alt="Doocs Markdown 编辑器"
          style="width: 40%"
        >
        <p class="mt-4">
          加入 QQ 群讨论：123456789
        </p>
      </div>
      <DialogFooter class="sm:justify-evenly">
        <Button
          v-for="link in links"
          :key="link.url"
          @click="onRedirect(link.url)"
        >
          {{ link.label }}
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
