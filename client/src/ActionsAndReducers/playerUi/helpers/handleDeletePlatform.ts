import { ForceData, MessageDeletePlatform } from 'src/custom-types'
import { deletePlatform } from 'src/Helpers'

export default (payload: MessageDeletePlatform, allForces: ForceData[]): ForceData[] => {
  return deletePlatform(payload.assetId, allForces)
}
