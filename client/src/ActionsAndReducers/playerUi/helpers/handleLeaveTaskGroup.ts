import { ForceData, MessageLeaveTaskGroup } from 'src/custom-types'
import { groupMoveToRoot } from 'src/Helpers'

export default (payload: MessageLeaveTaskGroup, allForces: ForceData[]): ForceData[] => {
  return groupMoveToRoot(payload.dragged, allForces)
}
