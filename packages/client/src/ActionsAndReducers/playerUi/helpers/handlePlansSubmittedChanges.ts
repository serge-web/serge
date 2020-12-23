import { Asset, ForceData, MessageSubmitPlans, PlannedRoute } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

/** create a marker for the supplied set of details */
export default (payload: MessageSubmitPlans, allForces: ForceData[]) => {
  const routes: PlannedRoute[] = payload.plannedRoutes

  routes.forEach(route => {
    const asset: Asset = findAsset(allForces, route.uniqid)
    asset.plannedTurns = route.plannedTurns
  })
  return allForces
}
