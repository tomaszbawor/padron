import { defineStore } from 'pinia'
import type { Hero } from '~/engine/hero/Hero'
import type { BasicHeroStats } from '~/engine/hero/BasicHeroParameters'
import { MinimumValueForResourcePool } from '~/engine/hero/BasicHeroParameters'

interface HeroStoreState {
  hero: Hero | 'EMPTY'
  hasSavedHero: boolean
}

export const useHeroStore = defineStore('hero', {
  state: (): HeroStoreState => {
    return {
      hero: 'EMPTY',
      hasSavedHero: false,
    }
  },
  actions: {
    createPlayer(createHeroAction: CreateHeroAction) {
      this.hero = {
        name: createHeroAction.name,
        health: { current: MinimumValueForResourcePool.HEALTH, max: MinimumValueForResourcePool.HEALTH },
        mana: { current: MinimumValueForResourcePool.MANA, max: MinimumValueForResourcePool.MANA },
        stats: createHeroAction.stats,
        experience: 0,
        level: 1,
      }
      this.hasSavedHero = true
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})

// commands
export interface CreateHeroAction {
  name: string
  stats: Record<BasicHeroStats, number>
}
