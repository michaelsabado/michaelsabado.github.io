<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <section
    id="about"
    class="space-y-0"
  >
    <div class="grid gap-8 lg:grid-cols-[0.5fr,1fr] lg:gap-10">
      <div
        class="relative space-y-4 pl-6 before:absolute before:left-0 before:top-0 before:h-full before:w-1 before:rounded-full before:bg-gradient-to-b before:from-brand-400/80 before:via-brand-500/40 before:to-transparent before:content-['']"
      >
        <p class="section-heading">About</p>
        <h2
          class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
        >
          Building Reliable Software.
        </h2>
        <p class="text-sm text-slate-500 dark:text-slate-400">
          {{ profile.location }} · {{ profile.availability }}
        </p>
      </div>

      <div
        class="space-y-6 text-base leading-relaxed text-slate-600 sm:space-y-8 dark:text-slate-300"
      >
        <p>{{ profile.summary }}</p>
        <p>{{ profile.secondarySummary }}</p>

        <div class="mt-6 border-t border-slate-200/70 pt-6 dark:border-slate-800">
          <p
            class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
          >
            Ways I can help
          </p>
          <div class="mt-4 flex flex-wrap gap-3">
            <span
              v-for="highlight in profile.highlights"
              :key="highlight"
              class="rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-sm text-slate-700 shadow-sm transition-colors hover:border-slate-300 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-200"
            >
              {{ highlight }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
