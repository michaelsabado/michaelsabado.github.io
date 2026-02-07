<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import WorkExperience from './components/WorkExperience.vue'
import DownloadCV from './components/DownloadCV.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen text-slate-900 dark:text-slate-100">
    <Navbar />
    <main
      class="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-28 sm:gap-12 sm:px-6 lg:gap-16 lg:px-0 lg:pt-32"
    >
      <Hero class="mb-20" />
      <About class="mb-20" />
      <Skills class="mb-20" />
      <Projects class="mb-20" />
      <WorkExperience class="mb-20" />
      <Contact />
      <DownloadCV />
    </main>
    <Footer />
  </div>
</template>
