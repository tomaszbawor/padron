<script setup lang="ts">
import EquipmentSquare from '~/components/menu/EquipmentSquare.vue'
import { ItemType } from '~/engine/inventory/ItemType'
</script>

<template>
  <div class="flex flex-col items-center p-4">
    <div class="grid grid-cols-3 grid-rows-5 gap-4">
      <!-- TODO: REWRITE IT -->
      <EquipmentSquare :type="ItemType.HELMET" required />
      <EquipmentSquare :type="ItemType.AMULET" />
      <EquipmentSquare :type="ItemType.WEAPON" />

      <EquipmentSquare :type="ItemType.GLOVES" />
      <!-- Middle Empty Space -->
      <EquipmentSquare :type="ItemType.ARMOR" />
      <EquipmentSquare :type="ItemType.SHIELD" />

      <EquipmentSquare :type="ItemType.BOOTS" />
      <EquipmentSquare :type="ItemType.RING" />
      <!-- Another Empty Space -->
    </div>
  </div>
</template>
