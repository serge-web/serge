import { ForceData, Participant, ParticipantCollab, Role } from '@serge/custom-types'
import { SelectItem, SwitchItem } from 'src/local/molecules/editable-row/types/props'
import { EDITABLE_SELECT_ITEM, Item } from '../../../molecules/editable-row'

// Convert table row items to Participant object
export default (forces: Array<ForceData>, nextItems: Array<Item>, participantCollab: ParticipantCollab): Participant => {
  // get firs 3 table select items
  const [force, access, permissionsTpls] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]

  // get selected force(s) if there is no selected forces get first force as selected
  const selectedForce = forces[force.active ? force.active[0] : 0]
  // get selected rpoes
  const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []
  // get selected templates
  const permission = permissionsTpls.active || []

  // init defaul values
  let { canCreate, viewUnreleasedVersions } = participantCollab

  const createNewMsg = nextItems.find(item => (item.uniqid === 'create_new_message')) as SwitchItem | undefined
  const seeLiveUpdates = nextItems.find(item => (item.uniqid === 'see_live_updates')) as SwitchItem | undefined

  if (typeof createNewMsg !== 'undefined') canCreate = !!createNewMsg.active
  if (typeof seeLiveUpdates !== 'undefined') viewUnreleasedVersions = !!seeLiveUpdates.active

  const res = {
    ...participantCollab,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    permission,
    canCreate,
    viewUnreleasedVersions
  }

  // return converted participant
  return res as unknown as Participant
}
