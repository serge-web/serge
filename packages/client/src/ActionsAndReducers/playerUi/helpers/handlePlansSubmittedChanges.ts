import { ForceData, MessageSubmitPlans } from '@serge/custom-types'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
export default (payload: MessageSubmitPlans, allForces: ForceData[]) => {
  const routes = payload.plannedRoutes

  routes.forEach(route => {
    const asset = findAsset(allForces, route.uniqid)
    // ok, now the route (just overwrite it!)
    // @ts-ignore
    if (asset !== undefined) asset.plannedTurns = route.plannedTurns
  })
  return allForces
}
