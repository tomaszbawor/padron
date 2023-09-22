import { defineStore } from 'pinia'
import type { InventoryItem } from '~/engine/inventory/InventoryItem'
import { INVENTORY_SIZE } from '~/engine/inventory/InventoryItem'
import type { Item } from '~/engine/inventory/Item'

interface InventoryState {
  inventory: Array<InventoryItem>
  equipment: any
}

export const useInventoryStore = defineStore('inventory', {
  state: (): InventoryState => {
    return {
      inventory: Array<InventoryItem>(INVENTORY_SIZE).fill('EMPTY'),
      equipment: {},
    }
  },
  actions: {
    putItem(item: Item) {
      // TODO: check if item can be put in inventory
      this.inventory.push(item)
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
