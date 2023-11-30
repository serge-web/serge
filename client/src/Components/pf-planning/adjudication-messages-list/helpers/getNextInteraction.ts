import { ForceData, Asset, PerForcePlanningActivitySet, PlanningActivity } from 'src/custom-types'
import { findAsset } from 'src/Helpers'

/** the start and end time for a turn */
export type TurnTimes = {
  start: number
  end: number
}

export const istarSearchRate = (own: Array<{ asset: Asset['uniqid'], number: number, missileType?: string }>, forces: ForceData[], defaultRate: number): number => {
  if (own && own.length > 0) {
    interface AssetWithCount {
      asset: Asset
      count: number
      rate: number
    }
    const assetsWithCount = own.map((item): AssetWithCount => {
      const asset = findAsset(forces, item.asset)
      const attrs = asset.attributes
      const rate = (attrs && attrs.a_Search_Rate) ? attrs.a_Search_Rate as number : defaultRate
      return { asset: asset, count: item.number, rate: rate }
    })
    const searchRates = assetsWithCount.map((item): number => {
      const rate = (item.asset.attributes && item.asset.attributes.a_Search_Rate) ? item.asset.attributes.a_Search_Rate as number : defaultRate
      const assetRate = item.count > 0 ? item.count * rate : rate
      return assetRate
    })
    const res = searchRates.reduce((a: number, b: number) => a + b, 0)
    console.table(assetsWithCount.map((item) => {
      return {
        id: item.asset.uniqid,
        name: item.asset.name,
        count: item.count,
        rate: (item.asset.attributes && item.asset.attributes.a_Search_Rate) || 'Default:' + defaultRate
      }
    }))
    console.log('ISTAR Calculated search rate:' + res)
    return res
  }
  return defaultRate
}

export const findActivityFromCompositeString = (name: string, activities: PerForcePlanningActivitySet): PlanningActivity | undefined => {
  const separator = '-'
  const last = name.lastIndexOf(separator)
  const actName = name.slice(last + 1)
  const forceGroup = name.slice(0, last)
  const first = forceGroup.lastIndexOf(separator)
  const groupName = forceGroup.slice(first + 1)
  const forceName = forceGroup.slice(0, first)
  if (forceName !== activities.force) {
    console.warn('Warning: findActivitiy received activities for wrong force', forceName, activities.force)
  }
  const groupActivities = activities.groupedActivities.find((group) => group.category === groupName)
  if (groupActivities) {
    const activity = groupActivities.activities.find((act) => act.name === actName)
    if (activity) {
      return activity
    }
  }
  console.warn('Failed to find group activities for this activity:', name)
  console.warn('find act', name, last, actName, forceGroup, first, groupName, forceName, activities)
  return undefined
}

export const trimPeriod = (period: TurnTimes, turn: TurnTimes): TurnTimes => {
  return { start: Math.max(period.start, turn.start), end: Math.min(period.end, turn.end) }
}
