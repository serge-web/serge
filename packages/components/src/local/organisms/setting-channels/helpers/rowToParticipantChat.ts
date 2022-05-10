import { ForceData, Role } from '@serge/custom-types'
import { ParticipantChat } from '@serge/custom-types/participant'
import { SelectItem } from 'src/local/molecules/editable-row/types/props'
import { EDITABLE_SELECT_ITEM, Item } from '../../../molecules/editable-row'

// Convert table row items to Participant object
export default (forces: Array<ForceData>, nextItems: Array<Item>, participant: ParticipantChat): ParticipantChat => {
  // get firs 3 table select items
  const [force, access] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]

  // get selected force(s) if there is no selected forces get first force as selected
  const selectedForce = forces[force.active ? force.active[0] : 0]
  // get selected rpoes
  const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []

  return {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles
  }
}
