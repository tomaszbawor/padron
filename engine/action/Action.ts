export enum ActionType {
  TRAINING = 'TRAINING',
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
