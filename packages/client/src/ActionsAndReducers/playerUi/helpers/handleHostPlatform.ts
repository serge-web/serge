import { TASK_GROUP } from '@serge/config'
import { ForceData, MessageHostPlatform, PlatformTypeData } from '@serge/custom-types'
import { groupHostPlatform } from '@serge/helpers'

export default (payload: MessageHostPlatform, allForces: ForceData[], platformTypes: PlatformTypeData[]): ForceData[] => {
  const taskGroup = platformTypes.find((pType: PlatformTypeData) => pType.name === TASK_GROUP)
  if (!taskGroup) { throw new Error('Cannot process host platform without task group definition') }
  return groupHostPlatform(payload.dragged, payload.target, allForces, taskGroup)
}
