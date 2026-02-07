<script setup>
import { profile } from '../data/profile'
</script>

<template>
  <footer
    class="border-t border-slate-200/60 bg-white/70 py-8 text-sm text-slate-500 dark:border-slate-800/60 dark:bg-slate-950/60 dark:text-slate-400"
  >
    <div
      class="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-0"
    >
      <p>
        &copy; {{ new Date().getFullYear() }} {{ profile.name }}. All rights reserved.
      </p>
      <p class="text-xs uppercase tracking-[0.4em] text-slate-400 dark:text-slate-500">
        Code. Build. Deliver.
      </p>
    </div>
  </footer>
</template>
