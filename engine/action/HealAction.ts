import type { Action, ActionGain } from '~/engine/action/Action'
import { ActionType } from '~/engine/action/Action'

export interface HealActionGain extends ActionGain {
  health: number
}

export interface HealingAction extends Action {
  label: string
  type: ActionType.HEAL
  gain: HealActionGain
  length: number
}

function healingActionFactory(label: string, length: number, healthGain: number): HealingAction {
  return {
    type: ActionType.HEAL,
    label,
    gain: {
      health: healthGain,
    },
    length,
  }
}

export const availableHealingActions: Array<HealingAction> = [
  healingActionFactory('Basic', 10, 10),
  healingActionFactory('Advanced', 20, 25),
  healingActionFactory('Master', 50, 200),
]
