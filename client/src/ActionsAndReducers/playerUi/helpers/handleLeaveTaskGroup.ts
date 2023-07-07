import { ForceData, MessageLeaveTaskGroup } from 'src/custom-types'
import { groupMoveToRoot } from '@serge/helpers'

export default (payload: MessageLeaveTaskGroup, allForces: ForceData[]): ForceData[] => {
  return groupMoveToRoot(payload.dragged, allForces)
}
