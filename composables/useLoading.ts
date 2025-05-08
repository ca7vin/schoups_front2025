import { ref } from 'vue'

const isLoading = ref(false)
const progress = ref(0)

export const useLoading = () => {
  const simulateProgress = () => {
    progress.value = 0
    const interval = setInterval(() => {
      if (progress.value < 90) {
        progress.value += Math.floor(Math.random() * 10)
      }
    }, 100)
    return interval
  }

  const startLoading = () => {
    isLoading.value = true
    return simulateProgress()
  }

  const stopLoading = (interval: number) => {
    clearInterval(interval)
    progress.value = 100
    setTimeout(() => {
      isLoading.value = false
    }, 400)
  }

  return {
    isLoading,
    progress,
    startLoading,
    stopLoading
  }
}
