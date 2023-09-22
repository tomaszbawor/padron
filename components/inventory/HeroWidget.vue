<script setup lang="ts">
import EquipmentSquare from '~/components/menu/EquipmentSquare.vue'
import { ItemType } from '~/engine/inventory/ItemType'
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <div class="grid grid-cols-3 grid-rows-4 gap-4">
      <div />
      <EquipmentSquare :type="ItemType.HELMET" />
      <div />
      <div />
      <EquipmentSquare :type="ItemType.ARMOR" />
      <EquipmentSquare :type="ItemType.GLOVES" />

      <EquipmentSquare :type="ItemType.WEAPON" />
      <EquipmentSquare :type="ItemType.BELT" />
      <EquipmentSquare :type="ItemType.SHIELD" />
      <div />
      <EquipmentSquare :type="ItemType.BOOTS" />
    </div>
    <div class="mt-4 grid grid-cols-2 gap-4">
      <EquipmentSquare :type="ItemType.RING" />
      <EquipmentSquare :type="ItemType.AMULET" />
    </div>
  </div>
</template>
