import { Asset, ForceData, MessageSubmitPlans } from 'src/custom-types'
import { findAsset } from '@serge/helpers'

/** create a marker for the supplied set of details */
export default (payload: MessageSubmitPlans, allForces: ForceData[]) => {
  payload.plannedRoutes.forEach(route => {
    const asset: Asset = findAsset(allForces, route.uniqid)
    asset.plannedTurns = route.plannedTurns
  })
  return allForces
}
