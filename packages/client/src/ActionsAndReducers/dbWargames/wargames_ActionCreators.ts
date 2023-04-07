import * as ActionConstant from '@serge/config'
import 'whatwg-fetch'
import _ from 'lodash'

import * as wargamesApi from '../../api/wargames_api'
import { addNotification } from '../Notification/Notification_ActionCreators'
import { DEFAULT_SERVER, forceTemplate } from '../../consts'
import {
  ChannelTypes,
  ForceData,
  PlatformType,
  Role,
  Wargame,
  WargameActionTypes,
  WargameDispatch,
  WargameOverview,
  WargameRevision,
  IconOption,
  AnnotationMarkerData
} from '@serge/custom-types'

export const setCurrentTab = (tab: Notification): WargameActionTypes => ({
  type: ActionConstant.SET_CURRENT_GAME_SETUP_TAB,
  payload: tab
})

export const setGameData = (data: WargameOverview): WargameActionTypes => ({
  type: ActionConstant.SET_GAME_SETUP_DATA,
  payload: data
})

export const setTabSaved = (): WargameActionTypes => ({
  type: ActionConstant.SET_TAB_SAVED
})

export const setTabUnsaved = (): WargameActionTypes => ({
  type: ActionConstant.SET_TAB_UNSAVED
})

export const setSelectedForce = (selectedForce: { name: string, uniqid: string, iconURL?: string }): WargameActionTypes => ({
  type: ActionConstant.SET_SELECTED_FORCE,
  payload: selectedForce
})

export const addNewChannel = (data: { name: string, uniqid: string }): WargameActionTypes => ({
  type: ActionConstant.ADD_NEW_CHANNEL,
  payload: data
})

export const addNewForce = (data: { name: string, uniqid: string }): WargameActionTypes => ({
  type: ActionConstant.ADD_NEW_FORCE,
  payload: data
})

export const setForceColor = (hex: string): WargameActionTypes => ({
  type: ActionConstant.SET_FORCE_COLOR,
  payload: hex
})

export const setSelectedChannel = (selectedChannel: { name: string, uniqid: string }): WargameActionTypes => ({
  type: ActionConstant.SET_SELECTED_CHANNEL,
  payload: selectedChannel
})

const saveAllWargameNames = (names: WargameRevision[] | string | Wargame[]): WargameActionTypes => ({
  type: ActionConstant.ALL_WARGAME_NAMES_SAVED,
  payload: names
})

const setCurrentWargame = (data: Wargame): WargameActionTypes => ({
  type: ActionConstant.SET_CURRENT_WARGAME,
  payload: data
})

const setExportWargame = (data: Wargame): WargameActionTypes => ({
  type: ActionConstant.SET_EXPORT_WARGAME,
  payload: data
})

export const addRecipientToChannel = (data: { id: string, data: Wargame }): WargameActionTypes => ({
  type: ActionConstant.ADD_NEW_RECIPIENT,
  payload: data
})

export const updateRecipient = (id: string, data: Wargame): WargameActionTypes => ({
  type: ActionConstant.UPDATE_RECIPIENT,
  payload: { id, data }
})

export const removeRecipient = (id: string): WargameActionTypes => ({
  type: ActionConstant.REMOVE_RECIPIENT,
  payload: id
})

const populatingDb = (isLoading: boolean): WargameActionTypes => ({
  type: ActionConstant.POPULATE_WARGAMES_DB,
  payload: isLoading
})

export const addRole = (force: string, role: string): WargameActionTypes => ({
  type: ActionConstant.ADD_ROLE_TO_FORCE,
  payload: {
    force,
    role
  }
})

export const updateRole = (force: string, oldName: string, role: string): WargameActionTypes => ({
  type: ActionConstant.UPDATE_ROLE_NAME,
  payload: {
    force,
    oldName,
    role
  }
})

export const removeRole = (role: string): WargameActionTypes => ({
  type: ActionConstant.REMOVE_ROLE,
  payload: role
})

export const addIcon = (icon: string): WargameActionTypes => ({
  type: ActionConstant.ADD_ICON,
  payload: icon
})

export const loginAdmin = (): WargameActionTypes => ({
  type: ActionConstant.LOGIN_ADMIN
})

export const checkAdminAccess = (phrase: string) => {
  return (dispatch: WargameDispatch) => {
    if (phrase === DEFAULT_SERVER) {
      dispatch(loginAdmin())
    } else {
      dispatch(addNotification('Access code did not match', 'warning'))
    }
  }
}

