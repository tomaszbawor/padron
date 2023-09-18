<script lang="ts" setup>
import { definePageMeta } from '#imports'

const layoutName = 'game'

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    Inventory
  </NuxtLayout>
</template>

<style scoped></style>
