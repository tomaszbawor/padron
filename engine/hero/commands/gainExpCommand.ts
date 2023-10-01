import type { Hero } from '~/engine/hero/Hero'
import experienceNeededForNextLevel from '~/engine/hero/expForNextLevel'
import { RESOURCES_POINTS_ON_LEVEL_UP, SKILL_POINTS_ON_LEVEL_UP } from '~/engine/hero/consts'

export function gainExpCommandHandler(hero: Hero, exp: number) {
  if (hero.experience + exp < experienceNeededForNextLevel(hero.level)) {
    hero.experience += exp
    return hero
  }

  const expCap = experienceNeededForNextLevel(hero.level)
  hero.level += 1
  hero.experience = (hero.experience + exp) - expCap
  hero.freeSkillPoints += SKILL_POINTS_ON_LEVEL_UP
  hero.mana.max += RESOURCES_POINTS_ON_LEVEL_UP
  hero.health.max += RESOURCES_POINTS_ON_LEVEL_UP

  return hero
}
