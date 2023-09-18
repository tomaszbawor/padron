<script lang="ts" setup>
import { definePageMeta } from '#imports'

const layoutName = 'game'

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    Hero View
  </NuxtLayout>
</template>

<style scoped></style>
