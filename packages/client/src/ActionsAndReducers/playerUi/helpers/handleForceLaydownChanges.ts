import { MessageForceLaydown, ForceData, Asset } from '@serge/custom-types'
import { findAsset } from '@serge/helpers'

export default (payload: MessageForceLaydown, allForces: ForceData[]): ForceData[] => {
  const asset: Asset = findAsset(allForces, payload.uniqid)
  asset.position = payload.position
  return allForces
}
