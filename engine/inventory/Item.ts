import type { ItemType } from '~/engine/inventory/ItemType'
import type { BasicHeroStats } from '~/engine/hero/BasicHeroParameters'

export interface StatValue {
  stat: BasicHeroStats
  value: number
}

export interface Item {
  id: number
  name: string
  type: ItemType
  requirements: Array<StatValue>
  bonuses: Array<StatValue>

}
