import { TASK_GROUP } from 'src/config'
import { ForceData, MessageHostPlatform, PlatformTypeData } from 'src/custom-types'
import { groupHostPlatform } from 'src/Helpers'

export default (payload: MessageHostPlatform, allForces: ForceData[], platformTypes: PlatformTypeData[]): ForceData[] => {
  const taskGroup = platformTypes.find((pType: PlatformTypeData) => pType.name === TASK_GROUP)
  if (!taskGroup) { throw new Error('Cannot process host platform without task group definition') }
  return groupHostPlatform(payload.dragged, payload.target, allForces, taskGroup)
}
