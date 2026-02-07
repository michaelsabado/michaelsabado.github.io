<script setup>
import ProjectCard from './ProjectCard.vue'
import { projects } from '../data/projects'
</script>

<template>
  <section
    id="projects"
    class="space-y-10"
  >
    <div class="flex flex-col gap-3">
      <p class="section-heading">Projects</p>
      <h2
        class="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white"
      >
        From idea to implementation.
      </h2>
      <p class="text-base text-slate-600 dark:text-slate-300">
        Selected case studies highlighting full-stack development, technical
        problem-solving, and production-ready solutions.
      </p>
    </div>

    <div class="space-y-8">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="project.title"
        :project="project"
        :index="index"
      />
    </div>
  </section>
</template>
