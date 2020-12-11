import { PlayerUiMessageTypes, ForceData } from '@serge/custom-types'

import findAsset from '../../../Components/Mapping/helpers/findAsset'




export default (payload: PlayerUiMessageTypes, allForces: ForceData[]): ForceData[] => {
// @ts-ignore
  const { detail } = payload
  // @ts-ignore
  detail.data.forEach(force => {
  // @ts-ignore
    force.assets.forEach(entry => {
    // @ts-ignore
      const asset = findAsset(allForces, entry.uniqid)
      if (entry.destroyed) {
      // @ts-ignore
        asset.destroyed = entry.destroyed
        // @ts-ignore
        asset.plannedTurns = []
        // @ts-ignore
        asset.route = []
      } else {
      // @ts-ignore
        asset.plannedTurns = entry.plannedTurns
        // @ts-ignore
        asset.route = entry.newState ? entry.newState.route : asset.route
      }
      // @ts-ignore
      asset.history = asset.history ? asset.history : []
      // @ts-ignore
      asset.history.push(entry.history)
      // @ts-ignore
      asset.status = entry.newState ? entry.newState.status : asset.status
      // @ts-ignore
      asset.position = entry.newState ? entry.newState.position : asset.position
      // @ts-ignore
      asset.condition = entry.condition
      // @ts-ignore
      asset.perceptions = entry.perceptions
    })
  })
  return allForces
}
