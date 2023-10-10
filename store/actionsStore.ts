import { defineStore } from 'pinia'
import type { Action } from '~/engine/action/Action'
import { getFutureTimestamp } from '~/engine/utils/time'

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
    startAction(action: Action) {
      const timestamp = getFutureTimestamp(action.length)
      this.currentAction = {
        ...action,
        finishTime: timestamp,
      }
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