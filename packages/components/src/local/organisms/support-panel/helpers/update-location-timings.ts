import { Asset, ForceData, PlannedActivityGeometry } from '@serge/custom-types'
import { findAsset, updateGeometryTimings } from '@serge/helpers'
import { sum } from 'lodash'

export const updateLocationTimings = (planId: string, plans: PlannedActivityGeometry[],
  assets: Asset['uniqid'][], forces: ForceData[], startTime: string, endTime: string): PlannedActivityGeometry[] => {
  // sort out the assets
  const speeds: number[] = []
  assets.forEach((id: string) => {
    const asset = findAsset(forces, id)
    const attributes = asset.attributes
    if (attributes) {
      for (const [key, value] of Object.entries(attributes)) {
        if (key === 'a_Speed') {
          speeds.push(value as number)
        }
      }
    }
  })
  if (speeds.length > 0) {
    const total = sum(speeds)
    const mean = total / speeds.length
    // now update the items
    return updateGeometryTimings(plans, startTime, endTime, mean)
  } else {
    console.warn('unable to find assets with speed for plans', planId)
    return plans
  }
}
