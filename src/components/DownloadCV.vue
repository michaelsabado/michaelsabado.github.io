<script setup>
import { ref, onMounted } from 'vue'

const cvPath = '/docs/MICHAEL-SABADO_CV.pdf'
const fileName = 'MICHAEL-SABADO_CV.pdf'

const fileSize = ref(null)
const lastModified = ref(null)

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

function formatDate(dateStr) {
  if (!dateStr) return null
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

onMounted(async () => {
  try {
    const res = await fetch(cvPath, { method: 'HEAD' })
    const len = res.headers.get('Content-Length')
    if (len) fileSize.value = formatBytes(Number(len))
    const mod = res.headers.get('Last-Modified')
    if (mod) lastModified.value = formatDate(mod)
  } catch {
    // ignore; meta stays hidden
  }
})
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
    <div class="mt-6 flex justify-center">
      <a
        :href="cvPath"
        :download="fileName"
        class="btn-ghost w-full max-w-xs justify-center"
        role="button"
      >
        Download CV
      </a>
    </div>
    <p
      v-if="fileSize || lastModified"
      class="mt-3 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-slate-500 dark:text-slate-400"
    >
      <span>PDF</span>
      <span v-if="fileSize">· {{ fileSize }}</span>
      <span v-if="lastModified">· {{ lastModified }}</span>
    </p>
  </section>
</template>
