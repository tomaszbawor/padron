<script lang="ts" setup>
import type { InventoryItem } from '~/engine/inventory/InventoryItem'

defineProps<{
  item: InventoryItem
}>()

const el = ref<HTMLElement | null>(null)
const isDragging = ref(false)

function handleDragStart(e: DragEvent) {
  e.dataTransfer?.setData('text/plain', 'EN')
}

function handleDragEnd() {
  isDragging.value = false
}
</script>

<template>
  <div ref="el" draggable="true" class="mx-auto h-16 w-16 rounded-xl border border-gray-600 bg-gray-500" @dragstart="handleDragStart" @dragend="handleDragEnd">
    IT
  </div>
</template>
