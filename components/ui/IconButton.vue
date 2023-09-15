<script setup lang="ts">
defineEmits(['onClick'])
</script>

<template>
  <button
    type="button" class="text-white bg-gray-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-blue-800"
    @click="$emit('onClick')"
  >
    <slot />
  </button>
</template>

<style scoped>
</style>
