import { ForceData, Asset, MessageCreateTaskGroup } from '@serge/custom-types'
import { forceFor, groupCreateNewGroup } from '@serge/helpers'

export default (payload: MessageCreateTaskGroup, allForces: ForceData[]): ForceData[] => {
  return groupCreateNewGroup(payload.dragged, payload.target, allForces)
}
