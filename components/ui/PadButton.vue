<script setup lang="ts">
import { computed } from 'vue'

const { variant, onClick } = withDefaults(
  defineProps<{
    variant: 'primary' | 'secondary'
    onClick: () => void
    isCircle?: boolean
  }>(),
  {
    variant: 'primary',
  },

)

const buttonClass = computed(() => {
  return variant === 'primary'
    ? 'bg-blue-500 text-white px-4 py-2 rounded'
    : 'bg-gray-500 text-white px-4 py-2 rounded'
})
</script>

<template>
  <button :class="buttonClass" @click="onClick">
    <slot name="icon" />
    <slot />
  </button>
</template>

<style scoped>
</style>
