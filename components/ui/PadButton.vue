<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant: 'primary' | 'secondary'
  disabled?: boolean
  classes?: string
}>()

defineEmits(['onClick'])

const buttonClass = computed(() => {
  const variantClass = props.variant === 'primary'
    ? 'bg-gray-400 rounded-full text-white px-4 py-2 rounded px-auto'
    : 'bg-gray-500 rounded-full text-white px-4 py-2 rounded'

  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''

  return `${variantClass} ${disabledClass} ${props.classes}`
})
</script>

<template>
  <button :class="buttonClass" @click="$emit('onClick')">
    <slot />
  </button>
</template>

<style scoped>
</style>
