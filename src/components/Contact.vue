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
          class="text-xl font-semibold tracking-tight text-slate-900 text-balance sm:text-3xl dark:text-white"
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
            class="break-words text-xl font-semibold text-slate-900 underline-offset-4 transition hover:text-brand-600 sm:text-3xl dark:text-white dark:hover:text-brand-300"
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
          <div class="mt-3 flex flex-wrap gap-3">
            <a
              v-for="social in profile.contact.socials"
              :key="social.label"
              :href="social.url"
              target="_blank"
              rel="noreferrer noopener"
              class="w-full rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-brand-200 hover:text-brand-600 sm:w-auto dark:border-slate-700 dark:text-slate-200 dark:hover:border-brand-500"
            >
              {{ social.label }}
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
