import { defineStore } from 'pinia'

export interface ResourcesState {
  gold: number
}

export const useResourcesStore = defineStore('resources', {
  state: (): ResourcesState => {
    return {
      gold: 0,
    }
  },
  actions: {
    increaseGold(val: number) {
      this.gold += val
    },
    canAffordWithGold(val: number) {
      return this.gold >= val
    },
    decreaseGold(val: number) {
      if (this.canAffordWithGold(val)) {
        this.gold -= val
        return true
      }
      return false
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
