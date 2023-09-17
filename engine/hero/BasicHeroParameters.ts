export enum BasicResourcePools {
  HEALTH = 'HEALTH',
  MANA = 'MANA',
}

export enum BasicHeroStats {
  STRENGTH = 'STRENGTH',
  SPEED = 'SPEED',
  DEFENCE = 'DEFENCE',
  MAGIC_RESISTANCE = 'MAGIC_RESISTANCE',
}

export type BasicHeroParameters = BasicResourcePools | BasicHeroStats

export const BasicStatsLabels: Record<BasicHeroParameters, string> = {
  SPEED: 'Speed',
  DEFENCE: 'Defence',
  HEALTH: 'Health',
  MAGIC_RESISTANCE: 'Magic Resistance',
  MANA: 'Mana',
  STRENGTH: 'Strength',
}

export const MinimumValueForStat: Record<BasicHeroStats, number> = {
  SPEED: 1, DEFENCE: 1, MAGIC_RESISTANCE: 1, STRENGTH: 1,
}

export const MinimumValueForResourcePool: Record<BasicResourcePools, number> = {
  HEALTH: 10, MANA: 10,
}

export const BaseStatIncrementForSkillPoint: Record<BasicHeroParameters, number> = {
  SPEED: 1, DEFENCE: 1, HEALTH: 5, MAGIC_RESISTANCE: 1, MANA: 5, STRENGTH: 1,
}

export const NewCharStarterPoints = MinimumValueForStat
