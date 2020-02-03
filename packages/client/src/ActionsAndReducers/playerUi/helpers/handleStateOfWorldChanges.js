import findAsset from '../../../Components/Mapping/helpers/findAsset'
/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const detail = payload.detail
  detail.data.forEach(force => {
    force.assets.forEach(entry => {
      // ok, get the asset
      const asset = findAsset(allForces, entry.uniqid)
      // check we have history
      asset.history = asset.history ? asset.history : []
      asset.history.push(entry.history)
      asset.plannedTurns = entry.plannedTurns
      asset.status = entry.newState ? entry.newState.status : asset.status
      asset.position = entry.newState ? entry.newState.position : asset.position
      asset.route = entry.newState ? entry.newState.route : asset.route
      asset.condition = entry.condition
      asset.perceptions = entry.perceptions
    })
  })
  return allForces
}
