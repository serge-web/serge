import { ForceData, MessageDeletePlatform } from '@serge/custom-types'
import { deletePlatform } from '@serge/helpers'

export default (payload: MessageDeletePlatform, allForces: ForceData[]): ForceData[] => {
  return deletePlatform(payload.assetId, allForces)
}
