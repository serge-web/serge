import { MessageStateOfWorld, ForceData, Asset } from '@serge/custom-types'

import findAsset from '../../../Components/Mapping/helpers/findAsset'

export default (payload: MessageStateOfWorld, allForces: ForceData[]): ForceData[] => {
  const { detail } = payload
  detail.data.forEach(force => {
    // @ts-ignore
    force.assets.forEach((entry: Asset) => {
      const asset: Asset | undefined = findAsset(allForces, entry.uniqid)
      if (asset !== undefined) {
        if (entry.destroyed) {
          // @ts-ignore
          asset.destroyed = entry.destroyed
          asset.plannedTurns = []
          // @ts-ignore
          asset.route = []
        } else {
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
        asset.perceptions = entry.perceptions
      }
    })
  })
  return allForces
}
