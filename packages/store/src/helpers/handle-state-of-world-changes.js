import { findAsset } from '@serge/helpers'

/** create a marker for the supplied set of details */
export default (/* object */ payload, /* object */ allForces) => {
  const detail = payload.detail
  detail.data.forEach(force => {
    force.assets.forEach(entry => {
      // ok, get the asset
      const asset = findAsset(allForces, entry.uniqid)
      // check we have history
      if (entry.destroyed) {
        asset.destroyed = entry.destroyed
        asset.plannedTurns = []
        asset.route = []
      } else {
        asset.plannedTurns = entry.plannedTurns
        asset.route = entry.newState ? entry.newState.route : asset.route
      }
      asset.history = asset.history ? asset.history : []
      asset.history.push(entry.history)
      asset.status = entry.newState ? entry.newState.status : asset.status
      asset.position = entry.newState ? entry.newState.position : asset.position
      asset.condition = entry.condition
      asset.perceptions = entry.perceptions
    })
  })
  return allForces
}
