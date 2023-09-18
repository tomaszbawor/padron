<script lang="ts" setup>
import { useResourcesStore } from '~/store/resourcesStore'

const resourcesState = useResourcesStore()
</script>

<template>
  <div class="py-2">
    GOLD:  {{ resourcesState.gold }}
  </div>
</template>
