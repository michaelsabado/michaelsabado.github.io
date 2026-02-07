<script setup>
const cvPath = '/cv.pdf'
</script>

<template>
  <section
    id="download"
    class="px-4 py-10 text-center sm:px-6 md:px-8"
  >
    <p
      class="text-xs uppercase tracking-[0.3em] text-slate-500 sm:text-sm dark:text-slate-400"
    >
      Get a copy of my CV
    </p>
    <!-- <p class="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl dark:text-white">
      February 2026
    </p> -->
    <div class="mt-6 flex justify-center">
      <button
        type="button"
        class="btn-ghost w-full max-w-xs justify-center opacity-60"
        disabled
      >
        CV coming soon
      </button>
    </div>
    <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
      PDF unavailable at the moment
    </p>
  </section>
</template>