export const saveIcon = (file: string) => {
  return async (dispatch: WargameDispatch) => {
    const iconLocation = await wargamesApi.saveIcon(file)
    const { path } = iconLocation || {}
    const iconPath = String(path).replace(/^\./g, '')
    dispatch(addIcon(iconPath))
  }
}

export const populateWargameStore = () => {
  return async (dispatch: WargameDispatch) => {
    dispatch(populatingDb(true))

    // @ts-ignore
    const wargameNames = await wargamesApi.populateWargame(dispatch)

    dispatch(saveAllWargameNames(wargameNames))

    dispatch(populatingDb(false))
  }
}

export const createNewWargameDB = () => {
  return async (dispatch: WargameDispatch) => {
    // @ts-ignore
    const wargame = await wargamesApi.createWargame(dispatch)

    const wargames = await wargamesApi.getAllWargames()

    dispatch(saveAllWargameNames(wargames))

    dispatch(setCurrentWargame(_.omit(wargame, ['_id', '_rev'])))
  }
}

export const clearWargames = () => {
  wargamesApi.clearWargames()
}

export const downloadAllWargames = () => {
  return async (dispatch: WargameDispatch) => {
    wargamesApi.downloadAllWargames()

    const wargames = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

// This function populates a wargame database with the given data and database name
export const populateWargame = (data: any, dbName: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = wargamesApi.postPopulateWargame(dbName, data)
    console.log('wargame', wargame)
    const wargames = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

export const downloadWargame = (dbPath: string) => {
  return async (dispatch: WargameDispatch) => {
    // This function allows a user to download a wargame database in zip format using the given database path as input.
    wargamesApi.downloadWargame(dbPath)
  }
}

export const deleteWargame = (name: string) => {
  return async (dispatch: WargameDispatch) => {
    wargamesApi.deleteWargame(name)

    const wargames = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(wargames))
  }
}

export const editWargame = (name: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.editWargame(name)

    dispatch(setCurrentWargame(wargame))
  }
}

export const exportWargame = (name: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.exportWargame(name)

    dispatch(setExportWargame(wargame))
  }
}

export const refreshForce = (dbName: string, selectedForce: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.getWargameLocalFromName(dbName)

    const wargameIsInProgress = await wargamesApi.checkIfWargameStarted(dbName)

    if (wargameIsInProgress) {
      await wargamesApi.createLatestWargameRevision(dbName, wargame)
    }

    wargame.data.forces.selectedForce = selectedForce

    dispatch(setCurrentWargame(wargame))
  }
}

export const refreshChannel = (dbName: string, selectedChannel: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.getWargameLocalFromName(dbName)

    const wargameIsInProgress = await wargamesApi.checkIfWargameStarted(dbName)

    if (wargameIsInProgress) {
      await wargamesApi.createLatestWargameRevision(dbName, wargame)
    }

    wargame.data.channels.selectedChannel = selectedChannel

    dispatch(setCurrentWargame(wargame))
  }
}

export const saveWargameTitle = (dbName: string, title: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.updateWargameTitle(dbName, title)

    const wargames = await wargamesApi.getAllWargames()

    dispatch(saveAllWargameNames(wargames))

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Wargame name updated.', 'success'))
  }
}

export const saveSettings = (dbName: string, data: WargameOverview) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.saveSettings(dbName, data)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification('Overview saved.', 'success'))
  }
}

export const deletePlatformType = (dbName: string, platformType: PlatformType) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.deletePlatformType(dbName, platformType)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification(`Platform type '${platformType.name}' deleted.`, 'success'))
  }
}

export const savePlatformTypes = (dbName: string, data: PlatformType) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.savePlatformTypes(dbName, data)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification('Platform types saved.', 'success'))
  }
}

export const saveAnnotation = (dbName: string, data: AnnotationMarkerData) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.saveAnnotation(dbName, data)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification('Annotation types saved.', 'success'))
  }
}

export const updateForces = (dbName: string, newData: ForceData[]) => {
  return async (dispatch: WargameDispatch) => {
    await wargamesApi.saveForces(dbName, newData)
    const games = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(games))
  }
}

export const updateForcesAndDeletePlatformType = (dbName: string, newData: ForceData[], platformType: PlatformType) => {
  return async (dispatch: WargameDispatch) => {
    if (newData.length) {
      await updateForces(dbName, newData)(dispatch)
    }
    await deletePlatformType(dbName, platformType)(dispatch)
  }
}

