<script lang="ts" setup>
import { definePageMeta } from '#imports'

const layoutName = 'game'

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    <ul>
      <li>Training Grounds</li>
      <li>Market</li>
      <li>Mages Guild</li>
    </ul>
  </NuxtLayout>
</template>

<style scoped></style>
