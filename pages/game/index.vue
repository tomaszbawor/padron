<script lang="ts" setup>
import { useHeroStore } from '~/stores/heroStore'

const heroStore = useHeroStore()
</script>

<template>
  <header class="text-6xl text-center mt-10 font-headers">
    Padron
  </header>

  <pre>
    {{ heroStore.hero }}
  </pre>
</template>

<style scoped></style>
