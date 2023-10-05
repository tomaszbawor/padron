<script lang="ts" setup>
import { useHeroStore } from '~/store/heroStore'
import { definePageMeta } from '#imports'
import PadButton from '~/components/ui/PadButton.vue'
import { useResourcesStore } from '~/store/resourcesStore'

const layoutName = 'game'

definePageMeta({
  layout: false,
})

const heroStore = useHeroStore()
const resources = useResourcesStore()

function incGold() {
  resources.increaseGold(1)
}

function incExp() {
  heroStore.gainExp(100)
}
</script>

<template>
  <NuxtLayout :name="layoutName">
    <div class="m-4 grid grid-cols-1 gap-4">
      <PadButton variant="primary" @click="incGold">
        Increment Gold
      </PadButton>
      <PadButton variant="primary" @click="incExp">
        Increment Exp
      </PadButton>
    </div>
    <pre>{{ JSON.stringify(heroStore.hero, null, 2) }}</pre>
  </NuxtLayout>
</template>

<style scoped></style>
