import 'whatwg-fetch'
import _ from 'lodash'

import { DEFAULT_SERVER } from '@serge/config'

import {
  populateWargame,
  createWargame,
  getWargameLocalFromName,
  checkIfWargameStarted,
  createLatestWargameRevision,
  updateWargameTitle,
  getAllWargames,
  deleteChannel,
  deleteForce,
  saveSettings as commitSaveSettings,
  clearWargames as commitClearWargames,
  duplicateWargame as commitDuplicateWargame,
  saveChannel as commitSaveChannel,
  exportWargame as commitExportWargame,
  deleteWargame as commitDeleteWargame,
  editWargame as commitEditWargame,
  duplicateChannel as commitDuplicateChannel,
  saveForce as commitSaveForce,
  cleanWargame as commitCleanWargame,
  saveIcon as commitSaveIcon
} from '../api/wargames'

import { addNotification } from '../actions/notification'

import ActionConstant from '../constants'

export const setCurrentTab = (tab) => ({
  type: ActionConstant.SET_CURRENT_GAME_SETUP_TAB,
  payload: tab
})

export const setGameData = (data) => ({
  type: ActionConstant.SET_GAME_SETUP_DATA,
  payload: data
})

export const setTabSaved = () => ({
  type: ActionConstant.SET_TAB_SAVED
})

export const setTabUnsaved = () => ({
  type: ActionConstant.SET_TAB_UNSAVED
})

export const setSelectedForce = (payload) => ({
  type: ActionConstant.SET_SELECTED_FORCE,
  payload
})

export const addNewChannel = (data) => ({
  type: ActionConstant.ADD_NEW_CHANNEL,
  payload: data
})

export const addNewForce = (data) => ({
  type: ActionConstant.ADD_NEW_FORCE,
  payload: data
})

export const setForceColor = (hex) => ({
  type: ActionConstant.SET_FORCE_COLOR,
  payload: hex
})

export const setSelectedChannel = (payload) => ({
  type: ActionConstant.SET_SELECTED_CHANNEL,
  payload
})

const saveAllWargameNames = (names) => ({
  type: ActionConstant.ALL_WARGAME_NAMES_SAVED,
  payload: names
})

const setCurrentWargame = (data) => ({
  type: ActionConstant.SET_CURRENT_WARGAME,
  payload: data
})

const setExportWargame = (data) => ({
  type: ActionConstant.SET_EXPORT_WARGAME,
  payload: data
})

export const addRecipientToChannel = (data) => ({
  type: ActionConstant.ADD_NEW_RECIPIENT,
  payload: data
})

export const updateRecipient = (id, data) => ({
  type: ActionConstant.UPDATE_RECIPIENT,
  payload: { id, data }
})

export const removeRecipient = (id) => ({
  type: ActionConstant.REMOVE_RECIPIENT,
  payload: id
})

const populatingDb = (isLoading) => ({
  type: ActionConstant.POPULATE_WARGAMES_DB,
  isLoading
})

export const addRole = (force, role) => ({
  type: ActionConstant.ADD_ROLE_TO_FORCE,
  payload: {
    force,
    role
  }
})

export const updateRole = (force, oldName, role) => ({
  type: ActionConstant.UPDATE_ROLE_NAME,
  payload: {
    force,
    oldName,
    role
  }
})

export const removeRole = (role) => ({
  type: ActionConstant.REMOVE_ROLE,
  role
})

export const addIcon = (icon) => ({
  type: ActionConstant.ADD_ICON,
  icon
})

export const loginAdmin = () => ({
  type: ActionConstant.LOGIN_ADMIN
})

export const checkAdminAccess = (phrase) => {
  return (dispatch) => {
    if (phrase === DEFAULT_SERVER) {
      dispatch(loginAdmin())
    } else {
      dispatch(addNotification('Access code did not match', 'warning'))
    }
  }
}

export const saveIcon = (file) => {
  return async (dispatch) => {
    const iconLocation = await commitSaveIcon(file)
    const { path } = iconLocation
    const iconPath = String(path).replace(/^\./g, '')
    dispatch(addIcon(iconPath))
  }
}

