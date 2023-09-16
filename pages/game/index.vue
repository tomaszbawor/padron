<script lang="ts" setup>
import { useHeroStore } from '~/store/heroStore'
import { definePageMeta } from '#imports'

definePageMeta({
  layout: false,
})

const heroStore = useHeroStore()
</script>

<template>
  <NuxtLayout name="game">
    <pre>{{ JSON.stringify(heroStore.hero, null, 2) }}</pre>
  </NuxtLayout>
</template>

<style scoped></style>
