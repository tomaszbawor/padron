<script lang="ts" setup>
import { definePageMeta } from '#imports'

const layoutName = 'game'

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    <div class="grid grid-cols-2 p-5 ">
      <InventoryHeroWidget />
      <InventoryContentWidget />
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
