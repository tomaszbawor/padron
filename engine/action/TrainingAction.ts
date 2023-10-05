import type { Action, ActionGain } from '~/engine/action/Action'
import { ActionType } from '~/engine/action/Action'

export interface TrainingActionGain extends ActionGain {
  /**
   * The amount of experience gained.
   */
  experience: number
}
export interface TrainingAction extends Action {
  label: string
  type: ActionType.TRAINING
  gain: TrainingActionGain
  length: number
}

export const trainingAction: TrainingAction = {
  label: 'Fake Training',
  type: ActionType.TRAINING,
  gain: {
    experience: 1000,
  },
  length: 100,
}
