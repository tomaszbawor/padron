<script lang="ts" setup>
const props = defineProps<{
  link?: string
}>()

function click() {
  return navigateTo(props.link)
}
</script>

<template>
  <div class="text-center" @click="click">
    <button class="border-gray-600 w-2/3 font-headers text-lg bg-gray-400 hover:bg-gray-300 border-2 rounded-full my-4 shadow-gray-500 hover:text-gray-700 hover:shadow-gray-500 shadow-lg p-3">
      <slot />
    </button>
  </div>
</template>

<style scoped></style>
