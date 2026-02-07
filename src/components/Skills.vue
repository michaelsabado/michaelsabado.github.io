<script setup>
import { skills } from '../data/skills'
</script>

<template>
  <section
    id="skills"
    class="space-y-8 rounded-3xl border border-slate-200/70 bg-white/60 px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 dark:border-slate-800/70 dark:bg-slate-900/40"
  >
    <div class="flex flex-col gap-3">
      <p class="section-heading">Skills</p>
      <h2
        class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
      >
        Broad experience, applied with intention.
      </h2>
      <p class="text-base text-slate-600 dark:text-slate-300">
        Strong fundamentals across frontend, backend, and cloud, with a focus on
        maintainable, production-ready solutions.
      </p>
    </div>

    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <article
        v-for="skill in skills"
        :key="skill.title"
        class="flex flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-card sm:p-6 dark:border-slate-800/80 dark:bg-slate-900/60"
      >
        <h3 class="text-xl font-semibold text-slate-900 dark:text-white">
          {{ skill.title }}
        </h3>
        <p class="mt-3 text-sm text-slate-500 dark:text-slate-400">
          {{ skill.description }}
        </p>
        <div class="mt-5 flex flex-wrap gap-2">
          <span
            v-for="item in skill.items"
            :key="item"
            class="rounded-full border border-slate-200/80 px-3 py-1 text-xs font-medium uppercase tracking-widest text-slate-600 dark:border-slate-700 dark:text-slate-300"
          >
            {{ item }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>
