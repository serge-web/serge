import { Participant } from '../types/props'
import { Item, Option } from '../../../molecules/editable-row'
import { ForceData } from '@serge/custom-types'

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextParticipant: Participant): Array<Item> => {
  let forceSelected: Array<number> = [0]
  let roleOptions: Array<Option> = []

  if (nextParticipant.forceUniqid) {
    const forceIndex = forces.findIndex(force => force.uniqid === nextParticipant.forceUniqid)
    if (forceIndex !== -1) {
      roleOptions = forces[forceIndex].roles
      forceSelected = [forceIndex]
    }
  }

  const activeRoles: Array<number> = nextParticipant.roles.map(role => {
    return roleOptions.findIndex(option => option.roleId === role)
  }).filter(active => active !== -1)

  let activeTemplates: Array<number> = []

  if (nextParticipant.templates.length) {
    activeTemplates = nextParticipant.templates.map(template => {
      return templatesOptions.findIndex(option => option.name === template.title)
    }).filter(active => active !== -1)
  }

  return [
    {
      active: forceSelected,
      multiple: false,
      options: forces,
      uniqid: 'forces'
    },
    {
      active: activeRoles,
      emptyTitle: 'All roles',
      multiple: true,
      options: roleOptions,
      uniqid: 'access'
    },
    {
      active: activeTemplates,
      emptyTitle: 'Chat if empty',
      multiple: true,
      options: templatesOptions,
      uniqid: 'templates'
    }
  ]
}
