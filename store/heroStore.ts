import { defineStore } from 'pinia'
import type { Hero } from '~/engine/hero/Hero'
import type { BasicStats } from '~/engine/hero/BasicStats'

interface HeroStoreState {
  hero: Hero | 'EMPTY'
}

export const useHeroStore = defineStore('hero', {
  state: (): HeroStoreState => {
    return {
      hero: 'EMPTY',
    }
  },
  actions: {
    createPlayer(createHeroAction: CreateHeroAction) {
      this.hero = { name: createHeroAction.name, stats: createHeroAction.stats, experience: 0, level: 1 }
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

// commands
export interface CreateHeroAction {
  name: string
  stats: Record<BasicStats, number>
}
