import * as ActionConstant from '@serge/config'
import 'whatwg-fetch'
import _ from 'lodash'

import * as wargamesApi from '../../api/wargames_api'
import { addNotification } from '../Notification/Notification_ActionCreators'
import { DEFAULT_SERVER, forceTemplate } from '../../consts'

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
    const iconLocation = await wargamesApi.saveIcon(file)
    const { path } = iconLocation || {}
    const iconPath = String(path).replace(/^\./g, '')
    dispatch(addIcon(iconPath))
  }
}

export const populateWargameStore = () => {
  return async (dispatch) => {
    dispatch(populatingDb(true))

    var wargameNames = await wargamesApi.populateWargame(dispatch)

    dispatch(saveAllWargameNames(wargameNames))

    dispatch(populatingDb(false))
  }
}

export const createNewWargameDB = () => {
  return async (dispatch) => {
    const wargame = await wargamesApi.createWargame(dispatch)

    const wargames = await wargamesApi.getAllWargames()

    dispatch(saveAllWargameNames(wargames))

    dispatch(setCurrentWargame(_.omit(wargame, ['_id', '_rev'])))
  }
}

export const clearWargames = () => {
  return async (dispatch) => {
    await wargamesApi.clearWargames()

    const wargames = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

export const deleteWargame = (name) => {
  return async (dispatch) => {
    await wargamesApi.deleteWargame(name)

    const wargames = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

export const editWargame = (name) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.editWargame(name)

    dispatch(setCurrentWargame(wargame))
  }
}

export const exportWargame = (name) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.exportWargame(name)

    dispatch(setExportWargame(wargame))
  }
}

export const refreshForce = (dbName, selectedForce) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.getWargameLocalFromName(dbName)

    const wargameIsInProgress = await wargamesApi.checkIfWargameStarted(dbName)

    if (wargameIsInProgress) {
      await wargamesApi.createLatestWargameRevision(dbName, wargame)
    }

    wargame.data.forces.selectedForce = selectedForce

    dispatch(setCurrentWargame(wargame))
  }
}

export const refreshChannel = (dbName, selectedChannel) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.getWargameLocalFromName(dbName)

    const wargameIsInProgress = await wargamesApi.checkIfWargameStarted(dbName)

    if (wargameIsInProgress) {
      await wargamesApi.createLatestWargameRevision(dbName, wargame)
    }

    wargame.data.channels.selectedChannel = selectedChannel

    dispatch(setCurrentWargame(wargame))
  }
}

export const saveWargameTitle = (dbName, title) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.updateWargameTitle(dbName, title)

    const wargames = await wargamesApi.getAllWargames()

    dispatch(saveAllWargameNames(wargames))

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Wargame name updated.', 'success'))
  }
}

export const saveSettings = (dbName, data) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.saveSettings(dbName, data)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification('Overview saved.', 'success'))
  }
}

export const savePlatformTypes = (dbName, data) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.savePlatformTypes(dbName, data)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification('Platform types saved.', 'success'))
  }
}

export const updateForces = (dbName, newData) => {
  return async (dispatch) => {
    await wargamesApi.saveForces(dbName, newData)
    const games = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(games))
  }
}

export const saveForce = (dbName, newName, newData, oldName) => {
  return async (dispatch, state) => {
    const oldForceData = state().wargame.data.forces.selectedForce
    if (newData.iconURL !== oldForceData.iconURL && newData.iconURL !== forceTemplate.iconURL) {
      const savedIconURL = await wargamesApi.saveIcon(newData.iconURL)
      newData.iconURL = savedIconURL.path
    }
    
    const wargame = await wargamesApi.saveForce(dbName, newName, newData, oldName)

    dispatch(setCurrentWargame(wargame))
    dispatch(setTabSaved())
    dispatch(setSelectedForce({ name: newName, uniqid: newData.uniqid, iconURL: newData.iconURL }))
    dispatch(addNotification('Force saved.', 'success'))
  }
}

export const saveChannel = (dbName, newName, newData, oldName) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.saveChannel(dbName, newName, newData, oldName)
    const selectedChannel = { name: newName, uniqid: newData.uniqid }
    dispatch(setSelectedChannel(selectedChannel))
    wargame.data.channels.selectedChannel = selectedChannel
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('channel saved.', 'success'))
  }
}

export const deleteSelectedChannel = (dbName, channel) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.deleteChannel(dbName, channel)

    if (channel === wargame.data.channels.selectedChannel.uniqid) {
      const selectedChannel = wargame.data.channels.channels[0]
      dispatch(setSelectedChannel(selectedChannel))
      wargame.data.channels.selectedChannel = selectedChannel
    }
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Channel deleted.', 'warning'))
  }
}

export const initiateWargame = (dbName) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.initiateGame(dbName)
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Wargame initiated. Note: change & `Save` overview, to inform player browsers', 'success'))
  }
}

export const duplicateChannel = (dbName, channel) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.duplicateChannel(dbName, channel)

    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Channel duplicated.', 'success'))
  }
}

export const deleteSelectedForce = (dbName, force) => {
  return async (dispatch) => {
    const wargame = await wargamesApi.deleteForce(dbName, force)

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Force deleted.', 'warning'))
  }
}

export const cleanWargame = (dbName) => {
  return async (dispatch) => {
    var games = await wargamesApi.cleanWargame(dbName)

    dispatch(saveAllWargameNames(games))
  }
}

export const duplicateWargame = (dbName) => {
  return async (dispatch) => {
    var games = await wargamesApi.duplicateWargame(dbName)

    dispatch(saveAllWargameNames(games))
  }
}

export const updateWargameVisible = dbName => {
  return async dispatch => {
    await wargamesApi.updateWargameVisible(dbName)
    const games = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(games))
  }
}
