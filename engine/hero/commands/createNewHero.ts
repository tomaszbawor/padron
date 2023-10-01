import type { BasicHeroStats } from '~/engine/hero/BasicHeroParameters'
import { MinimumValueForResourcePool } from '~/engine/hero/BasicHeroParameters'
import type { Hero } from '~/engine/hero/Hero'

export interface CreateHeroCommand {
  name: string
  stats: Record<BasicHeroStats, number>
}

export function createNewHeroCommandHandler(createHeroCommand: CreateHeroCommand): Hero {
  return {
    name: createHeroCommand.name,
    health: { current: MinimumValueForResourcePool.HEALTH, max: MinimumValueForResourcePool.HEALTH },
    mana: { current: MinimumValueForResourcePool.MANA, max: MinimumValueForResourcePool.MANA },
    stats: createHeroCommand.stats,
    experience: 0,
    level: 1,
    freeSkillPoints: 0,
  }
}
