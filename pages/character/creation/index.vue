<script lang="ts" setup>
import type { BasicStats } from '~/engine/character/BasicStats'
import {
  BaseStatIncrementForSKillPoint,
  BasicStatsLabels, MinimumValueForStat,
  NewCharStarterPoints,
} from '~/engine/character/BasicStats'
import Header from '~/components/typography/Header.vue'
import PadButton from '~/components/ui/PadButton.vue'

const pointsToRedistribute = ref(20)

function confirm() {
}

const currentPoints = ref({ ...NewCharStarterPoints })

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
              <PadButton variant="primary" is-circle @on-click="increaseStat(stat as BasicStats)">
                <Icon name="material-symbols:add" />
              </PadButton>
              <p class="my-auto text-center text-xl font-bold">
                {{ val }}
              </p>

              <PadButton variant="primary" is-circle @on-click="decreaseStat(stat as BasicStats)">
                <Icon name="material-symbols:remove" />
              </PadButton>
            </div>
          </template>
        </div>
        <div />
        <p>Points left: {{ pointsToRedistribute }}</p>

        <button @click="resetStats">
          Reset
        </button>
        <button @click="confirm">
          Confirm
        </button>
      </div>
    </div>
  </CardContainer>
</template>

<style scoped></style>
