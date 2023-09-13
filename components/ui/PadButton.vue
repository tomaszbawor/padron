<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant: 'primary' | 'secondary'
  isCircle?: boolean
}>()

defineEmits(['onClick'])

const buttonClass = computed(() => {
  return props.variant === 'primary'
    ? 'bg-gray-400 rounded-full text-white px-4 py-2 rounded'
    : 'bg-gray-500 rounded-full text-white px-4 py-2 rounded'
})
</script>

<template>
  <button :class="buttonClass" @click="$emit('onClick')">
    <slot />
  </button>
</template>

<style scoped>
</style>
