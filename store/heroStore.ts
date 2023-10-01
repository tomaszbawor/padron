import { defineStore } from 'pinia'
import type { Hero } from '~/engine/hero/Hero'
import type { CreateHeroCommand } from '~/engine/hero/commands/createNewHero'
import { createNewHeroCommandHandler } from '~/engine/hero/commands/createNewHero'
import { gainExpCommandHandler } from '~/engine/hero/commands/gainExpCommand'

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
    createPlayer(command: CreateHeroCommand) {
      this.hero = createNewHeroCommandHandler(command)
      this.hasSavedHero = true
    },
    gainExp(exp: number) {
      this.hero = gainExpCommandHandler(this.hero as Hero, exp)
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
