import { defineStore } from 'pinia'
import type { Action } from '~/engine/action/Action'

export type CurrentAction = Action & {
  finishTime: number // timestamp of finishing action
}

interface ActionsStore {
  currentAction: CurrentAction | null
  possibleActions: Array<Action>
}

export const useCurrentActionStore = defineStore('currentAction', {
  state: (): ActionsStore => {
    return {
      currentAction: null,
      possibleActions: [],
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
    enableAction() {
      // Enable action
    },
  },
  persist: {
    storage: persistedState.localStorage,
  },
})
