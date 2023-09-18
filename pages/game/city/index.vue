<script lang="ts" setup>
import { definePageMeta } from '#imports'
import { useResourcesStore } from '~/store/resourcesStore'

const layoutName = 'game'

const resources = useResourcesStore()

function incGold() {
  resources.increaseGold(1)
}

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    City View

    <button @click="incGold">
      Increment Gold
    </button>
  </NuxtLayout>
</template>

<style scoped></style>
