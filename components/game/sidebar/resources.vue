<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useResourcesStore } from '~/store/resourcesStore'

const { gold } = storeToRefs(useResourcesStore())
</script>

<template>
  <div class="py-2">
    GOLD: {{ gold }}
  </div>
</template>
