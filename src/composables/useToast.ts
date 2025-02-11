import { toast as sonnerToast } from 'vue-sonner'

interface ToastOptions {
  duration?: number
  position?: `top-center` | `top-right` | `bottom-right` | `bottom-center`
}

// 创建一个包装器，统一处理提示样式
export const toast = {
  success(message: string, options: ToastOptions = {}) {
    sonnerToast.success(message, {
      duration: options.duration || 2000,
      position: options.position || `top-center`,
      style: {
        background: `var(--background)`,
        border: `1px solid var(--border)`,
        color: `var(--foreground)`,
      },
    })
  },

  error(message: string, options: ToastOptions = {}) {
    sonnerToast.error(message, {
      duration: options.duration || 3000,
      position: options.position || `top-center`,
      style: {
        background: `var(--destructive)`,
        color: `var(--destructive-foreground)`,
      },
    })
  },

  info(message: string, options: ToastOptions = {}) {
    sonnerToast(message, {
      duration: options.duration || 2000,
      position: options.position || `top-center`,
      style: {
        background: `var(--background)`,
        border: `1px solid var(--border)`,
        color: `var(--foreground)`,
      },
    })
  },

  warning(message: string, options: ToastOptions = {}) {
    sonnerToast.warning(message, {
      duration: options.duration || 3000,
      position: options.position || `top-center`,
      style: {
        background: `var(--warning)`,
        color: `var(--warning-foreground)`,
      },
    })
  },
}
