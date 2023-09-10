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
    <button class="border-void-300 w-2/3  bg-void-700 hover:bg-void-400 border-2 rounded-full my-4 shadow-void-500 hover:shadow-void-600 shadow-lg p-3">
      <slot />
    </button>
  </div>
</template>

<style scoped></style>
