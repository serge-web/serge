import * as ActionConstant from 'src/config'
import copyState from '../../Helpers/copyStateHelper'
// import uniqId from 'uniqid'
import * as wargamesHandlers from './helpers/wargamesHandlers'

import { dbDefaultSettings } from 'src/config'

import { 
  ForceData, WargamesState, WargameActionTypes, AllWargameNameSaved, SetCurrentWargame, SetGameSetupData, AddNewRecipient, RemoveRecipient,
  SetCurrentGameSetupTab, AddNewForce, SetForceColor, AddNewChannel, SetSelectedChannel, AddRoleToForce, RemoveRoleFromForce, AddIcon
} from 'src/custom-types'

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
  [ActionConstant.ALL_WARGAME_NAMES_SAVED]: (newState, action) => wargamesHandlers.handleAllWargameNamesSaved(newState, (action as AllWargameNameSaved).payload),
  [ActionConstant.SET_CURRENT_WARGAME]: (newState, action) => wargamesHandlers.handleSetCurrentWargame(newState, (action as SetCurrentWargame).payload),
  [ActionConstant.SET_EXPORT_WARGAME]: (newState, action) => wargamesHandlers.handleSetExportWargame(newState, (action as SetCurrentWargame).payload),
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
  [ActionConstant.ADD_NEW_FORCE]: (newState, action, tab) => wargamesHandlers.handleAddNewForce(newState, (action as AddNewForce).payload, tab),
  [ActionConstant.SET_FORCE_COLOR]: (newState, action, tab) => {
    const selectedForceName = newState.data[tab].selectedForce.name
    newState.data[tab].forces.find((force: ForceData) => force.name === selectedForceName).color = action as SetForceColor
  },
  [ActionConstant.SET_SELECTED_FORCE]: (newState, action) => {
    newState.data.forces.selectedForce = (action as any).payload 
  },
  [ActionConstant.ADD_NEW_CHANNEL]: (newState, action, tab) => wargamesHandlers.handleAddNewChannel(newState, (action as AddNewChannel).payload, tab),
  [ActionConstant.SET_SELECTED_CHANNEL]: (newState, action, tab) => {
    newState.data[tab].selectedChannel = (action as SetSelectedChannel).payload
  },
  [ActionConstant.DELETE_SELECTED_CHANNEL]: (newState, action, tab) => wargamesHandlers.handleDeleteSelectedChannel(newState, (action as SetSelectedChannel).payload, tab),
  [ActionConstant.ADD_NEW_RECIPIENT]: (newState, action, tab) => wargamesHandlers.handleAddNewRecipient(newState, (action as AddNewRecipient).payload, tab),
  [ActionConstant.UPDATE_RECIPIENT]: (newState, action, tab) => wargamesHandlers.handleUpdateRecipient(newState, (action as AddNewRecipient).payload, tab),
  [ActionConstant.REMOVE_RECIPIENT]: (newState, action, tab) => wargamesHandlers.handleRemoveRecipient(newState, (action as RemoveRecipient).payload, tab),
  [ActionConstant.ADD_ROLE_TO_FORCE]: (newState, action, tab) => wargamesHandlers.handleAddRoleToForce(newState, (action as AddRoleToForce).payload, tab),
  [ActionConstant.UPDATE_ROLE_NAME]: (newState, action, tab) => wargamesHandlers.handleUpdateRoleName(newState, (action as AddRoleToForce).payload, tab),
  [ActionConstant.REMOVE_ROLE]: (newState, action, tab) => wargamesHandlers.handleRemoveRole(newState, (action as RemoveRoleFromForce).payload, tab),
  [ActionConstant.ADD_ICON]: (newState, action, tab) => wargamesHandlers.handleAddIcon(newState, (action as AddIcon).payload, tab),
  [ActionConstant.LOGIN_ADMIN]: (newState) => { newState.adminNotLoggedIn = false }
}

export const wargamesReducer = (state = initialState, action: WargameActionTypes) => {
  const newState: WargamesState = copyState(state)
  const tab = newState.currentTab

  const handler = handlers[action.type]

  if (handler) {
    handler(newState, action, tab)
  } else {
    console.warn(`Heandler not defined for a action type: ${action.type}`)
  }

  return newState
}
