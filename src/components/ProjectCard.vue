<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
})

const techStack = computed(() => props.project.tech ?? [])
const isReversed = computed(() => props.index % 2 === 1)
const displayIndex = computed(() => props.index + 1)
</script>

<template>
  <article
    class="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-card transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800/80 dark:bg-slate-900/70"
  >
    <div
      class="flex flex-col gap-8 lg:flex-row"
      :class="{ 'lg:flex-row-reverse': isReversed }"
    >
      <div class="flex-1 space-y-6">
        <div
          class="flex items-center gap-4 text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500"
        >
          <span
            class="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-center text-[0.8rem] font-semibold leading-none tracking-normal text-slate-700 dark:border-slate-700 dark:text-slate-200"
          >
            {{ displayIndex }}
          </span>
          <span>Case Study</span>
        </div>

        <div class="space-y-3 text-pretty">
          <h3 class="text-2xl font-semibold text-slate-900 dark:text-white">
            {{ project.title }}
          </h3>
        </div>

        <div
          class="grid gap-4 rounded-2xl border border-slate-200/70 bg-white/70 p-4 text-sm text-slate-600 dark:border-slate-800/70 dark:bg-slate-900/60 dark:text-slate-300"
        >
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500"
            >
              Problem
            </p>
            <p class="mt-1 leading-relaxed">
              {{ project.problem }}
            </p>
          </div>
          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500"
            >
              Solution
            </p>
            <p class="mt-1 leading-relaxed">
              {{ project.solution }}
            </p>
          </div>
        </div>

        <div class="space-y-3 text-pretty">
          <div
            class="rounded-2xl bg-slate-100/80 p-4 text-sm text-slate-700 dark:bg-slate-800/50 dark:text-slate-200"
          >
            <p
              class="text-xs font-semibold uppercase tracking-[0.35em] text-slate-500 dark:text-slate-300"
            >
              Result
            </p>
            <p class="mt-2 leading-relaxed">
              {{ project.result }}
            </p>
          </div>
        </div>

        <!-- <div class="flex flex-col gap-3 sm:flex-row">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noreferrer noopener"
            class="btn-primary w-full justify-center text-sm"
          >
            GitHub
          </a>
          <a
            v-if="project.demo"
            :href="project.demo"
            target="_blank"
            rel="noreferrer noopener"
            class="btn-ghost w-full justify-center text-sm"
          >
            Live demo
          </a>
        </div> -->
      </div>

      <div class="lg:w-[42%] space-y-4">
        <div
          class="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-slate-100 dark:border-slate-800/70 dark:bg-slate-900/40"
        >
          <img
            :src="project.image.src"
            :alt="project.image.alt"
            class="h-56 w-full object-cover md:h-64"
            loading="lazy"
          />
          <div
            class="absolute inset-0 bg-gradient-to-tr from-slate-950/40 via-transparent"
          ></div>
        </div>

        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500"
          >
            Tech
          </p>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tech in techStack"
              :key="tech"
              class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>
