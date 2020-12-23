import { Asset, ForceData, MessageSubmitPlans, PlannedRoute } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

/** create a marker for the supplied set of details */
export default (payload: MessageSubmitPlans, allForces: ForceData[]) => {
  const route: PlannedRoute = payload.plannedRoutes

  const asset: Asset = findAsset(allForces, route.uniqid)
  asset.plannedTurns = route.plannedTurns
  return allForces
}
