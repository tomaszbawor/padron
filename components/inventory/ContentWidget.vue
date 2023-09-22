<script lang="ts" setup>
import { useInventoryStore } from '~/store/inventoryStore'
import ItemCard from '~/components/inventory/ItemCard.vue'

const store = useInventoryStore()
</script>

<template>
  <div class="rounded-xl bg-gray-700 shadow-md shadow-gray-400">
    <div class="w-[calc(5*theme('spacing.16')+4*theme('spacing.1')+2*theme('spacing.2))] m-2 grid grid-cols-5 gap-1">
      <ItemCard v-for="(i, index) in store.inventory" :key="index" :item="i" />
    </div>
  </div>
</template>
