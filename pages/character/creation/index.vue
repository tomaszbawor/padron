<script lang="ts" setup>
import type { BasicStats } from '~/engine/hero/BasicStats'
import {
  BaseStatIncrementForSkillPoint,
  BasicStatsLabels, MinimumValueForStat,
  NewCharStarterPoints,
} from '~/engine/hero/BasicStats'
import Header from '~/components/typography/Header.vue'
import IconButton from '~/components/ui/IconButton.vue'
import { useHeroStore } from '~/store/heroStore'
import PadButton from '~/components/ui/PadButton.vue'
import PadInput from '~/components/ui/PadInput.vue'

const heroStore = useHeroStore()

const pointsToRedistribute = ref(20)
const name = ref('HeroName')

function nameChangeHandler(str: string) {
  name.value = str
}

const isConfirmEnabled = computed(() => {
  return pointsToRedistribute.value === 0
})

const currentPoints = ref({ ...NewCharStarterPoints })

function confirm() {
  heroStore.createPlayer(
    {
      name: name.value,
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

  const increment = BaseStatIncrementForSkillPoint[stat]
  currentPoints.value[stat] -= increment
  pointsToRedistribute.value++
}

function increaseStat(stat: BasicStats) {
  if (pointsToRedistribute.value <= 0)
    return
  const increment = BaseStatIncrementForSkillPoint[stat]

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

      <div class="mx-auto mt-4 w-2/3 rounded-xl border-2 border-gray-600 bg-gray-900 p-4">
        <div class="grid grid-cols-[1fr_2fr] gap-y-2">
          <label class="my-auto text-right text-lg font-bold" for="hero-name">
            Name:
          </label>
          <PadInput
            classes="mx-2 text-center" :value="name" placeholder="Hero Name"
            @update:model-value="nameChangeHandler"
          />
          <template v-for="[stat, val] in Object.entries(currentPoints)" :key="stat">
            <div class="flex flex-row-reverse">
              <b class="my-auto pr-2">
                {{ BasicStatsLabels[stat as BasicStats] }}:
              </b>
            </div>
            <div class="grid w-32 grid-cols-3">
              <IconButton @on-click="increaseStat(stat as BasicStats)">
                <Icon name="material-symbols:add" />
              </IconButton>
              <p class="my-auto text-center text-xl font-bold">
                {{ val }}
              </p>
              <IconButton @on-click="decreaseStat(stat as BasicStats)">
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
