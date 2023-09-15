<script lang="ts" setup>
import type { BasicStats } from '~/engine/hero/BasicStats'
import {
  BaseStatIncrementForSKillPoint,
  BasicStatsLabels, MinimumValueForStat,
  NewCharStarterPoints,
} from '~/engine/hero/BasicStats'
import Header from '~/components/typography/Header.vue'
import IconButton from '~/components/ui/IconButton.vue'
import { useHeroStore } from '~/store/heroStore'
import PadButton from '~/components/ui/PadButton.vue'

const heroStore = useHeroStore()

const pointsToRedistribute = ref(20)

const isConfirmEnabled = computed(() => {
  return pointsToRedistribute.value === 0
})

const currentPoints = ref({ ...NewCharStarterPoints })

function confirm() {
  heroStore.createPlayer(
    {

      name: 'Test',
      stats: currentPoints.value,

    },
  );
  (async () => {
    await navigateTo('/game')
  })()
}

function decreaseStat(stat: BasicStats) {
  if (currentPoints.value[stat] === MinimumValueForStat[stat])
    return

  const increment = BaseStatIncrementForSKillPoint[stat]
  currentPoints.value[stat] -= increment
  pointsToRedistribute.value++
}

function increaseStat(stat: BasicStats) {
  if (pointsToRedistribute.value <= 0)
    return
  const increment = BaseStatIncrementForSKillPoint[stat]

  currentPoints.value[stat] += increment
  pointsToRedistribute.value--
}

function resetStats() {
  currentPoints.value = { ...NewCharStarterPoints }
  pointsToRedistribute.value = 20
}
</script>

<template>
  <CardContainer>
    <div class="h-full w-full">
      <Header class="text-center">
        Create your character
      </Header>

      <div class="w-2/3 mt-4 bg-gray-900 p-4 mx-auto border-gray-600 border-2 rounded-xl">
        <div class="grid grid-cols-[1fr_2fr] gap-y-2">
          <template v-for="[stat, val] in Object.entries(currentPoints)" :key="stat">
            <div class="flex flex-row-reverse">
              <b class="my-auto pr-2">
                {{ BasicStatsLabels[stat as BasicStats] }}:
              </b>
            </div>
            <div class="w-32 grid grid-cols-3 v-auto-animate">
              <IconButton variant="primary" is-circle @on-click="increaseStat(stat as BasicStats)">
                <Icon name="material-symbols:add" />
              </IconButton>
              <p class="my-auto text-center text-xl font-bold">
                {{ val }}
              </p>
              <IconButton variant="primary" is-circle @on-click="decreaseStat(stat as BasicStats)">
                <Icon name="material-symbols:remove" />
              </IconButton>
            </div>
          </template>
        </div>
        <div />
        <p>Points left: {{ pointsToRedistribute }}</p>

        <div class="my-2">
          <PadButton classes="mr-2" variant="primary" @on-click="resetStats">
            Reset
          </PadButton>

          <PadButton variant="primary" :disabled="!isConfirmEnabled" @on-click="confirm">
            Confirm
          </PadButton>
        </div>
      </div>
    </div>
  </CardContainer>
</template>

<style scoped></style>
