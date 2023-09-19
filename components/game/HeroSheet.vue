<script setup lang="ts">
import { useHeroStore } from '~/store/heroStore'
import type { Hero } from '~/engine/hero/Hero'
import experienceNeededForNextLevel from '~/engine/hero/expForNextLevel'
import ProgressBar from '~/components/ui/ProgressBar.vue'

const heroStore = useHeroStore()

const hero = computed(() => {
  return heroStore.hero as Hero
})

const expNeededForNextLevel = computed(() => {
  return experienceNeededForNextLevel(hero.value.level)
})
</script>

<template>
  <div v-if="heroStore.hero !== 'EMPTY'" class="w-full rounded-lg border border-gray-200 bg-white p-4 shadow dark:border-gray-700 dark:bg-gray-800 sm:p-8">
    <div class="mb-4 items-center justify-between">
      <h5 class="text-center text-xl font-bold leading-none text-gray-900 dark:text-white">
        {{ hero.name }}
      </h5>
      <p class="text-center text-xs">
        LVL: {{ hero.level }}
      </p>
    </div>
    <div class="flow-root">
      <p>Experience: {{ hero.experience }} / {{ expNeededForNextLevel }}</p>
      <div>
        <ProgressBar variant="GREEN" :value="hero.experience" :max="expNeededForNextLevel" />
      </div>

      <p>Health: {{ hero.health.current }} / {{ hero.health.max }} </p>
      <div>
        <ProgressBar variant="RED" :value="hero.health.current" :max="hero.health.max" />
      </div>
      <p>Mana: {{ hero.mana.current }} / {{ hero.mana.max }}</p>
      <div>
        <ProgressBar variant="BLUE" :value="hero.mana.current" :max="hero.mana.max" />
      </div>

      <div class="grid grid-cols-2 pt-4">
        <p>STR: {{ hero.stats.STRENGTH }}</p>
        <p>SPD: {{ hero.stats.SPEED }}</p>
        <p>INT: {{ hero.stats.DEFENCE }}</p>
        <p>MRES: {{ hero.stats.MAGIC_RESISTANCE }}</p>
      </div>
    </div>
  </div>
</template>
