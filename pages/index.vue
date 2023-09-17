<script lang="ts" setup>
import type { Hero } from '../engine/hero/Hero'
import PadMenuButton from '~/components/menu/PadMenuButton.vue'
import PadMenu from '~/components/menu/PadMenu.vue'
import { useHeroStore } from '~/store/heroStore'

const heroStore = useHeroStore()

const canContinue = computed(() => {
  return heroStore.hero !== 'EMPTY'
})
</script>

<template>
  <header class="mt-10 text-center font-headers text-6xl">
    Padron
  </header>
  <p class="pt-1 text-center font-headers text-2xl">
    Browser Based RPG
  </p>

  <PadMenu>
    <PadMenuButton link="/character/creation">
      New Game
    </PadMenuButton>
    <PadMenuButton link="/game" :disabled="!canContinue">
      <p>Continue</p>
      <p v-if="!canContinue" class="text-xs">
        No saved game
      </p>
      <p v-else class="text-xs">
        {{ (heroStore.hero as Hero).name }} ({{ (heroStore.hero as Hero).level }} lvl)
      </p>
    </PadMenuButton>
    <PadMenuButton link="/options">
      Options
    </PadMenuButton>
    <PadMenuButton>About</PadMenuButton>
  </PadMenu>
</template>

<style scoped></style>
