import { Dispatch } from 'react'
import { 
  ADD_ICON,
  ADD_NEW_CHANNEL,
  ADD_NEW_FORCE,
  ADD_NEW_RECIPIENT,
  ADD_NOTIFICATION,
  ADD_ROLE_TO_FORCE,
  ALL_WARGAME_NAMES_SAVED,
  DELETE_SELECTED_CHANNEL,
  LOGIN_ADMIN,
  POPULATE_WARGAMES_DB,
  REMOVE_RECIPIENT,
  REMOVE_ROLE,
  SET_CURRENT_GAME_SETUP_TAB,
  SET_CURRENT_WARGAME,
  SET_EXPORT_WARGAME,
  SET_FORCE_COLOR,
  SET_GAME_SETUP_DATA,
  SET_SELECTED_CHANNEL,
  SET_SELECTED_FORCE,
  SET_TAB_SAVED,
  SET_TAB_UNSAVED,
  UPDATE_RECIPIENT,
  UPDATE_ROLE_NAME
} from 'src/config'
import Wargame from './wargame'
// import ForceData from './force-data'
// import { ChannelTypes } from './channel-data'
import WargameOverview from './wargame-overview'

export interface WargameRevision {
    name: string
    title: string
    initiated: boolean
    shortName: string
}

export interface AllWargameNameSaved {
    type: typeof ALL_WARGAME_NAMES_SAVED
    payload: WargameRevision[] | string | Wargame[]
}

interface SetCurrentWargame {
    type: typeof SET_CURRENT_WARGAME | typeof SET_EXPORT_WARGAME
    payload: Wargame
}

interface SetCurrentGameSetupTab {
    type: typeof SET_CURRENT_GAME_SETUP_TAB 
    payload: string
}

interface SetGameSetupData {
    type: typeof SET_GAME_SETUP_DATA
    payload: Notification | WargameOverview
}

interface SetTabSaved {
    type: typeof SET_TAB_SAVED | typeof SET_TAB_UNSAVED
    payload?: boolean
}

interface AddNewForce {
    type: typeof ADD_NEW_FORCE
    payload: { name: string, uniqid: string }
}

interface SetForceColor {
    type: typeof SET_FORCE_COLOR
    payload: string
}

interface SetSelectedForce {
    type: typeof SET_SELECTED_FORCE
    payload: { name: string, uniqid: string, iconURL?: string }
}

interface AddNewChannel {
    type: typeof ADD_NEW_CHANNEL
    payload: { name: string, uniqid: string }
}

interface SetSelectedChannel {
    type: typeof SET_SELECTED_CHANNEL | typeof DELETE_SELECTED_CHANNEL
    payload: { name: string, uniqid: string }
}

interface AddNewRecipient {
    type: typeof ADD_NEW_RECIPIENT | typeof UPDATE_RECIPIENT
    payload: { id: string, data: Wargame }
}

interface RemoveRecipient {
    type: typeof REMOVE_RECIPIENT
    payload: string
}

interface AddRoleToForce {
    type: typeof ADD_ROLE_TO_FORCE | typeof UPDATE_ROLE_NAME
    payload: { 
        force?: string
        role?: string
        oldName?: string
    }
}

interface RemoveRoleFromForce {
    type: typeof REMOVE_ROLE
    payload: string
}

interface AddIcon {
    type: typeof ADD_ICON
    payload: string
}

interface LoginAdmin {
    type: typeof LOGIN_ADMIN
}

interface PopulatingDb {
    type: typeof POPULATE_WARGAMES_DB
    payload: boolean
}

interface AddNotification {
    type: typeof ADD_NOTIFICATION
}

export type WargameActionTypes = AllWargameNameSaved |
SetCurrentWargame |
SetCurrentGameSetupTab |
SetGameSetupData |
SetTabSaved |
AddNewForce |
SetForceColor |
SetSelectedForce |
AddNewChannel |
SetSelectedChannel |
AddNewRecipient |
RemoveRecipient |
AddRoleToForce |
AddIcon |
LoginAdmin |
PopulatingDb |
RemoveRoleFromForce | 
AddNotification

export type WargameDispatch = Dispatch<WargameActionTypes>
