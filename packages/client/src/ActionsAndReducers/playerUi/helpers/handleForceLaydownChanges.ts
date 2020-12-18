import { MessageForceLaydown, ForceData } from '@serge/custom-types'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

export default (payload: MessageForceLaydown, allForces: ForceData[]): ForceData[] => {
  const asset = findAsset(allForces, payload.uniqid)
  if (asset !== undefined) asset.position = payload.position
  return allForces
}
