<script lang="ts" setup>
const elements = 40
const twoDArray: Array<Array<string>> = Array(elements).fill('B')
</script>

<template>
  <div class="rounded-xl bg-gray-700 shadow-md shadow-gray-400">
    <div class="w-[calc(5*theme('spacing.16')+4*theme('spacing.1')+2*theme('spacing.2))] m-2 grid grid-cols-5 gap-1">
      <div v-for="(i, index) in twoDArray" :key="index" class="mx-auto h-16 w-16 border border-gray-600 bg-gray-500">
        {{ i }}
      </div>
    </div>
  </div>
</template>

calc(5 * theme('spacing.16') + 6 * theme('spacing.2'))
