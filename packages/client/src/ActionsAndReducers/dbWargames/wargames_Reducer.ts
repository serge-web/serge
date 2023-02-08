import * as ActionConstant from '@serge/config'
import copyState from '../../Helpers/copyStateHelper'
import uniqId from 'uniqid'

import {
  forceTemplate,
  channelTemplate,
  dbDefaultSettings,
  serverPath
} from '../../consts'

import { ChannelTypes, ForceData, ParticipantTypes, Role, WargameActionTypes } from '@serge/custom-types'

const initialState = {
  isLoading: false,
  wargameList: [],
  currentWargame: '',
  exportMessagelist: [],
  wargameTitle: '',
  data: { ...dbDefaultSettings.data },
  currentTab: Object.keys(dbDefaultSettings.data)[0],
  wargameInitiated: false,
  adminNotLoggedIn: true
}

export const wargamesReducer = (state = initialState, action: WargameActionTypes) => {
  const newState = copyState(state)
  const tab = newState.currentTab

  let selected: string
  let curChannel: string
  let index
  let newForce
  let newChannel
  let channelIndex
  let newParticipant

  switch (action.type) {
    case ActionConstant.ALL_WARGAME_NAMES_SAVED:
      const originalList = action.payload || []
      const anyList = originalList as any[] || []
      // NOTE: we don't know why, but some SQLite files 
      // can get corrupted, and are empty. Filter them
      // out, since they're of no values
      const safeList = anyList.filter((game: any) => {
        if (game.wargameTitle || game.title) {
          return true
        } else {
          console.warn('Warning Data not found for', game.name, ' potentially corrupt')
          return false
        }
      })
      newState.wargameList = safeList
      return newState
     
    case ActionConstant.SET_CURRENT_FORCES:
      newState.data.forces = action.payload.forces
      return newState  

    case ActionConstant.SET_CURRENT_WARGAME:
      
      newState.currentWargame = action.payload.name
      newState.wargameTitle = action.payload.wargameTitle
      newState.data = action.payload.data
      newState.wargameInitiated = action.payload.wargameInitiated || false

      return newState
      
    case ActionConstant.SET_EXPORT_WARGAME:

      newState.data = action.payload.data
      newState.currentWargame = action.payload.name
      newState.wargameTitle = action.payload.wargameTitle
      newState.exportMessagelist = action.payload.exportMessagelist
      newState.wargameInitiated = action.payload.wargameInitiated || false

      return newState

    case ActionConstant.SET_CURRENT_GAME_SETUP_TAB:
      newState.currentTab = action.payload
      break

    case ActionConstant.SET_GAME_SETUP_DATA:
      newState.data[tab] = { ...newState.data[tab], ...action.payload }
      break

    case ActionConstant.SET_TAB_SAVED:
      newState.data[tab].dirty = false
      break

    case ActionConstant.SET_TAB_UNSAVED:
      newState.data[tab].dirty = true
      break

    case ActionConstant.ADD_NEW_FORCE:

      newForce = forceTemplate
      newForce.name = action.payload.name
      newForce.uniqid = action.payload.uniqid

      newState.data[tab].forces.unshift(newForce)
      break

    case ActionConstant.SET_FORCE_COLOR:
      newState.data[tab].forces.find((force: ForceData) => force.name === newState.data[tab].selectedForce.name).color = action.payload
      break

    case ActionConstant.SET_SELECTED_FORCE:
      newState.data.forces.selectedForce = action.payload
      break

    case ActionConstant.ADD_NEW_CHANNEL:

      newChannel = channelTemplate
      newChannel.name = action.payload.name
      newChannel.uniqid = action.payload.uniqid
      newState.data[tab].channels.push(newChannel)
      break

    case ActionConstant.SET_SELECTED_CHANNEL:
      newState.data[tab].selectedChannel = action.payload
      break

    case ActionConstant.DELETE_SELECTED_CHANNEL:

      channelIndex = newState.data[tab].channels.findIndex((channel: ChannelTypes) => channel.name === action.payload.name)
      newState.data[tab].channels.splice(channelIndex, 1)
      newState.data[tab].selectedChannel = ''
      break

    case ActionConstant.ADD_NEW_RECIPIENT:
      curChannel = newState.data[tab].selectedChannel.uniqid
      newParticipant = { ...action.payload, subscriptionId: uniqId.time() }
      newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.push(newParticipant)
      break

    case ActionConstant.UPDATE_RECIPIENT:
      curChannel = newState.data[tab].selectedChannel.uniqid
      index = newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.findIndex((participant: ParticipantTypes) => participant.subscriptionId === action.payload.id)
      newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.splice(index, 1, { ...action.payload.data, subscriptionId: action.payload.id })
      break

    case ActionConstant.REMOVE_RECIPIENT:
      curChannel = newState.data[tab].selectedChannel.uniqid
      index = newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.findIndex((participant: ParticipantTypes) => participant.subscriptionId === action.payload)
      newState.data[tab].channels.find((c: ChannelTypes) => c.uniqid === curChannel).participants.splice(index, 1)
      break

    case ActionConstant.ADD_ROLE_TO_FORCE:
      newState.data[tab].forces.find((force: ForceData) => force.name === action.payload.force).roles.push(action.payload.role)
      break

    case ActionConstant.UPDATE_ROLE_NAME:
      index = newState.data[tab].forces.find((force: ForceData) => force.name === action.payload.force).roles.findIndex((role: Role) => role.name === action.payload.oldName)
      newState.data[tab].forces.find((force: ForceData) => force.name === action.payload.force).roles.splice(index, 1, action.payload.role)
      break

    case ActionConstant.REMOVE_ROLE:
      index = newState.data[tab].forces.find((force: ForceData) => force.name === newState.data[tab].selectedForce.name).roles.findIndex((role: Role) => role.name === action.payload)
      newState.data[tab].forces.find((f: ForceData) => f.name === newState.data[tab].selectedForce.name).roles.splice(index, 1)
      break

    case ActionConstant.ADD_ICON:
      selected = newState.data[tab].selectedForce.name
      newState.data[tab].forces.find((f: ForceData) => f.name === selected).icon = serverPath + action.payload.slice(1)
      break

    case ActionConstant.LOGIN_ADMIN:

      newState.adminNotLoggedIn = false
      break

    default:
      return newState
  }

  return newState
}
