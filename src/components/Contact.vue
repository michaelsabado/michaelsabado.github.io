<script setup>
import { profile } from '../data/profile'

const mailto = `mailto:${profile.contact.email}`
</script>

<template>
  <section id="contact">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[0.9fr,1.1fr]">
      <div class="space-y-6 text-pretty">
        <p class="section-heading">Contact</p>
        <h2
          class="text-3xl font-semibold tracking-tight text-slate-900 text-balance dark:text-white"
        >
          Build with me.
        </h2>
        <p class="text-base text-slate-600 text-pretty sm:text-lg dark:text-slate-300">
          {{ profile.contact.note }}
        </p>
        <div v-if="profile.contact.availability">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Availability
          </p>
          <p class="mt-2 text-base text-slate-800 sm:text-lg dark:text-slate-200">
            {{ profile.contact.availability }}
          </p>
        </div>
        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Based in
          </p>
          <p class="mt-2 text-base text-slate-800 sm:text-lg dark:text-slate-200">
            {{ profile.contact.location }}
          </p>
        </div>
      </div>

      <div
        class="space-y-6 rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-card sm:p-8 dark:border-slate-800/80 dark:bg-slate-900/60"
      >
        <div class="space-y-4">
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Email
          </p>
          <a
            :href="mailto"
            class="break-words text-base font-semibold text-slate-900 underline-offset-4 transition hover:text-brand-600 sm:text-2xl dark:text-white dark:hover:text-brand-300"
          >
            {{ profile.contact.email }}
          </a>
        </div>

        <div>
          <p
            class="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Social
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <a
              v-for="social in profile.contact.socials"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noreferrer noopener"
              class="rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-600 dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500"
            >
              <span class="flex items-center justify-center gap-2 whitespace-nowrap">
                <span
                  class="text-slate-500 dark:text-slate-400"
                  aria-hidden="true"
                >
                  <svg
                    v-if="social.icon === 'linkedin'"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M4.98 3.5C4.98 4.61 4.08 5.5 2.99 5.5C1.9 5.5 1 4.61 1 3.5C1 2.4 1.9 1.5 2.99 1.5C4.08 1.5 4.98 2.4 4.98 3.5ZM1.2 21.5H4.78V7.98H1.2V21.5ZM8.58 7.98H12.04V9.56H12.09C12.57 8.66 13.79 7.72 15.54 7.72C19.2 7.72 19.86 10.22 19.86 13.35V21.5H16.28V14.19C16.28 12.53 16.25 10.4 14.01 10.4C11.75 10.4 11.41 12.21 11.41 14.07V21.5H7.83V7.98H8.58Z"
                    />
                  </svg>
                  <svg
                    v-else-if="social.icon === 'github'"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12C1.5 16.62 4.44 20.51 8.55 21.98C9.05 22.07 9.23 21.77 9.23 21.51C9.23 21.28 9.22 20.62 9.22 19.84C6.73 20.37 6.18 18.68 6.18 18.68C5.72 17.53 5.03 17.22 5.03 17.22C4.06 16.57 5.1 16.58 5.1 16.58C6.16 16.65 6.72 17.66 6.72 17.66C7.68 19.32 9.27 18.84 9.87 18.58C9.96 17.91 10.22 17.45 10.5 17.21C8.35 16.97 6.08 16.19 6.08 12.52C6.08 11.5 6.44 10.67 7.03 10.03C6.93 9.79 6.59 8.86 7.12 7.65C7.12 7.65 7.9 7.38 9.22 8.32C9.97 8.11 10.78 8.01 11.58 8.01C12.38 8.01 13.19 8.11 13.94 8.32C15.26 7.38 16.04 7.65 16.04 7.65C16.57 8.86 16.23 9.79 16.13 10.03C16.72 10.67 17.08 11.5 17.08 12.52C17.08 16.2 14.8 16.96 12.64 17.2C12.99 17.5 13.31 18.07 13.31 18.92C13.31 20.04 13.3 21.14 13.3 21.51C13.3 21.77 13.48 22.08 13.99 21.98C18.09 20.51 21.03 16.62 21.03 12C21.03 6.21 16.32 1.5 10.53 1.5H12Z"
                    />
                  </svg>
                  <svg
                    v-else-if="social.icon === 'instagram'"
                    class="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      d="M16.5 2H7.5C4.46 2 2 4.46 2 7.5V16.5C2 19.54 4.46 22 7.5 22H16.5C19.54 22 22 19.54 22 16.5V7.5C22 4.46 19.54 2 16.5 2ZM20 16.5C20 18.43 18.43 20 16.5 20H7.5C5.57 20 4 18.43 4 16.5V7.5C4 5.57 5.57 4 7.5 4H16.5C18.43 4 20 5.57 20 7.5V16.5Z"
                    />
                    <path
                      d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 15C10.35 15 9 13.65 9 12C9 10.35 10.35 9 12 9C13.65 9 15 10.35 15 12C15 13.65 13.65 15 12 15Z"
                    />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1.5"
                    />
                  </svg>
                </span>
                <span>{{ social.label }}</span>
              </span>
            </a>
          </div>
        </div>

        <div class="flex w-full flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
          <a
            :href="mailto"
            class="btn-primary w-full sm:w-auto"
            >Start a project</a
          >
          <!-- <a
            href="#projects"
            class="btn-ghost w-full sm:w-auto"
            >Review work</a
          > -->
        </div>
      </div>
    </div>
  </section>
</template>
