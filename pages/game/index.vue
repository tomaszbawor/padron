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
    <nav class="bg-red-800 ">
      <ul>
        <li>Statistic</li>
        <li>Inventory</li>
        <li>Actions</li>
      </ul>
    </nav>

    <pre>
    {{ heroStore.hero }}
  </pre>
  </NuxtLayout>
</template>

<style scoped></style>
