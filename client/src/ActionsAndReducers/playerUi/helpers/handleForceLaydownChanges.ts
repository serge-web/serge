import { Asset, ForceData, MessageForceLaydown } from 'src/custom-types'
import { findAsset } from '@serge/helpers'

export default (payload: MessageForceLaydown, allForces: ForceData[]): ForceData[] => {
  payload.updates.forEach((update: { uniqid: string, position: string }) => {
    const asset: Asset = findAsset(allForces, update.uniqid)
    asset.position = update.position
    // also clear planned & historic routes
    asset.history = undefined
    asset.plannedTurns = undefined
    // and the laydown flags
    if (!asset.locationPending) {
      console.warn('Updating force laydown, but have encountered asset without location pending', asset.name)
    }

    asset.locationPending = undefined
  })
  return allForces
}
