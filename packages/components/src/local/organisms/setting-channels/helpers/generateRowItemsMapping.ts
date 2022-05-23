import { CONTROL_NONE } from '@serge/config'
import { Asset, ForceData, ParticipantMapping } from '@serge/custom-types'
import { EDITABLE_SELECT_ITEM, Item, Option } from '../../../molecules/editable-row'

export default (forces: Array<ForceData>, nextParticipant: ParticipantMapping): Array<Item> => {
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

  const assetOptions: Array<Option> = []
  forces.forEach((force: ForceData) => {
    if (force.assets && force.assets.length) {
      assetOptions.push({ name: force.name + ' - ALL', uniqid: '-' + force.uniqid })
      force.assets.forEach((asset: Asset) => {
        assetOptions.push({ name: force.name + ' - ' + asset.name, uniqid: asset.uniqid })
      })
    }
  })
  assetOptions.push({ name: 'Controls no assets', uniqid: CONTROL_NONE })

  //  const controls: string[] | typeof CONTROL_ALL | typeof CONTROL_NONE = nextParticipant.controls || []
  const activeControls: Array<number> = []

  // get selected roles
  const partRoles: string[] = nextParticipant.roles
  const activeRoles: Array<number> = partRoles ? partRoles.map(role => {
    return roleOptions.findIndex(option => option.value.roleId === role)
  }).filter(active => active !== -1) : []

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
    {
      active: activeControls,
      emptyTitle: 'No assets',
      multiple: true,
      options: assetOptions,
      uniqid: 'assets',
      type: EDITABLE_SELECT_ITEM
    },
    ...additionalFields
  ]
}
