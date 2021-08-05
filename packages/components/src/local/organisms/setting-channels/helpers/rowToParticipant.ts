import { Participant } from '../types/props'
import { Item, Option } from '../../../molecules/editable-row'
import { ForceData, ParticipantTemplate, TemplateBody } from '@serge/custom-types'

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>, participant: Participant): Participant => {
  const [force, access, template] = nextItems
  const selectedForce = forces[force.active ? force.active[0] : 0]
  const roles: Array<string> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key].roleId
  )) : []
  const templates: ParticipantTemplate[] = template.active ? template.active.map((key: number) => {
    const { _id, title } = templatesOptions[key].value as TemplateBody
    return { _id, title }
  }) : []
  return {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    templates
  }
}
