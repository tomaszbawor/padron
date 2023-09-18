<script lang="ts" setup>
defineProps<{
  label: string
  badge?: string
}>()

defineSlots<{
  icon: void
}>()
</script>

<template>
  <button class="group flex items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
    <slot name="icon" />
    <span class="ml-3 ">
      {{ label }}
    </span>
    <span class="ml-3 inline-flex items-center justify-center rounded-full bg-gray-100 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">{{ badge }}</span>
  </button>
</template>
