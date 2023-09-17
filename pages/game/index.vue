<script lang="ts" setup>
import { useHeroStore } from '~/store/heroStore'
import { definePageMeta } from '#imports'

const layoutName = 'game'

definePageMeta({
  layout: false,
})

const heroStore = useHeroStore()
</script>

<template>
  <NuxtLayout :name="layoutName">
    <pre>{{ JSON.stringify(heroStore.hero, null, 2) }}</pre>
  </NuxtLayout>
</template>

<style scoped></style>
