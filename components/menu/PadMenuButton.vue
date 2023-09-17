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
    <button class="my-4 w-2/3 rounded-full border-2 border-gray-600 bg-gray-400 p-3 font-headers text-lg shadow-lg shadow-gray-500 hover:bg-gray-300 hover:text-gray-700 hover:shadow-gray-500">
      <slot />
    </button>
  </div>
</template>

<style scoped></style>
