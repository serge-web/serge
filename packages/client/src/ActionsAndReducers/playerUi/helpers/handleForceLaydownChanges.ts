import { MessageForceLaydown, ForceData, Asset } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

export default (payload: MessageForceLaydown, allForces: ForceData[]): ForceData[] => {
  payload.updates.forEach((update:{uniqid: string, position: string }) => {
    const asset: Asset = findAsset(allForces, update.uniqid)
    asset.position = update.position
    // also clear planned & historic routes
    asset.history = undefined
    asset.plannedTurns = undefined
  })
  return allForces
}
