import { CollaborativePermission } from '@serge/config'
import { ForceData, ParticipantCollab } from '@serge/custom-types'
import { EDITABLE_SELECT_ITEM, EDITABLE_SWITCH_ITEM, Item, Option } from '../../../molecules/editable-row'

export default (forces: Array<ForceData>, nextParticipant: ParticipantCollab): Array<Item> => {
  // by default selected force
  let forceSelected: Array<number> = [0]
  // init empty roles array
  let roleOptions: Array<Option> = []

  // additional table cols for RFI participation toggles
  const additionalFields: Item[] = []

  if (nextParticipant.forceUniqid) {
    // get selected force for current row
    const forceIndex = forces.findIndex(force => force.uniqid === nextParticipant.forceUniqid)
    if (forceIndex !== -1) {
      // get all roles for current force and generate options for select
      roleOptions = forces[forceIndex].roles.map((role): Option => ({
        name: role.name,
        uniqid: role.name,
        value: role
      }))
      // selected value value for select
      forceSelected = [forceIndex]
    }
  }

  // get selected roles
  const activeRoles: Array<number> = nextParticipant.roles.map(role => {
    return roleOptions.findIndex(option => option.value.roleId === role)
  }).filter(active => active !== -1)

  // if this is a collaborative editing channel then the participant
  // will be of a specific type
  const collab = nextParticipant as unknown as ParticipantCollab

  // init row item for create new message switch
  additionalFields.push({
    type: EDITABLE_SWITCH_ITEM,
    uniqid: 'create_new_message',
    // get default value for switcher
    active: !!collab.canCreate
  })

  // init row item for see live updates switch
  additionalFields.push({
    type: EDITABLE_SWITCH_ITEM,
    uniqid: 'see_live_updates',
    // get default value for switcher
    active: !!collab.viewUnreleasedVersions
  })

  const permissionOptions: Option[] = []
  Object.keys(CollaborativePermission).forEach((key: string) => {
    if (!isNaN(Number(key))) {
      permissionOptions.push({ name: CollaborativePermission[key], uniqid: '' + key })
    }
  })

  // init row item for permission select
  additionalFields.push({
    active: [collab.permission],
    emptyTitle: 'Edit',
    multiple: false,
    options: permissionOptions,
    uniqid: 'permissions',
    type: EDITABLE_SELECT_ITEM
  })

  // return row items
  return [
    {
      active: forceSelected,
      multiple: false,
      options: forces,
      uniqid: 'forces',
      type: EDITABLE_SELECT_ITEM
    },
    {
      active: activeRoles,
      emptyTitle: 'All roles',
      multiple: true,
      options: roleOptions,
      uniqid: 'access',
      type: EDITABLE_SELECT_ITEM
    },
    ...additionalFields
  ]
}
