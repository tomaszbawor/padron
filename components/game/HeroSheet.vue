<script setup lang="ts">
import { useHeroStore } from '~/store/heroStore'
import type { Hero } from '~/engine/hero/Hero'
import experienceNeededForNextLevel from '~/engine/hero/expForNextLevel'

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
    <div class="mb-4 flex items-center justify-between">
      <h5 class="text-center text-xl font-bold leading-none text-gray-900 dark:text-white">
        {{ hero.name }}
      </h5>
    </div>
    <div class="flow-root">
      <p>Level: {{ hero.level }}</p>
      <p>Experience: {{ hero.experience }} / {{ expNeededForNextLevel }}</p>
      <p>Health: {{ hero.health.current }} / {{ hero.health.max }} </p>
      <p>Mana: {{ hero.mana.current }} / {{ hero.mana.max }}</p>
      <p>Strength: {{ hero.stats.STRENGTH }}</p>
      <p>Speed: {{ hero.stats.SPEED }}</p>
      <p>Intelligence: {{ hero.stats.DEFENCE }}</p>
      <p>Magic Res: {{ hero.stats.MAGIC_RESISTANCE }}</p>
    </div>
  </div>
</template>
