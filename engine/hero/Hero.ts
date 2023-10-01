import type { BasicHeroStats } from '~/engine/hero/BasicHeroParameters'

export interface Hero {
  name: string
  health: PoolResource
  mana: PoolResource
  stats: Record<BasicHeroStats, number>
  experience: number
  level: number
  freeSkillPoints: number
}

export interface PoolResource {
  current: number
  max: number
}
