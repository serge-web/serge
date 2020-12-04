import * as ActionConstant from '../ActionConstants'
import * as wargamesApi from '../../api/wargames_api'
import { addNotification } from '../Notification/Notification_ActionCreators'
import isError from '../../Helpers/isError'

import { Wargame, Role, PlayerUiMessageTypes, Message, PlayerDbMessageTypes } from '@serge/custom-types'
import {
  PlayerUiActionTypes
} from './types'

export const setCurrentWargame = (wargame: Wargame): PlayerUiActionTypes => ({
  type: ActionConstant.SET_CURRENT_WARGAME_PLAYER,
  payload: wargame
})

export const setForce = (forceName: string): PlayerUiActionTypes => ({
  type: ActionConstant.SET_FORCE,
  payload: forceName
})

export const setRole = (data: Role): PlayerUiActionTypes => ({
  type: ActionConstant.SET_ROLE,
  payload: data
})

export const setAllTemplates = (templates: Array<any>): PlayerUiActionTypes => ({
  type: ActionConstant.SET_ALL_TEMPLATES_PLAYERUI,
  payload: templates
})

export const showHideObjectives = (): PlayerUiActionTypes => ({
  type: ActionConstant.SHOW_HIDE_OBJECTIVES
})

export const setWargameFeedback = (messages: Array<PlayerUiMessageTypes>): PlayerUiActionTypes => ({
  type: ActionConstant.SET_FEEDBACK_MESSAGES,
  payload: messages
})

export const setLatestFeedbackMessage = (message: PlayerUiMessageTypes): PlayerUiActionTypes => ({
  type: ActionConstant.SET_LATEST_FEEDBACK_MESSAGE,
  payload: message
})
export const setLatestWargameMessage = (message: PlayerUiMessageTypes): PlayerUiActionTypes => ({
  type: ActionConstant.SET_LATEST_WARGAME_MESSAGE,
  payload: message
})
export const setWargameMessages = (messages: Array<PlayerDbMessageTypes>): PlayerUiActionTypes => ({
  type: ActionConstant.SET_ALL_MESSAGES,
  payload: messages
})
export const openMessage = (channel: string, message: Message): PlayerUiActionTypes => ({
  type: ActionConstant.OPEN_MESSAGE,
  payload: { channel, message }
})
export const closeMessage = (channel: string, message: Message): PlayerUiActionTypes => ({
  type: ActionConstant.CLOSE_MESSAGE,
  payload: { channel, message }
})

export const markAllAsRead = (channel: string): PlayerUiActionTypes => ({
  type: ActionConstant.MARK_ALL_AS_READ,
  payload: channel
})

export const openTour = (isOpen: boolean): PlayerUiActionTypes => ({
  type: ActionConstant.OPEN_TOUR,
  payload: isOpen
})
export const openModal = (modalName: string): PlayerUiActionTypes => ({
  type: ActionConstant.OPEN_MODAL,
  payload: modalName
})
export const closeModal = (): PlayerUiActionTypes => ({
  type: ActionConstant.CLOSE_MODAL
})

// @ts-ignore
export const startListening = (dbName) => {
  // @ts-ignore
  return (dispatch) => {
    wargamesApi.listenForWargameChanges(dbName, dispatch)
  }
}
// @ts-ignore
export const initiateGame = (dbName) => {
  // @ts-ignore
  return async (dispatch) => {
    const wargame = await wargamesApi.initiateGame(dbName)
    dispatch(setCurrentWargame(wargame))
  }
}
// @ts-ignore
export const getWargame = (gamePath) => {
  // @ts-ignore
  return async (dispatch) => {
    const wargame = await wargamesApi.getWargame(gamePath)
    if (isError(wargame)) {
      dispatch(addNotification('Serge disconnected', 'error'))
    } else {
      dispatch(setCurrentWargame(wargame))
    }
  }
}
// @ts-ignore
export const nextGameTurn = (dbName) => {
  return async () => {
    await wargamesApi.nextGameTurn(dbName)
  }
}
// @ts-ignore
export const sendFeedbackMessage = (dbName, fromDetails, message) => {
  // @ts-ignore
  return async (dispatch) => {
    await wargamesApi.postFeedback(dbName, fromDetails, message)
    dispatch(closeModal())
  }
}
// @ts-ignore
export const failedLoginFeedbackMessage = (dbName, password) => {
  return async () => {
    const address = await wargamesApi.getIpAddress()
    const from = {
      force: address.ip,
      forceColor: '#970000',
      role: '',
      name: password
    }
    await wargamesApi.postFeedback(dbName, from, 'A failed login attempt has been made.')
  }
}
// @ts-ignore
export const saveMessage = (dbName, details, message) => {
  return async () => {
    await wargamesApi.postNewMessage(dbName, details, message)
  }
}
// @ts-ignore
export const saveMapMessage = (dbName, details, message) => {
  return wargamesApi.postNewMapMessage(dbName, details, message)
}
// @ts-ignore
export const getAllWargameFeedback = (dbName) => {
  // @ts-ignore
  return async (dispatch) => {
    let messages = await wargamesApi.getAllMessages(dbName)
    // @ts-ignore
    messages = messages.filter((message) => message.hasOwnProperty('feedback'))
    dispatch(setWargameFeedback(messages))
  }
}
// @ts-ignore
export const getAllWargameMessages = (name) => {
  // @ts-ignore
  return async (dispatch) => {
    const allMessages = await wargamesApi.getAllMessages(name); let messages; let feedback
    // @ts-ignore
    messages = allMessages.filter((message) => !message.hasOwnProperty('feedback'))
    // @ts-ignore
    feedback = allMessages.filter((message) => message.hasOwnProperty('feedback'))
    await dispatch(setWargameMessages(messages))
    await dispatch(setWargameFeedback(feedback))
  }
}
