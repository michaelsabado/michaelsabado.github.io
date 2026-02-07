<script setup>
import { profile } from '../data/profile'

const quickLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = profile.contact?.socials ?? []
const timezone = 'UTC+8'
</script>

<template>
  <footer
    class="border-t border-slate-200/60 bg-white/70 py-10 text-sm text-slate-500 dark:border-slate-800/60 dark:bg-slate-950/60 dark:text-slate-400"
  >
    <div
      class="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:grid-cols-[1.2fr,0.9fr,0.9fr] sm:px-6 lg:px-0"
    >
      <div class="space-y-3">
        <p>
          &copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
        </p>
        <p class="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
          Code. Build. Deliver.
        </p>
        <p class="text-xs text-slate-400 dark:text-slate-500">
          Based in {{ profile.location ?? profile.contact?.location }} • {{ timezone }}
        </p>
      </div>

      <div>
        <p
          class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500"
        >
          Quick links
        </p>
        <nav aria-label="Footer navigation">
          <ul
            class="mt-4 flex flex-wrap gap-4 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <li
              v-for="link in quickLinks"
              :key="link.href"
            >
              <a
                :href="link.href"
                class="transition hover:text-slate-900 focus-visible:text-slate-900 dark:hover:text-white dark:focus-visible:text-white"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div>
        <p
          class="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500"
        >
          Stay connected
        </p>
        <p class="mt-3 text-sm">{{ profile.contact?.location }} • {{ timezone }}</p>
        <div class="mt-4 flex items-center gap-3">
          <a
            v-for="social in socialLinks"
            :key="social.label"
            :href="social.url"
            target="_blank"
            rel="noreferrer noopener"
            class="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/60 text-slate-600 transition hover:border-slate-400 hover:text-slate-900 dark:border-slate-800/60 dark:text-slate-300 dark:hover:border-slate-600 dark:hover:text-white"
            :aria-label="social.label"
          >
            <span class="sr-only">{{ social.label }}</span>
            <svg
              v-if="social.icon === 'github'"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.42-1.306.763-1.606-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 6.004 0c2.292-1.553 3.298-1.23 3.298-1.23.655 1.653.243 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.61-2.804 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.218.694.825.576C20.565 21.796 24 17.297 24 12c0-6.63-5.373-12-12-12Z"
              />
            </svg>
            <svg
              v-else-if="social.icon === 'linkedin'"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path
                d="M4.98 3.5a2.5 2.5 0 1 1-5.002 0 2.5 2.5 0 0 1 5.003 0ZM.25 8.5h4.5V24h-4.5zm8.5 0h4.31v2.11h.06c.6-1.14 2.07-2.34 4.26-2.34C21.65 8.27 24 10.52 24 15v9h-4.5v-8.22c0-1.96-.04-4.48-2.73-4.48-2.73 0-3.14 2.14-3.14 4.34V24H9z"
              />
            </svg>
            <svg
              v-else-if="social.icon === 'instagram'"
              viewBox="0 0 24 24"
              class="h-5 w-5 fill-current"
              aria-hidden="true"
            >
              <path
                d="M7 2c-2.757 0-5 2.243-5 5v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm6.5-3.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
              />
            </svg>
            <svg
              v-else
              viewBox="0 0 24 24"
              class="h-5 w-5 stroke-current"
              fill="none"
              stroke-width="1.5"
              aria-hidden="true"
            >
              <path
                d="M4 12h16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 4v16"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
