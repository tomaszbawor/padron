<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
  classes?: string
  value?: string
  placeholder?: string
}>()

const emits = defineEmits(['update:modelValue'])
function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<template>
  <div>
    <input id="first_name" type="text" :value="props.value" :class="`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${classes}`" :placeholder="props.placeholder" :disabled="props.disabled" @input="handleInput">
  </div>
</template>

<style scoped>
</style>
