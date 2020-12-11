import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
// @ts-ignore
export default (/* object */ payload, /* object */ allForces) => {
  const routes = payload.plannedRoutes
  // @ts-ignore
  routes.forEach(route => {
    const asset = findAsset(allForces, route.uniqid)

    // ok, now the route (just overwrite it!)
    // @ts-ignore
    asset.plannedTurns = route.plannedTurns
  })
  return allForces
}
