import { Asset, ForceData } from '@serge/custom-types'
import findAsset from '../../../Components/Mapping/helpers/findAsset'

export default (payload: Asset, allForces: ForceData[]): ForceData[] => {
  const asset = findAsset(allForces, payload.uniqid)
  if (asset !== undefined) asset.position = payload.position
  // NOTE: so what is it? asset we are not using/saving
  return allForces
}
