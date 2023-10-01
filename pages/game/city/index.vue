<script lang="ts" setup>
import { definePageMeta } from '#imports'
import { useResourcesStore } from '~/store/resourcesStore'
import { useHeroStore } from '~/store/heroStore'

const layoutName = 'game'

const resources = useResourcesStore()
const heroStore = useHeroStore()

function incGold() {
  resources.increaseGold(1)
}

function incExp() {
  heroStore.gainExp(100)
}

definePageMeta({
  layout: false,
})
</script>

<template>
  <NuxtLayout :name="layoutName">
    <MenuPadMenuButton @click="incGold">
      Increment Gold
    </MenuPadMenuButton>
    <MenuPadMenuButton @click="incExp">
      Increment Exp
    </MenuPadMenuButton>
  </NuxtLayout>
</template>

<style scoped></style>
