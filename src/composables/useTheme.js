import { ref } from 'vue'

const STORAGE_KEY = 'portfolio-theme'
const isDark = ref(false)
let initialized = false
let mediaQuery
let mediaListener

const applyTheme = (value) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (value) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

export const initializeTheme = () => {
  if (initialized || typeof window === 'undefined') return

  mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const stored = window.localStorage.getItem(STORAGE_KEY)
  const prefersDark = stored ? stored === 'dark' : mediaQuery.matches

  isDark.value = prefersDark
  applyTheme(prefersDark)
  initialized = true

  mediaListener = (event) => {
    if (window.localStorage.getItem(STORAGE_KEY)) return
    isDark.value = event.matches
    applyTheme(event.matches)
  }

  mediaQuery.addEventListener('change', mediaListener)
}

export function useTheme() {
  if (!initialized && typeof window !== 'undefined') {
    initializeTheme()
  }

  const setTheme = (value) => {
    if (typeof window === 'undefined') return
    const next = Boolean(value)
    isDark.value = next
    window.localStorage.setItem(STORAGE_KEY, next ? 'dark' : 'light')
    applyTheme(next)
  }

  const toggleTheme = () => setTheme(!isDark.value)

  return {
    isDark,
    toggleTheme,
    setTheme,
  }
}
