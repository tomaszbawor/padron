<!-- EquipmentSquare.vue -->
<script  lang="ts" setup>
import type { ItemType } from '~/engine/inventory/ItemType'

const props = defineProps<{
  type: ItemType
}>()
</script>

<template>
  <div class="rounded-md border p-2">
    <div class="flex h-16 w-16 items-center justify-center">
      <span class="text-sm">{{ props.type }}</span>
    </div>
  </div>
</template>

<style scoped>
/* Add any custom styles specific to this component if needed */
</style>
