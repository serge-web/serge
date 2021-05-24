import { ForceData, MessageCreateTaskGroup } from '@serge/custom-types'
import { groupCreateNewGroup } from '@serge/helpers'

export default (payload: MessageCreateTaskGroup, allForces: ForceData[]): ForceData[] => {
  return groupCreateNewGroup(payload.dragged, payload.target, allForces)
}
