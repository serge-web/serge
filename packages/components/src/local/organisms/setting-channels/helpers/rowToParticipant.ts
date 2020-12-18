import { Participant } from '../types/props'
import { Item, Option } from '../../../molecules/editable-row'
import { ForceData, Role } from '@serge/custom-types'

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextItems: Array<Item>, participant: Participant): Participant => {
  const [force, access, template] = nextItems
  const selectedForce = forces[force.active ? force.active[0] : 0]
  const roles: Array<Role> = access.active ? access.active.map((key: number) => (
    selectedForce.roles[key]
  )) : []
  const templates: Array<any> = template.active ? template.active.map((key: number) => (
    templatesOptions[key].value
  )) : []
  return {
    ...participant,
    force: selectedForce.name,
    forceUniqid: selectedForce.uniqid,
    roles,
    templates
  }
}
