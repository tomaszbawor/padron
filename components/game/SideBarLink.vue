<script lang="ts" setup>
defineProps<{
  label: string
  badge?: string
}>()
</script>

<template>
  <button class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
    <slot name="icon" />
    <span class="ml-3 ">
      {{ label }}
    </span>
    <span class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">{{ badge }}</span>
  </button>
</template>
