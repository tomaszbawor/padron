<script setup lang="ts">
defineEmits(['onClick'])
</script>

<template>
  <button
    type="button" class="mr-2 inline-flex items-center rounded-full bg-gray-500 p-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<style scoped>
</style>
