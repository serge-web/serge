import { Asset, ForceData, PlannedActivityGeometry } from 'src/custom-types'
import { findAsset, updateGeometryTimings } from 'src/Helpers'
import { sum } from 'lodash'

export const updateLocationTimings = (planId: string, plans: PlannedActivityGeometry[],
  assets: Asset['uniqid'][], forces: ForceData[], startTime: string, endTime: string): PlannedActivityGeometry[] => {
  // sort out the assets
  const speeds: number[] = []
  assets.forEach((id: string) => {
    const asset = findAsset(forces, id)
    const attributes = asset.attributes
    if (attributes) {
      const spdVal = attributes.a_Speed
      if (spdVal) {
        speeds.push(spdVal as number)
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
