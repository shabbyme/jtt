import { ref } from 'vue'

interface Toast {
  id: string
  title: string
  description?: string
  variant?: `default` | `destructive`
  duration?: number
}

const toasts = ref<Toast[]>([])

export function useToast() {
  function toast(options: Omit<Toast, `id`>) {
    const id = Math.random().toString(36).slice(2)
    const newToast: Toast = {
      id,
      ...options,
      duration: options.duration || 3000,
    }

    toasts.value.push(newToast)

    setTimeout(() => {
      toasts.value = toasts.value.filter(t => t.id !== id)
    }, newToast.duration)
  }

  return {
    toast,
    toasts,
  }
}
