import findAsset from '../../../Components/Mapping/helpers/findAsset'

/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const routes = payload.plannedRoutes
  routes.forEach(route => {
    // get the asset
    const asset = findAsset(allForces, route.uniqid)

    // ok, now the route (just overwrite it!)
    asset.plannedTurns = route.plannedTurns
  })
  return allForces
}
