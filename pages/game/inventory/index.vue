<script lang="ts" setup>
import { definePageMeta } from '#imports'
import HeroWidget from '~/components/menu/HeroWidget.vue'

const layoutName = 'game'

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    <div class="grid p-5 ">
      <HeroWidget />
      <div>Inventory</div>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
