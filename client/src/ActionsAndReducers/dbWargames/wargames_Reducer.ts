import * as ActionConstant from 'src/config'
import copyState from '../../Helpers/copyStateHelper'
import * as wargamesHandlers from './helpers/wargamesHandlers'
import { dbDefaultSettings } from 'src/config'
import { 
  WargamesState, WargameActionTypes, AllWargameNameSaved, SetCurrentWargame, SetGameSetupData, AddNewRecipient, RemoveRecipient, ActionHandler,
  SetCurrentGameSetupTab, AddNewForce, SetForceColor, AddNewChannel, SetSelectedChannel, AddRoleToForce, RemoveRoleFromForce, AddIcon, SetSelectedForce
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

// Define an object to map action types to their corresponding handlers
// Each property in the handlers object is a key-value pair where:
// - The key is the action type, obtained from ActionConstant.
// - The value is a function (handler) that takes the current state, the action, and a tab as parameters.
// functions is responsible for updating the state
const handlers: Record<string, ActionHandler> = {
  [ActionConstant.ALL_WARGAME_NAMES_SAVED]: (newState, action) => wargamesHandlers.handleAllWargameNamesSaved(newState, (action as AllWargameNameSaved).payload),
  [ActionConstant.SET_CURRENT_WARGAME]: (newState, action) => wargamesHandlers.handleSetCurrentWargame(newState, (action as SetCurrentWargame).payload),
  [ActionConstant.SET_EXPORT_WARGAME]: (newState, action) => wargamesHandlers.handleSetExportWargame(newState, (action as SetCurrentWargame).payload),
  [ActionConstant.SET_CURRENT_GAME_SETUP_TAB]: (newState, action) => wargamesHandlers.handleSetCurrentGameSetupTab(newState, (action as SetCurrentGameSetupTab).payload),
  [ActionConstant.SET_GAME_SETUP_DATA]: (newState, action, tab) => wargamesHandlers.handleSetGameSetupData(newState, (action as SetGameSetupData).payload, tab),
  [ActionConstant.ADD_NEW_FORCE]: (newState, action, tab) => wargamesHandlers.handleAddNewForce(newState, (action as AddNewForce).payload, tab),
  [ActionConstant.SET_FORCE_COLOR]: (newState, action, tab) => wargamesHandlers.handleSetForceColor(newState, (action as SetForceColor).payload, tab),
  [ActionConstant.SET_SELECTED_FORCE]: (newState, action) => wargamesHandlers.handleSetSelectedForce(newState, (action as SetSelectedForce).payload),
  [ActionConstant.ADD_NEW_CHANNEL]: (newState, action, tab) => wargamesHandlers.handleAddNewChannel(newState, (action as AddNewChannel).payload, tab),
  [ActionConstant.SET_SELECTED_CHANNEL]: (newState, action, tab) => wargamesHandlers.handleSetSelectedChannel(newState, (action as SetSelectedChannel).payload, tab),
  [ActionConstant.DELETE_SELECTED_CHANNEL]: (newState, action, tab) => wargamesHandlers.handleDeleteSelectedChannel(newState, (action as SetSelectedChannel).payload, tab),
  [ActionConstant.ADD_NEW_RECIPIENT]: (newState, action, tab) => wargamesHandlers.handleAddNewRecipient(newState, (action as AddNewRecipient).payload, tab),
  [ActionConstant.UPDATE_RECIPIENT]: (newState, action, tab) => wargamesHandlers.handleUpdateRecipient(newState, (action as AddNewRecipient).payload, tab),
  [ActionConstant.REMOVE_RECIPIENT]: (newState, action, tab) => wargamesHandlers.handleRemoveRecipient(newState, (action as RemoveRecipient).payload, tab),
  [ActionConstant.ADD_ROLE_TO_FORCE]: (newState, action, tab) => wargamesHandlers.handleAddRoleToForce(newState, (action as AddRoleToForce).payload, tab),
  [ActionConstant.UPDATE_ROLE_NAME]: (newState, action, tab) => wargamesHandlers.handleUpdateRoleName(newState, (action as AddRoleToForce).payload, tab),
  [ActionConstant.REMOVE_ROLE]: (newState, action, tab) => wargamesHandlers.handleRemoveRole(newState, (action as RemoveRoleFromForce).payload, tab),
  [ActionConstant.ADD_ICON]: (newState, action, tab) => wargamesHandlers.handleAddIcon(newState, (action as AddIcon).payload, tab),
  [ActionConstant.LOGIN_ADMIN]: (newState) => { newState.adminNotLoggedIn = false },
  [ActionConstant.SET_TAB_SAVED]: (newState, _, tab) => { newState.data[tab].dirty = false },
  [ActionConstant.SET_TAB_UNSAVED]: (newState, _, tab) => { newState.data[tab].dirty = true }
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
