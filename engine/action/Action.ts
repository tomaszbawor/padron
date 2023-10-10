export enum ActionType {
  TRAINING = 'TRAINING',
  HEAL = 'HEAL',
}

export enum ActionGroup {
  BASIC,
  TRAINING,
  FORAGING,
}

export interface ActionGain {
}

export interface Action {
  type: ActionType
  gain: ActionGain
  /**
   * The length of the action in seconds.
   */
  length: number
}

interface GameAction {
  action: Action
  enabled: boolean
}
