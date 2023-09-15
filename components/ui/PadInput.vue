<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  disabled?: boolean
  classes?: string
  value?: string
}>()

const emits = defineEmits(['update:modelValue'])
const inputClass = computed(() => {
  const baseClasses = 'bg-gray-500 rounded-2xl text-white px-4 py-2'
  const disabledClass = props.disabled ? 'opacity-50 cursor-not-allowed' : ''
  return `${baseClasses} ${disabledClass} ${props.classes}`
})
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<template>
  <input
    :class="inputClass"
    :disabled="props.disabled"
    :value="props.value"
    @input="handleInput"
  >
</template>

<style scoped>
</style>
