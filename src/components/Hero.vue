<script setup>
import { computed } from 'vue'
import { profile } from '../data/profile'

const heroImageSrc = computed(() => profile.heroImage?.src ?? '')
const heroImageAlt = computed(
  () => profile.heroImage?.alt ?? `${profile.name} workspace placeholder`
)
const hasHeroImage = computed(() => Boolean(heroImageSrc.value))
</script>

<template>
  <section id="hero">
    <div class="grid gap-10 sm:gap-12 lg:grid-cols-[1.2fr,0.8fr]">
      <div class="order-2 space-y-8 text-pretty lg:order-1">
        <p
          v-if="profile.availabilityTag"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:border-slate-800 dark:text-slate-400"
        >
          {{ profile.availabilityTag }}
        </p>
        <div class="space-y-4">
          <h1
            class="text-5xl font-semibold tracking-tight text-slate-900 text-balance lg:text-5xl xl:text-6xl dark:text-white"
          >
            Hi, it's {{ profile.nickname }}.
          </h1>
          <p
            class="text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300"
          >
            {{ profile.intro }}
          </p>
        </div>
        <div class="flex flex-wrap gap-4">
          <a
            href="#projects"
            class="btn-primary"
            >View projects</a
          >
          <a
            href="#contact"
            class="btn-ghost"
            >Let’s collaborate</a
          >
        </div>
        <dl class="grid gap-6 grid-cols-2 sm:grid-cols-3">
          <div
            v-for="metric in profile.metrics"
            :key="metric.label"
            class="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-5 text-center shadow-sm dark:border-slate-800/80 dark:bg-slate-900/60"
          >
            <dt
              class="text-[0.6rem] uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400"
            >
              {{ metric.label }}
            </dt>
            <dd class="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">
              {{ metric.value }}
            </dd>
          </div>
        </dl>
      </div>

      <div
        class="order-1 relative mx-auto aspect-square w-full max-w-[200px] overflow-hidden rounded-full text-white shadow-card sm:max-w-[250px] lg:order-2 lg:max-w-[350px]"
      >
        <div class="absolute inset-0">
          <img
            v-if="hasHeroImage"
            :src="heroImageSrc"
            :alt="heroImageAlt"
            class="h-full w-full object-cover"
            loading="lazy"
          />
          <div
            v-else
            class="h-full w-full bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950"
          ></div>
        </div>
        <!-- <div
          class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/25 to-transparent"
        ></div>
        <div
          class="absolute -right-16 top-6 hidden h-32 w-32 rounded-full border border-white/30 blur-3xl sm:block"
        ></div>
        <div
          class="absolute -left-10 bottom-10 hidden h-24 w-24 rounded-full border border-brand-400/40 blur-3xl sm:block"
        ></div> -->
        <div
          class="relative flex h-full flex-col items-center justify-end gap-3 p-6 text-center sm:p-8"
        >
          <!-- <p class="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
            Focus
          </p>
          <p class="text-lg font-semibold text-white sm:text-2xl">
            Calm interfaces for complex products
          </p> -->
          <!-- <p class="text-sm text-white/80">
            {{ profile.location }}
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>
