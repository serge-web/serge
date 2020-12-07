import React from 'react'
import * as ActionConstant from '../ActionConstants'
import * as wargamesApi from '../../api/wargames_api'
import { addNotification } from '../Notification/Notification_ActionCreators'
import isError from '../../Helpers/isError'

import { Wargame, Role, PlayerUiMessageTypes, Message, MessageDetails, PlayerDbMessageTypes } from '@serge/custom-types'
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

export const startListening = (dbName: string): Function => {
  return (dispatch: React.Dispatch<PlayerUiActionTypes>): void => {
    wargamesApi.listenForWargameChanges(dbName, dispatch)
  }
}

export const initiateGame = (dbName: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const wargame = await wargamesApi.initiateGame(dbName)
    dispatch(setCurrentWargame(wargame))
  }
}
export const getWargame = (gamePath: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const wargame = await wargamesApi.getWargame(gamePath)
    if (isError(wargame)) {
      // @ts-ignore
      dispatch(addNotification('Serge disconnected', 'error'))
    } else {
      dispatch(setCurrentWargame(wargame))
    }
  }
}
export const nextGameTurn = (dbName: string): Function => {
  return async (): Promise<void> => {
    await wargamesApi.nextGameTurn(dbName)
  }
}

// TODO: fromDetails check type
export const sendFeedbackMessage = (dbName: string, fromDetails: any, message: PlayerUiMessageTypes): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    await wargamesApi.postFeedback(dbName, fromDetails, message)
    dispatch(closeModal())
  }
}

export const failedLoginFeedbackMessage = (dbName: string, password: string): Function => {
  return async (): Promise<void> => {
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

export const saveMessage = (dbName: string, details: MessageDetails, message: object): Function => {
  return async (): Promise<void> => {
    await wargamesApi.postNewMessage(dbName, details, message)
  }
}

export const saveMapMessage = (dbName: string, details: MessageDetails, message: object): Promise<Message> => {
  return wargamesApi.postNewMapMessage(dbName, details, message)
}

export const getAllWargameFeedback = (dbName: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const messages: Array<Message> = await wargamesApi.getAllMessages(dbName)
    const feedbackMessages = messages.filter(({ feedback }) => feedback)
    dispatch(setWargameFeedback(feedbackMessages))
  }
}

export const getAllWargameMessages = (dbName: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const allMessages: Array<Message> = await wargamesApi.getAllMessages(dbName);
    dispatch(setWargameMessages(allMessages.filter(({ feedback }) => !feedback)))
    dispatch(setWargameFeedback(allMessages.filter(({ feedback }) => feedback)))
  }
}
