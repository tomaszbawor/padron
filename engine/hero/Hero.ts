import type { BasicStats } from '~/engine/hero/BasicStats'

export interface Hero {
  name: string
  stats: Record<BasicStats, number>
  experience: number
  level: number
}
