<script setup>
import { computed, ref } from 'vue'
import { useTheme } from '../composables/useTheme'
import { profile } from '../data/profile'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  //   { label: 'Contact', href: '#contact' },
]

const { isDark, toggleTheme } = useTheme()
const themeLabel = computed(() =>
  isDark.value ? 'Switch to light mode' : 'Switch to dark mode'
)

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleLinkClick = () => {
  closeMenu()
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-slate-50/80 backdrop-blur-lg dark:border-slate-800/60 dark:bg-slate-950/70"
  >
    <nav class="mx-auto w-full max-w-6xl px-4 py-4 sm:px-6 md:px-8 lg:px-0">
      <div class="flex items-center justify-between gap-4">
        <a
          href="#hero"
          class="flex flex-col text-left text-sm font-medium leading-tight text-slate-600 transition-colors hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-300"
        >
          <span class="text-lg font-semibold text-slate-900 dark:text-white">{{
            profile.name
          }}</span>
          <span>{{ profile.role }}</span>
        </a>

        <div
          class="hidden items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex"
        >
          <a
            v-for="link in navLinks"
            :key="link.href"
            :href="link.href"
            class="transition-colors hover:text-brand-600 dark:hover:text-brand-300"
          >
            {{ link.label }}
          </a>

          <a
            href="#contact"
            class="rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-slate-900 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-500"
          >
            Connect
          </a>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-colors hover:border-slate-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600"
            :aria-label="themeLabel"
            :aria-pressed="isDark"
            @click="toggleTheme"
          >
            <span
              v-if="isDark"
              class="inline-flex items-center"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            </span>
            <span
              v-else
              class="inline-flex items-center"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m0 12.728l1.414-1.414m11.314-11.314l-1.414 1.414"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />
              </svg>
            </span>
          </button>
        </div>

        <div class="flex items-center gap-3 md:hidden">
          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-600 transition-colors hover:border-slate-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-300 dark:hover:border-slate-600"
            :aria-label="themeLabel"
            :aria-pressed="isDark"
            @click="toggleTheme"
          >
            <span
              v-if="isDark"
              class="inline-flex items-center"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
                />
              </svg>
            </span>
            <span
              v-else
              class="inline-flex items-center"
            >
              <svg
                class="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364l-1.414-1.414M7.05 7.05L5.636 5.636m0 12.728l1.414-1.414m11.314-11.314l-1.414 1.414"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />
              </svg>
            </span>
          </button>

          <button
            type="button"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-700 transition-colors hover:border-slate-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            aria-label="Toggle navigation menu"
            :aria-expanded="isMenuOpen"
            @click="toggleMenu"
          >
            <svg
              v-if="!isMenuOpen"
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              v-else
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        v-show="isMenuOpen"
        class="mt-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white/90 p-4 text-sm font-medium text-slate-700 shadow-lg dark:border-slate-800 dark:bg-slate-900/90 dark:text-slate-200 md:hidden"
      >
        <a
          v-for="link in navLinks"
          :key="link.href + '-mobile'"
          :href="link.href"
          class="rounded-lg px-3 py-2 text-base transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
          @click="handleLinkClick"
        >
          {{ link.label }}
        </a>

        <a
          href="#contact"
          class="mt-1 rounded-full border border-slate-200 px-4 py-2 text-xs uppercase tracking-[0.2em] text-center text-slate-900 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:text-slate-100 dark:hover:border-brand-500"
          @click="handleLinkClick"
        >
          Connect
        </a>
      </div>
    </nav>
  </header>
</template>
