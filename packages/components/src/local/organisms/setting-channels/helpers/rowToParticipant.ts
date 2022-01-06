import { Participant } from '../types/props'
import { Item, Option, EDITABLE_SELECT_ITEM } from '../../../molecules/editable-row'
import { ForceData, ParticipantCollab, ParticipantTemplate, Role, TemplateBody } from '@serge/custom-types'
import { SelectItem, SwitchItem } from 'src/local/molecules/editable-row/types/props'

// Convert table row items to Participant object
export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>, participant: Participant, isCollab?: boolean): Participant => {
  // get firs 3 table select items
  const [force, access, templateOrPermission] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]

  // get selected force(s) if there is no selected forces get first force as selected
  const selectedForce = forces[force.active ? force.active[0] : 0]
  // get selected rpoes
  const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []
  // get selected templates
  const templates: ParticipantTemplate[] = !isCollab && templateOrPermission.active ? templateOrPermission.active.map((key: number) => {
    const { _id, title } = templatesOptions[key].value as TemplateBody
    return { _id, title }
  }) : []
  // init defaul values
  let { canCollaborate, canReleaseMessages, canUnClaimMessages, canCreateNewMessage, canSeeLiveUpdates } = participant

  // find participate and release items from EditableRow items
  const participate = nextItems.find(item => (item.uniqid === 'participate')) as SwitchItem | undefined
  const release = nextItems.find(item => (item.uniqid === 'release')) as SwitchItem | undefined
  const unclaim = nextItems.find(item => (item.uniqid === 'unclaim')) as SwitchItem | undefined
  const createNewMsg = nextItems.find(item => (item.uniqid === 'create_new_message')) as SwitchItem | undefined
  const seeLiveUpdates = nextItems.find(item => (item.uniqid === 'see_live_updates')) as SwitchItem | undefined

  // check if item not undefined then we changin init value to new one
  if (typeof participate !== 'undefined') canCollaborate = participate.active
  if (typeof release !== 'undefined') canReleaseMessages = release.active
  if (typeof unclaim !== 'undefined') canUnClaimMessages = unclaim.active
  if (typeof createNewMsg !== 'undefined') canCreateNewMessage = createNewMsg.active
  if (typeof seeLiveUpdates !== 'undefined') canSeeLiveUpdates = seeLiveUpdates.active

  const res = {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    templates,
    canCollaborate,
    canReleaseMessages,
    canUnClaimMessages,
    canCreateNewMessage,
    canSeeLiveUpdates
  }

  if (isCollab) {
    const collabP = res as unknown as ParticipantCollab
    const permissions: number[] = (isCollab && templateOrPermission.active) || []
    collabP.permission = permissions[0]
  }

  // return converted participant
  return res
}
