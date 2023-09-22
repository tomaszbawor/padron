<script lang="ts" setup>
import type { InventoryItem } from '~/engine/inventory/InventoryItem'

defineProps<{
  item: InventoryItem
}>()
</script>

<template>
  <div class="mx-auto h-16 w-16 border border-gray-600 bg-gray-500">
    IT
  </div>
</template>
