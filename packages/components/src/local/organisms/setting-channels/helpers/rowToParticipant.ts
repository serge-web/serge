import { Participant } from '../types/props'
import { Item, Option } from '../../../molecules/editable-row'
import { ForceData, ParticipantTemplate, Role, TemplateBody } from '@serge/custom-types'
import { SelectItem, SwitchItem } from 'src/local/molecules/editable-row/types/props'

// Convert table row items to Participant object
export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>, participant: Participant): Participant => {
  // get firs 3 table select items
  const [force, access, template] = nextItems as SelectItem[]

  // get selected force(s) if there is no selected forces get first force as selected
  const selectedForce = forces[force.active ? force.active[0] : 0]
  // get selected rpoes
  const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []
  // get selected templates
  const templates: ParticipantTemplate[] = template.active ? template.active.map((key: number) => {
    const { _id, title } = templatesOptions[key].value as TemplateBody
    return { _id, title }
  }) : []
  // init defaul values
  let { canCollaborate, canReleaseMessages, canUnClaimMessages } = participant

  // find participate and release items from EditableRow items
  const participate = nextItems.find(item => (item.uniqid === 'participate')) as SwitchItem | undefined
  const release = nextItems.find(item => (item.uniqid === 'release')) as SwitchItem | undefined
  const unclaim = nextItems.find(item => (item.uniqid === 'unclaim')) as SwitchItem | undefined

  // check if item not undefined then we changin init value to new one
  if (typeof participate !== 'undefined') canCollaborate = participate.active
  if (typeof release !== 'undefined') canReleaseMessages = release.active
  if (typeof unclaim !== 'undefined') canUnClaimMessages = unclaim.active

  // return converted participant
  return {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    templates,
    canCollaborate,
    canReleaseMessages,
    canUnClaimMessages
  }
}
