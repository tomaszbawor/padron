<script lang="ts" setup>
const props = defineProps<{
  link?: string
  disabled?: boolean
}>()

function click() {
  return navigateTo(props.link)
}

const disabled = computed(() => {
  return props.disabled ?? false
})

const disabledClass = computed(() => {
  return disabled.value ? 'opacity-50 cursor-not-allowed' : ''
})
</script>

<template>
  <div class="text-center" @click="click">
    <button :disabled="disabled" class="my-4 w-2/3 rounded-full border-2 border-gray-600 bg-gray-400 p-3 font-headers text-lg shadow-lg shadow-gray-500 hover:enabled:bg-gray-300 hover:enabled:text-gray-700 hover:enabled:shadow-gray-500 disabled:opacity-50">
      <slot />
    </button>
  </div>
</template>

<style scoped></style>
