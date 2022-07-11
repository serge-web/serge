import { CONTROL_ALL } from '@serge/config'
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
  /**
   * utility function, to re-use list generation code in both cases
   */
  const addItem = (force: ForceData, myForce: ForceData['uniqid'], match: boolean): void => {
    if (force.assets) {
      if ((match && myForce === force.uniqid) || (!match && myForce !== force.uniqid)) {
        assetOptions.push({ name: 'All unclaimed for ' + force.name, uniqid: CONTROL_ALL + force.uniqid })
        force.assets && force.assets.forEach((asset: Asset) => {
          assetOptions.push({ name: '- ' + force.name + ': ' + asset.name, uniqid: asset.uniqid })
        })
      }
    }
  }
  // first own force assets
  forces.forEach((force: ForceData) => {
    addItem(force, nextParticipant.forceUniqid, true)
  })
  // now other force assets
  forces.forEach((force: ForceData) => {
    addItem(force, nextParticipant.forceUniqid, false)
  })

  // produce list of selected control entries
  const activeControls: Array<number> = []
  const controls = nextParticipant.controls || []
  controls.length > 0 && assetOptions.forEach((option: Option, index: number) => {
    if (controls.includes(option.uniqid)) {
      activeControls.push(index)
    }
  })

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
