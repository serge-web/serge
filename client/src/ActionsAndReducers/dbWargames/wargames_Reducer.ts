import * as ActionConstant from 'src/config'
import copyState from '../../Helpers/copyStateHelper'
import uniqId from 'uniqid'

import {
  forceTemplate,
  channelTemplate,
  dbDefaultSettings,
  serverPath
} from 'src/config'

import { 
  ChannelTypes, ForceData, WargamesState, ParticipantTypes, Role, WargameActionTypes, WargameRevision, Wargame, AllWargameNameSaved, SetCurrentWargame, SetGameSetupData, SetCurrentGameSetupTab, 
  AddNewForce, SetForceColor, AddNewChannel, SetSelectedChannel
} from 'src/custom-types'
let selected: string
let curChannel: string
let index
let newForce
let newChannel
let channelIndex
let newParticipant

const initialState: WargamesState = {
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
type ActionHandler = (newState: WargamesState, action: WargameActionTypes, tab: string) => void;

const handlers: Record<string, ActionHandler> = {
  [ActionConstant.ALL_WARGAME_NAMES_SAVED]: (newState, action) => handleAllWargameNamesSaved(newState, (action as AllWargameNameSaved).payload),
  [ActionConstant.SET_CURRENT_WARGAME]: (newState, action) => handleSetCurrentWargame(newState, (action as SetCurrentWargame).payload),
  [ActionConstant.SET_EXPORT_WARGAME]: (newState, action) => handleSetExportWargame(newState, (action as SetCurrentWargame).payload),
  [ActionConstant.SET_CURRENT_GAME_SETUP_TAB]: (newState, action) => {
    newState.currentTab = (action as SetCurrentGameSetupTab).payload
  },
  [ActionConstant.SET_GAME_SETUP_DATA]: (newState, action, tab) => {
    newState.data[tab] = { ...newState.data[tab], ...(action as SetGameSetupData).payload }
  },
  [ActionConstant.SET_TAB_SAVED]: (newState, _, tab) => {
    newState.data[tab].dirty = false
  },
  [ActionConstant.SET_TAB_UNSAVED]: (newState, _, tab) => {
    newState.data[tab].dirty = true
  },
  [ActionConstant.ADD_NEW_FORCE]: (newState, action, tab) => {
    const { payload } = action as AddNewForce

    newForce = forceTemplate
    newForce.name = payload.name
    newForce.uniqid = payload.uniqid

    newState.data[tab].forces.unshift(newForce)
  },
  [ActionConstant.SET_FORCE_COLOR]: (newState, action, tab) => {
    const { payload } = action as SetForceColor
    const selectedForceName = newState.data[tab].selectedForce.name

    newState.data[tab].forces.find((force: ForceData) => force.name === selectedForceName).color = payload
  },
  [ActionConstant.SET_SELECTED_FORCE]: (newState, action) => {
    newState.data.forces.selectedForce = (action as any).payload 
  },
  [ActionConstant.ADD_NEW_CHANNEL]: (newState, action, tab) => handleAddNewChannel(newState, (action as AddNewChannel).payload, tab),
  [ActionConstant.SET_SELECTED_CHANNEL]: (newState, action, tab) => {
    newState.data[tab].selectedChannel = (action as SetSelectedChannel).payload
  },
  [ActionConstant.DELETE_SELECTED_CHANNEL]: (newState, action, tab) => handleDeleteSelectedChannel(newState, (action as SetSelectedChannel).payload, tab)
}

export const wargamesReducer = (state = initialState, action: WargameActionTypes) => {
  const newState: WargamesState = copyState(state)
  const tab = newState.currentTab

  const handler = handlers[action.type]

  if (handler) {
    handler(newState, action, tab)
  }

  switch (action.type) {
    // case ActionConstant.ALL_WARGAME_NAMES_SAVED:
    //   handleAllWargameNamesSaved(newState, action.payload)
    //   break

    // case ActionConstant.SET_CURRENT_WARGAME:
    //   handleSetCurrentWargame(newState, action.payload)
    //   break
    // case ActionConstant.SET_EXPORT_WARGAME:
    //   handleSetExportWargame(newState, action.payload)
    //   break
    // case ActionConstant.SET_CURRENT_GAME_SETUP_TAB:
    //   newState.currentTab = action.payload
    //   break

    // case ActionConstant.SET_GAME_SETUP_DATA:
    //   newState.data[tab] = { ...newState.data[tab], ...action.payload }
    //   break

    // case ActionConstant.SET_TAB_SAVED:
    //   newState.data[tab].dirty = false
    //   break

    // case ActionConstant.SET_TAB_UNSAVED:
    //   newState.data[tab].dirty = true
    //   break

    // case ActionConstant.ADD_NEW_FORCE:

    //   newForce = forceTemplate
    //   newForce.name = action.payload.name
    //   newForce.uniqid = action.payload.uniqid

    //   newState.data[tab].forces.unshift(newForce)
    //   break

    // case ActionConstant.SET_FORCE_COLOR:
    //   newState.data[tab].forces.find((force: ForceData) => force.name === newState.data[tab].selectedForce.name).color = action.payload
    //   break

    // case ActionConstant.SET_SELECTED_FORCE:
    //   newState.data.forces.selectedForce = action.payload as any
    //   break

    // case ActionConstant.ADD_NEW_CHANNEL:
    //   console.log('newChannel')
    //   newChannel = channelTemplate
    //   newChannel.name = action.payload.name
    //   newChannel.uniqid = action.payload.uniqid
    //   newState.data[tab].channels.push(newChannel)
    //   break

    // case ActionConstant.SET_SELECTED_CHANNEL:
    //   newState.data[tab].selectedChannel = action.payload
    //   break

    // case ActionConstant.DELETE_SELECTED_CHANNEL:

    //   channelIndex = newState.data[tab].channels.findIndex((channel: ChannelTypes) => channel.name === action.payload.name)
    //   newState.data[tab].channels.splice(channelIndex, 1)
    //   newState.data[tab].selectedChannel = ''
    //   break

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

const handleAllWargameNamesSaved = (newState: WargamesState, payload: WargameRevision[] | string | Wargame[]) => {
  const originalList = payload || []
  const anyList = originalList as any
  // // NOTE: we don't know why, but some SQLite files 
  // // can get corrupted, and are empty. Filter them
  // // out, since they're of no values
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

const handleSetCurrentWargame = (newState: WargamesState, payload: Wargame) => {
  newState.currentWargame = payload.name
  newState.wargameTitle = payload.wargameTitle
  newState.data = payload.data
  newState.wargameInitiated = payload.wargameInitiated || false
}

function handleSetExportWargame (newState: WargamesState, payload: Wargame) {
  newState.data = payload.data
  newState.currentWargame = payload.name
  newState.wargameTitle = payload.wargameTitle
  newState.exportMessagelist = payload.exportMessagelist
  newState.wargameInitiated = payload.wargameInitiated || false
}

const handleAddNewChannel = (newState: WargamesState, payload: { name: string, uniqid: string }, tab: string) => {
  newChannel = channelTemplate
  newChannel.name = payload.name
  newChannel.uniqid = payload.uniqid
  newState.data[tab].channels.push(newChannel)
}

const handleDeleteSelectedChannel = (newState: WargamesState, payload: { name: string, uniqid: string }, tab: string) => {
  channelIndex = newState.data[tab].channels.findIndex((channel: ChannelTypes) => channel.name === payload.name)
  newState.data[tab].channels.splice(channelIndex, 1)
  newState.data[tab].selectedChannel = ''
}
