import { Participant } from '../types/props'
import { EDITABLE_SELECT_ITEM, EDITABLE_SWITCH_ITEM, Item, Option } from '../../../molecules/editable-row'
import { ChannelData, ForceData } from '@serge/custom-types'
import { CollaborativePermission, SpecialChannelTypes } from '@serge/config'
import { isCollabChannel } from './messageCollabUtils'

export default (templatesOptions: Array<Option>, forces: Array<ForceData>, nextParticipant: Participant, channelData: ChannelData): Array<Item> => {
  const { format, collabOptions } = channelData
  // by default selected force
  let forceSelected: Array<number> = [0]
  // init empty roles array
  let roleOptions: Array<Option> = []

  const activePermission: number[] = nextParticipant.permissions || []

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

  let activeTemplates: Array<number> = []

  // get selected templates
  if (nextParticipant.templates && nextParticipant.templates.length) {
    activeTemplates = nextParticipant.templates.map(template => {
      return templatesOptions.findIndex(option => option.uniqid === template._id)
    }).filter(active => active !== -1)
  }

  const collabChannel = isCollabChannel(channelData)
  if (collabChannel) {
    // init row item for create new message switch
    additionalFields.push({
      type: EDITABLE_SWITCH_ITEM,
      uniqid: 'create_new_message',
      // get default value for switcher
      active: !!nextParticipant.canCreateNewMessage
    })

    // init row item for see live updates switch
    additionalFields.push({
      type: EDITABLE_SWITCH_ITEM,
      uniqid: 'see_live_updates',
      // get default value for switcher
      active: !!nextParticipant.canSeeLiveUpdates
    })

    const permissionOptions: Option[] = []
    Object.keys(CollaborativePermission).forEach((key: number | string) => {
      if (!isNaN(Number(key))) {
        permissionOptions.push({ name: CollaborativePermission[key], uniqid: '' + key })
      }
    })

    // init row item for permission select
    additionalFields.push({
      active: activePermission,
      emptyTitle: 'Edit',
      multiple: true,
      options: permissionOptions,
      uniqid: 'permissions',
      type: EDITABLE_SELECT_ITEM
    })
  } else {
    additionalFields.push({
      active: activeTemplates,
      emptyTitle: 'Chat if empty',
      multiple: true,
      options: templatesOptions,
      uniqid: 'templates',
      type: EDITABLE_SELECT_ITEM
    })
  }

  // check special channels
  if (typeof format !== 'undefined' && !collabChannel) {
    if (typeof collabOptions !== 'undefined') {
      if (
        format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT ||
        format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
      ) {
        // init row item for participate switch
        additionalFields.push({
          type: EDITABLE_SWITCH_ITEM,
          uniqid: 'participate',
          // get default value for switcher
          active: nextParticipant.canCollaborate
        })
        // init row item for release switch
        additionalFields.push({
          type: EDITABLE_SWITCH_ITEM,
          uniqid: 'release',
          // get default value for switcher
          active: nextParticipant.canReleaseMessages
        })
        // init row item for unclaim switch
        additionalFields.push({
          type: EDITABLE_SWITCH_ITEM,
          uniqid: 'unclaim',
          // get default value for switcher
          active: nextParticipant.canUnClaimMessages
        })
      }
    }
  }

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
