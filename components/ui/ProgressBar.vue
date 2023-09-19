<script lang="ts" setup>
const props = defineProps<{
  variant: 'RED' | 'BLUE' | 'GREEN'
  value: number
  max: number
}>()

const percentage = computed(() => {
  return Math.round((props.value / props.max) * 100)
})

const widthStyle = computed(() => {
  return `width: ${percentage.value}%`
})

const variantColor = computed(() => {
  switch (props.variant) {
    case 'RED':
      return 'bg-red-600'
    case 'BLUE':
      return 'bg-blue-600'
    case 'GREEN':
      return 'bg-green-600'
  }
})

const computedClass = computed(() => {
  return `h-2.5 rounded-full ${variantColor.value}`
})
</script>

<template>
  <div class="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
    <div :class="computedClass" :style="widthStyle" />
  </div>
</template>
