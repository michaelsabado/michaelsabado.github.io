<script setup>
import { workExperience } from '../data/work'
</script>

<template>
  <section
    id="experience"
    class="space-y-10"
  >
    <div class="flex flex-col gap-3">
      <p class="section-heading">Work Experience</p>
      <h2
        class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
      >
        Real-world engineering experience.
      </h2>
      <p class="text-base text-slate-600 dark:text-slate-300">
        Designing, building, and maintaining production systems.
      </p>
    </div>

    <div class="relative space-y-10">
      <span
        class="pointer-events-none absolute left-8 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 md:block dark:bg-slate-800"
      ></span>

      <article
        v-for="company in workExperience"
        :key="company.company"
        class="relative rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-card transition-all md:pl-16 dark:border-slate-800/80 dark:bg-slate-900/70"
      >
        <span
          class="pointer-events-none absolute left-8 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-brand-500 shadow-[0_0_0_8px_rgba(14,165,233,0.2)] md:block dark:border-slate-900"
        ></span>

        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p
              class="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500"
            >
              Company
            </p>
            <h3 class="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              {{ company.company }}
            </h3>
          </div>
          <div class="text-sm text-slate-500 dark:text-slate-400">
            <p class="text-base font-semibold text-slate-800 dark:text-slate-100">
              {{ company.period }}
            </p>
            <p>
              {{ company.roles.length }}
              {{ company.roles.length === 1 ? 'role' : 'roles' }}
            </p>
          </div>
        </div>

        <div class="mt-6 grid gap-4">
          <div
            v-for="role in company.roles"
            :key="`${company.company}-${role.title}-${role.period ?? 'current'}`"
            class="rounded-2xl border border-slate-200/80 bg-white/80 p-5 shadow-sm transition hover:border-brand-200 hover:shadow-lg dark:border-slate-800/80 dark:bg-slate-900/60"
          >
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p
                  class="text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500"
                >
                  Role
                </p>
                <h4 class="text-xl font-semibold text-slate-900 dark:text-white">
                  {{ role.title }}
                </h4>
              </div>
              <span
                class="inline-flex items-center rounded-full border border-slate-200/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600 dark:border-slate-700 dark:text-slate-300"
              >
                {{ role.period || company.period }}
              </span>
            </div>

            <ul
              class="mt-4 space-y-3 text-base leading-relaxed text-slate-600 dark:text-slate-300"
            >
              <li
                v-for="item in role.contributions"
                :key="item"
                class="flex gap-3"
              >
                <span
                  class="mt-[0.35rem] h-2 w-2 flex-shrink-0 rounded-full bg-brand-400"
                ></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>

        <div
          v-if="company.techStack?.length"
          class="mt-6 border-t border-dashed border-slate-200 pt-4 dark:border-slate-800"
        >
          <span
            class="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500"
          >
            Stack
          </span>
          <div class="mt-3 flex flex-wrap gap-2">
            <span
              v-for="tech in company.techStack"
              :key="`${company.company}-${tech}`"
              class="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-200"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>
