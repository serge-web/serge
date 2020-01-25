import findAsset from '../../../Components/Mapping/helpers/findAsset'
/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const detail = payload.detail
  detail.data.forEach(force => {
    force.assets.forEach(entry => {
      // ok, get the asset
      const asset = findAsset(allForces, entry.uniqid)
      asset.history = entry.history
      asset.plannedTurns = entry.plannedTurns
      asset.state = entry.newState.state
      asset.position = entry.newState.position
      asset.route = entry.newState.route
    })
  })
  return allForces
}
