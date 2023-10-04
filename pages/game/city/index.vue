<script lang="ts" setup>
import { definePageMeta } from '#imports'
import { useResourcesStore } from '~/store/resourcesStore'
import { useHeroStore } from '~/store/heroStore'
import PadButton from '~/components/ui/PadButton.vue'

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
    <div class="m-4 grid grid-cols-1 gap-4">
      <PadButton variant="primary" @click="incGold">
        Increment Gold
      </PadButton>
      <PadButton variant="primary" @click="incExp">
        Increment Exp
      </PadButton>
    </div>
  </NuxtLayout>
</template>

<style scoped></style>
