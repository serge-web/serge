import { isError } from '@serge/helpers'

import ActionConstant from '../constants'

import {
  listenForWargameChanges,
  postFeedback,
  getIpAddress,
  postNewMessage,
  postNewMapMessage,
  getAllMessages
} from '../api/wargames'

import { addNotification } from '../actions/notification'

export const setCurrentWargame = (data) => ({
  type: ActionConstant.SET_CURRENT_WARGAME_PLAYER,
  payload: data
})

export const setForce = (data) => ({
  type: ActionConstant.SET_FORCE,
  payload: data
})

export const showHideObjectives = () => ({
  type: ActionConstant.SHOW_HIDE_OBJECTIVES
})

export const setRole = (data) => ({
  type: ActionConstant.SET_ROLE,
  payload: data
})

export const setWargameFeedback = (messages) => ({
  type: ActionConstant.SET_FEEDBACK_MESSAGES,
  payload: messages
})

export const setLatestFeedbackMessage = (message) => ({
  type: ActionConstant.SET_LATEST_FEEDBACK_MESSAGE,
  payload: message
})

export const setLatestWargameMessage = (message) => ({
  type: ActionConstant.SET_LATEST_WARGAME_MESSAGE,
  payload: message
})

export const setWargameMessages = (messages) => ({
  type: ActionConstant.SET_ALL_MESSAGES,
  payload: messages
})

export const openMessage = (channel, message) => ({
  type: ActionConstant.OPEN_MESSAGE,
  payload: { channel, message }
})

export const closeMessage = (channel, message) => ({
  type: ActionConstant.CLOSE_MESSAGE,
  payload: { channel, message }
})

export const setAllTemplates = (templates) => ({
  type: ActionConstant.SET_ALL_TEMPLATES_PLAYERUI,
  payload: templates
})

export const markAllAsRead = (channel) => ({
  type: ActionConstant.MARK_ALL_AS_READ,
  channel
})

export const openTour = (isOpen) => ({
  type: ActionConstant.OPEN_TOUR,
  isOpen
})

export const openModal = (modalName) => ({
  type: ActionConstant.OPEN_MODAL,
  modalName
})

export const closeModal = () => ({
  type: ActionConstant.CLOSE_MODAL
})

export const startListening = (dbName) => {
  return (dispatch) => {
    listenForWargameChanges(dbName, dispatch)
  }
}

export const initiateGame = (dbName) => {
  return async (dispatch) => {
    const wargame = await initiateGame(dbName)
    dispatch(setCurrentWargame(wargame))
  }
}

export const getWargame = (gamePath) => {
  return async (dispatch) => {
    const wargame = await getWargame(gamePath)
    if (isError(wargame)) {
      dispatch(addNotification('Serge disconnected', 'error'))
    } else {
      dispatch(setCurrentWargame(wargame))
    }
  }
}

export const nextGameTurn = (dbName) => {
  return async () => {
    await nextGameTurn(dbName)
  }
}

export const sendFeedbackMessage = (dbName, fromDetails, message) => {
  return async (dispatch) => {
    await postFeedback(dbName, fromDetails, message)
    dispatch(closeModal())
  }
}

export const failedLoginFeedbackMessage = (dbName, password) => {
  return async () => {
    const address = await getIpAddress()
    const from = {
      force: address.ip,
      forceColor: '#970000',
      role: '',
      name: password
    }
    await postFeedback(dbName, from, 'A failed login attempt has been made.')
  }
}

export const saveMessage = (dbName, details, message) => {
  return async () => {
    await postNewMessage(dbName, details, message)
  }
}

export const saveMapMessage = (dbName, details, message) => {
  return postNewMapMessage(dbName, details, message)
}

export const getAllWargameFeedback = (dbName) => {
  return async (dispatch) => {
    let messages = await getAllMessages(dbName)
    messages = messages.filter((message) => message.hasOwnProperty('feedback'))
    dispatch(setWargameFeedback(messages))
  }
}

export const getAllWargameMessages = (name) => {
  return async (dispatch) => {
    const allMessages = await getAllMessages(name); let messages; let feedback
    messages = allMessages.filter((message) => !message.hasOwnProperty('feedback'))
    feedback = allMessages.filter((message) => message.hasOwnProperty('feedback'))
    await dispatch(setWargameMessages(messages))
    await dispatch(setWargameFeedback(feedback))
  }
}
