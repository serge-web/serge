import { ForceData, ParticipantTemplate, Role, TemplateBody } from '@serge/custom-types'
import { SelectItem, SwitchItem } from 'src/local/molecules/editable-row/types/props'
import { EDITABLE_SELECT_ITEM, Item, Option } from '../../../molecules/editable-row'
import { Participant } from '../types/props'

// Convert table row items to Participant object
export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>, participant: Participant): Participant => {
  // get firs 3 table select items
  const [force, access, templateOrPermission] = nextItems.filter(item => item.type === EDITABLE_SELECT_ITEM) as SelectItem[]

  // get selected force(s) if there is no selected forces get first force as selected
  const selectedForce = forces[force.active ? force.active[0] : 0]
  // get selected rpoes
  const roles: Array<Role['roleId']> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []
  // get selected templates
  const templates: ParticipantTemplate[] = templateOrPermission.active ? templateOrPermission.active.map((key: number) => {
    const { _id, title } = templatesOptions[key].value as TemplateBody
    return { _id, title }
  }) : []

  const res = {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    templates
  }

  // return converted participant
  return res
}
