import { defineStore } from 'pinia'
import type { Hero } from '~/engine/hero/Hero'

interface HeroStoreState {
  hero: Hero | 'EMPTY'
}

export const useHeroStore = defineStore('user', {
  state: (): HeroStoreState => {
    return {
      hero: 'EMPTY',
    }
  },
  actions: {
    createPlayer(createPlayerAction: CreatePlayerAction) {
      this.hero = createPlayerAction.hero
    },
  },
  persist: true,
})

// commands
export interface CreatePlayerAction {
  hero: Hero
}
