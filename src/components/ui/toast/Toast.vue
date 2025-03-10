<script setup lang="ts">
import { useToast } from '../use-toast'

const { toasts } = useToast()
</script>

<template>
  <div
    class="fixed left-1/2 top-4 flex flex-col items-center gap-2 -translate-x-1/2"
    style="z-index: 9999;"
  >
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="min-w-[200px] rounded-md px-4 py-2 shadow-lg transition-all duration-300"
      :style="{
        backgroundColor: 'white',
        color: toast.variant === 'destructive' ? '#ef4444' : '#22c55e',
      }"
    >
      <div class="flex items-start gap-2">
        <div class="flex-1 text-center">
          <div class="text-base font-medium">
            {{ toast.title }}
          </div>
          <div
            v-if="toast.description"
            class="mt-1 text-sm"
            :style="{
              color: toast.variant === 'destructive' ? '#ef4444' : '#22c55e',
              opacity: 0.9,
            }"
          >
            {{ toast.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fixed {
  pointer-events: none;
}
</style>