export const saveForce = (dbName: string, newData: ForceData) => {
  return async (dispatch: WargameDispatch, state: any) => {
    const oldForceData = state().wargame.data.forces.selectedForce
    if (newData.iconURL !== oldForceData.iconURL && newData.iconURL !== forceTemplate.iconURL) {
      const savedIconURL = await wargamesApi.saveIcon(newData.iconURL)
      newData.iconURL = savedIconURL.path
    }

    const wargame = await wargamesApi.saveForce(dbName, newData)

    dispatch(setCurrentWargame(wargame))
    dispatch(setTabSaved())
    dispatch(setSelectedForce({ name: newData.name, uniqid: newData.uniqid, iconURL: newData.iconURL }))
    dispatch(addNotification('Force saved.', 'success'))
  }
}

export const saveChannel = (dbName: string, newData: ChannelTypes) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.saveChannel(dbName, newData)
    const selectedChannel = { name: newData.name, uniqid: newData.uniqid }
    dispatch(setSelectedChannel(selectedChannel))
    wargame.data.channels.selectedChannel = selectedChannel.uniqid
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('channel saved.', 'success'))
  }
}

export const deleteSelectedChannel = (dbName: string, channel: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.deleteChannel(dbName, channel)

    if (channel === wargame.data.channels.selectedChannel) {
      const selectedChannel = wargame.data.channels.channels[0]
      dispatch(setSelectedChannel(selectedChannel))
      wargame.data.channels.selectedChannel = selectedChannel.uniqid
    }
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Channel deleted.', 'warning'))
  }
}

export const deleteSelectedAsset = (data: any) => {
  return async (dispatch: WargameDispatch) => {
    data.setList(data.item)
    dispatch(addNotification('Asset deleted.', 'warning'))
  }
}

export const deleteSelectedRole = (
  dbName: string,
  data: {
    roles: Role[],
    key: number,
    handleChange: (changedItems: Array<Role>) => void
  }
) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.deleteRolesParticipations(dbName, data.roles, data.key)
    _.isArray(wargame) ? await data.handleChange(wargame) : dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Role deleted.', 'warning'))
  }
}

export const initiateWargame = (dbName: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.initiateGame(dbName)
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Wargame initiated. Note: change & `Save` overview, to inform player browsers', 'success'))
  }
}

export const duplicateChannel = (dbName: string, channel: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.duplicateChannel(dbName, channel)

    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Channel duplicated.', 'success'))
  }
}

export const duplicatePlatformType = (dbName: string, platformType: PlatformType) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.duplicatePlatformType(dbName, platformType)

    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Platform type duplicated.', 'success'))
  }
}

export const duplicateForce = (dbName: string, force: ForceData) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.duplicateForce(dbName, force)

    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Force duplicated.', 'success'))
  }
}

export const deleteSelectedForce = (dbName: string, forceId: string) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.deleteForce(dbName, forceId)

    dispatch(setCurrentWargame(wargame))

    dispatch(addNotification('Force deleted.', 'warning'))
  }
}

export const cleanWargame = (dbName: string) => {
  return async (dispatch: WargameDispatch) => {
    var games = await wargamesApi.cleanWargame(dbName)

    dispatch(saveAllWargameNames(games))
  }
}

export const duplicateWargame = (dbName: string) => {
  return async (dispatch: WargameDispatch) => {
    var games = await wargamesApi.duplicateWargame(dbName)

    dispatch(saveAllWargameNames(games))
  }
}

export const updateWargameVisible = (dbName: string) => {
  return async (dispatch: WargameDispatch) => {
    await wargamesApi.updateWargameVisible(dbName)
    const games = await wargamesApi.getAllWargames()
    dispatch(saveAllWargameNames(games))
  }
}

export const deleteAnnotation = (dbName: string, annotation: IconOption) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.deleteAnnotation(dbName, annotation)

    dispatch(setCurrentWargame(wargame))

    dispatch(setTabSaved())

    dispatch(addNotification(`Annotation type '${annotation.name}' deleted.`, 'success'))
  }
}

export const duplicateAnnotation = (dbName: string, annotation: IconOption) => {
  return async (dispatch: WargameDispatch) => {
    const wargame = await wargamesApi.duplicateAnnotation(dbName, annotation)
    dispatch(setCurrentWargame(wargame))
    dispatch(addNotification('Annotation type duplicated.', 'success'))
  }
}
