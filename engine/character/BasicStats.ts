export enum BasicStats {
  STRENGTH = 'STRENGTH',
  AGILITY = 'AGILITY',
  DEFENCE = 'DEFENCE',
  MAGIC_RESISTANCE = 'MAGIC_RESISTANCE',
  HEALTH = 'HEALTH',
  MANA = 'MANA',
}

export const BasicStatsLabels: Record<BasicStats, string> = {
  AGILITY: 'Agitity', DEFENCE: 'Defence', HEALTH: 'Health', MAGIC_RESISTANCE: 'Magic Resistance', MANA: 'Mana', STRENGTH: 'Strength',
}

export const MinimumValueForStat: Record<BasicStats, number> = {
  AGILITY: 1, DEFENCE: 1, HEALTH: 10, MAGIC_RESISTANCE: 1, MANA: 10, STRENGTH: 1,
}

export const BaseStatIncrementForSKillPoint: Record<BasicStats, number> = {
  AGILITY: 1, DEFENCE: 1, HEALTH: 5, MAGIC_RESISTANCE: 1, MANA: 5, STRENGTH: 1,
}

export const NewCharStarterPoints = MinimumValueForStat
