import { WargamesState, WargameRevision, Wargame, ChannelTypes, ForceData, ParticipantTypes, Role } from 'src/custom-types'
import { channelTemplate, serverPath, forceTemplate } from 'src/config'
import uniqId from 'uniqid'

// Handles the saving of all wargame names.
export const handleAllWargameNamesSaved = (newState: WargamesState, payload: WargameRevision[] | string | Wargame[]) => {
  const originalList = payload || []
  const anyList = originalList as any
  // NOTE: We don't know why, but some SQLite files 
  // can get corrupted, and are empty. Filter them
  // out since they're of no value.
  const safeList = anyList.filter((game: any) => {
    if (game.wargameTitle || game.title) {
      return true
    } else {
      console.warn('Warning Data not found for', game.name, ' potentially corrupt')
      return false
    }
  })
  newState.wargameList = safeList
}

// setting the current wargame.
export const handleSetCurrentWargame = (newState: WargamesState, payload: Wargame) => {
  newState.currentWargame = payload.name
  newState.wargameTitle = payload.wargameTitle
  newState.data = payload.data
  newState.wargameInitiated = payload.wargameInitiated || false
}

// Handles setting the wargame data for export.
export const handleSetExportWargame = (newState: WargamesState, payload: Wargame) => {
  newState.data = payload.data
  newState.currentWargame = payload.name
  newState.wargameTitle = payload.wargameTitle
  newState.exportMessagelist = payload.exportMessagelist
  newState.wargameInitiated = payload.wargameInitiated || false
}

// adding a new force to the wargame.
export const handleAddNewForce = (newState: WargamesState, payload: { name: string, uniqid: string }, tab: string) => {
  const newForce: ForceData = {
    ...forceTemplate, 
    name: payload.name,
    uniqid: payload.uniqid
  }

  newState.data[tab].forces.unshift(newForce)
}

// Handles adding a new channel to the wargame.
export const handleAddNewChannel = (newState: WargamesState, payload: { name: string, uniqid: string }, tab: string) => {
  const newChannel = channelTemplate
  newChannel.name = payload.name
  newChannel.uniqid = payload.uniqid
  newState.data[tab].channels.push(newChannel)
}

// Handles deleting the selected channel from the wargame.
export const handleDeleteSelectedChannel = (newState: WargamesState, payload: { name: string, uniqid: string }, tab: string) => {
  const channelIndex = newState.data[tab].channels.findIndex((channel: ChannelTypes) => channel.name === payload.name)
  newState.data[tab].channels.splice(channelIndex, 1)
  newState.data[tab].selectedChannel = ''
}

// adding a new recipient to the selected channel.
export const handleAddNewRecipient = (newState: WargamesState, payload: { id: string, data: Wargame }, tab: string) => {
  const curChannel = newState.data[tab].selectedChannel.uniqid
  const newParticipant = { ...payload, subscriptionId: uniqId.time() }
  newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.push(newParticipant)
}

// Handles updating the recipient in the selected channel.
export const handleUpdateRecipient = (newState: WargamesState, payload: { id: string, data: Wargame }, tab: string) => {
  const curChannel = newState.data[tab].selectedChannel.uniqid
  const index = newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.findIndex((participant: ParticipantTypes) => participant.subscriptionId === payload.id)
  newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.splice(index, 1, { ...payload.data, subscriptionId: payload.id })
}

// Heandles removing the recipient from the selected channel.
export const handleRemoveRecipient = (newState: WargamesState, payload: string, tab: string) => {
  const curChannel = newState.data[tab].selectedChannel.uniqid
  const index = newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.findIndex((participant: ParticipantTypes) => participant.subscriptionId === payload)
  newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.splice(index, 1)
}

// Handles adding a role to the force in the selected tab.
export const handleAddRoleToForce = (newState: WargamesState, payload: { 
    force?: string
    role?: string
    oldName?: string
}, tab: string) => {
  newState.data[tab].forces.find((force: ForceData) => force.name === payload.force).roles.push(payload.role)
}

// removing a role from the force in the selected tab.
export const handleUpdateRoleName = (newState: WargamesState, payload: { 
    force?: string
    role?: string
    oldName?: string
  }, tab: string) => {
  const curChannel = newState.data[tab].selectedChannel.uniqid
  const index = newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.findIndex((participant: ParticipantTypes) => participant.subscriptionId === payload)
  newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.splice(index, 1)
}

// Handles removing a role from the force in the selected tab.
export const handleRemoveRole = (newState: WargamesState, payload: string, tab: string) => {
  const index = newState.data[tab].forces.find((force: ForceData) => force.name === newState.data[tab].selectedForce.name).roles.findIndex((role: Role) => role.name === payload)
  newState.data[tab].forces.find((f: ForceData) => f.name === newState.data[tab].selectedForce.name).roles.splice(index, 1)
}

// adding an icon to the selected force in the selected tab.
export const handleAddIcon = (newState: WargamesState, payload: any, tab: string) => {
  const selectedForceName = newState.data[tab].selectedForce.name
  newState.data[tab].forces.find((force: ForceData) => force.name === selectedForceName).icon = serverPath + payload.slice(1)
}
