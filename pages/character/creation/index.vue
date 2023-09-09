<script lang="ts" setup>
import type { BasicStats } from '~/engine/character/BasicStats'
import {
  BaseStatIncrementForSKillPoint,
  BasicStatsLabels, MinimumValueForStat,
  NewCharStarterPoints,
} from '~/engine/character/BasicStats'

const pointsToRedistribute = ref(20)

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
  <div class="h-full w-full">
    <h1>Create your character </h1>
    <div>
      <div class="w-1/2">
        <h1>Pick your Stats:</h1>
        <div class="grid grid-cols-[1fr_2fr] gap-y-2">
          <template v-for="[stat, val] in Object.entries(currentPoints)" :key="stat">
            <div class="flex flex-row-reverse">
              <b class="my-auto pr-2">
                {{ BasicStatsLabels[stat as BasicStats] }}:
              </b>
            </div>
            <div class="w-32 grid grid-cols-3 ">
              <button class="" @click="increaseStat(stat as BasicStats)">
                <Icon name="material-symbols:add" />
              </button>
              <p class="my-auto text-center text-xl font-bold">
                {{ val }}
              </p>
              <button @click="decreaseStat(stat as BasicStats)">
                <Icon name="material-symbols:remove" />
              </button>
            </div>
          </template>
        </div>
        <div />
        <p>Points left: {{ pointsToRedistribute }}</p>

        <button @click="resetStats">
          Reset
        </button>
        <button>Confirm</button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
