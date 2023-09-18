import { defineStore } from 'pinia'

interface AvailableTabsState {
  tabs: Array<{
    label: string
    link: string
  }>
}

export const useAvailableTabs = defineStore('availableTabs', {
  state: (): AvailableTabsState => {
    return {
      tabs: [
        {
          label: 'Home',
          link: '/game',
        }, {
          label: 'Hero',
          link: '/game/hero',
        }, {
          label: 'Inventory',
          link: '/game/inventory',
        }, {
          label: 'Skills',
          link: '/game/skills',
        }, {
          label: 'City',
          link: '/game/city',
        }, {
          label: 'Quests',
          link: '/game/quests',
        },
      ],
    }
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
