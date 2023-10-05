import { defineStore } from 'pinia'
import type { Action } from '~/engine/action/Action'

export type CurrentAction = Action & {
  finishTime: number // timestamp of finishing action
}

interface CurrentActionStore {
  currentAction: CurrentAction | null
}

export const useCurrentActionStore = defineStore('currentAction', {
  state: (): CurrentActionStore => {
    return {
      currentAction: null,
    }
  },
  actions: {
    startAction(a: Action) {
      // add timestamp of finishing action to store and add to current action
    },
    cancelCurrentAction() {
      this.currentAction = null
    },
    finishAction() {
      // get the rewards and set action to null
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
