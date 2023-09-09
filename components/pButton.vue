<script lang="ts" setup>
export interface ButtonProps {
  label: string
  onClick: () => void
}

defineProps<ButtonProps>()
</script>

<template>
  <button>
    Component: pButton
  </button>
</template>

<style scoped></style>
