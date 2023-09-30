export enum BasicResourcePools {
  HEALTH = 'HEALTH',
  MANA = 'MANA',
}

export enum BasicHeroStats {
  STRENGTH = 'STRENGTH',
  INTELLIGENCE = 'INTELLIGENCE',

  DEFENCE = 'DEFENCE',
  WILLPOWER = 'WILLPOWER',

  SPEED = 'SPEED',

}

export type BasicHeroParameters = BasicResourcePools | BasicHeroStats

export const BasicStatsLabels: Record<BasicHeroParameters, string> = {
  HEALTH: 'Health',
  MANA: 'Mana',
  STRENGTH: 'Strength',
  INTELLIGENCE: 'Intelligence',
  DEFENCE: 'Defence',
  WILLPOWER: 'Willpower',
  SPEED: 'Speed',
}

export const MinimumValueForStat: Record<BasicHeroStats, number> = {
  STRENGTH: 1,
  INTELLIGENCE: 1,
  DEFENCE: 1,
  WILLPOWER: 1,
  SPEED: 1,
}

export const MinimumValueForResourcePool: Record<BasicResourcePools, number> = {
  HEALTH: 10, MANA: 10,
}

export const BaseStatIncrementForSkillPoint: Record<BasicHeroParameters, number> = {
  HEALTH: 5,
  MANA: 5,
  STRENGTH: 1,
  INTELLIGENCE: 1,
  DEFENCE: 1,
  WILLPOWER: 1,
  SPEED: 1,
}

export const NewCharStarterPoints = MinimumValueForStat