export const populateWargameStore = () => {
  return async (dispatch) => {
    dispatch(populatingDb(true))

    var wargameNames = await populateWargame(dispatch)

    dispatch(saveAllWargameNames(wargameNames))

    dispatch(populatingDb(false))
  }
}

export const createNewWargameDB = () => {
  return async (dispatch) => {
    const wargame = await createWargame(dispatch)

    const wargames = await getAllWargames()

    dispatch(saveAllWargameNames(wargames))

    dispatch(setCurrentWargame(_.omit(wargame, ['_id', '_rev'])))
  }
}

export const clearWargames = () => {
  return async (dispatch) => {
    commitClearWargames()

    const wargames = await getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

export const deleteWargame = (name) => {
  return async (dispatch) => {
    commitDeleteWargame(name)

    const wargames = await getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

export const editWargame = (name) => {
  return async (dispatch) => {
    const wargame = await commitEditWargame(name)

    dispatch(setCurrentWargame(wargame))
  }
}

export const exportWargame = (name) => {
  return async (dispatch) => {
    const wargame = await commitExportWargame(name)

    dispatch(setExportWargame(wargame))
  }
}

export const refreshForce = (dbName, selectedForce) => {
  return async (dispatch) => {
    const wargame = await getWargameLocalFromName(dbName)

    const wargameIsInProgress = await checkIfWargameStarted(dbName)

    if (wargameIsInProgress) {
      await createLatestWargameRevision(dbName, wargame)
    }

    wargame.data.forces.selectedForce = selectedForce

    dispatch(setCurrentWargame(wargame))
  }
}

export const refreshChannel = (dbName, selectedChannel) => {
  return async (dispatch) => {
    const wargame = await getWargameLocalFromName(dbName)

    const wargameIsInProgress = await checkIfWargameStarted(dbName)

    if (wargameIsInProgress) {
      await createLatestWargameRevision(dbName, wargame)
    }

    wargame.data.channels.selectedChannel = selectedChannel

    dispatch(setCurrentWargame(wargame))
  }
}

export const saveWargameTitle = (dbName, title) => {
  return async (dispatch) => {
    const wargame = await updateWargameTitle(dbName, title)

    const wargames = await getAllWargames()

    dispatch(saveAllWargameNames(wargames))

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Wargame name updated.', 'success'))
  }
}

export const saveSettings = (dbName, data) => {
  return async (dispatch) => {
    const wargame = await commitSaveSettings(dbName, data)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification('Overview saved.', 'success'))
  }
}

export const saveForce = (dbName, newName, newData, oldName) => {
  return async (dispatch) => {
    const wargame = await commitSaveForce(dbName, newName, newData, oldName)

    dispatch(setCurrentWargame(wargame))
    dispatch(setTabSaved())
    dispatch(setSelectedForce({ name: newName, uniqid: newData.uniqid }))

    dispatch(addNotification('Force saved.', 'success'))
  }
}

export const saveChannel = (dbName, newName, newData, oldName) => {
  return async (dispatch) => {
    const wargame = await commitSaveChannel(dbName, newName, newData, oldName)

    dispatch(setCurrentWargame(wargame))
    dispatch(setSelectedChannel({ name: newName, uniqid: newData.uniqid }))

    dispatch(addNotification('channel saved.', 'success'))
  }
}

export const deleteSelectedChannel = (dbName, channel) => {
  return async (dispatch) => {
    const wargame = await deleteChannel(dbName, channel)

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Channel deleted.', 'warning'))
  }
}

export const duplicateChannel = (dbName, channel) => {
  return async (dispatch) => {
    const wargame = await commitDuplicateChannel(dbName, channel)

    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Channel duplicated.', 'success'))
  }
}

export const deleteSelectedForce = (dbName, force) => {
  return async (dispatch) => {
    const wargame = await deleteForce(dbName, force)

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Force deleted.', 'warning'))
  }
}

export const cleanWargame = (dbName) => {
  return async (dispatch) => {
    var games = await commitCleanWargame(dbName)

    dispatch(saveAllWargameNames(games))
  }
}

export const duplicateWargame = (dbName) => {
  return async (dispatch) => {
    var games = await commitDuplicateWargame(dbName)

    dispatch(saveAllWargameNames(games))
  }
}
