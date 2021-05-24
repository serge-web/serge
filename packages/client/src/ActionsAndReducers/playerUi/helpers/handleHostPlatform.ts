import { ForceData, MessageHostPlatform } from '@serge/custom-types'
import { groupHostPlatform } from '@serge/helpers'

export default (payload: MessageHostPlatform, allForces: ForceData[]): ForceData[] => {
  return groupHostPlatform(payload.dragged, payload.target, allForces)
}
