import React from 'react'
import {
  SET_CURRENT_WARGAME_PLAYER,
  SET_FORCE,
  SET_ROLE,
  SET_ALL_TEMPLATES_PLAYERUI,
  SHOW_HIDE_OBJECTIVES,
  SET_FEEDBACK_MESSAGES,
  SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE,
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  MARK_UNREAD,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ,
  OPEN_TOUR,
  OPEN_MODAL,
  CLOSE_MODAL
} from '@serge/config'
import * as wargamesApi from '../../api/wargames_api'
import { addNotification } from '../Notification/Notification_ActionCreators'
import isError from '../../Helpers/isError'
import { FEEDBACK_MESSAGE } from '@serge/config'
import {
  Wargame,
  Role,
  Message,
  MessageDetails,
  MessageFeedback,
  MessageChannel,
  MessageCustom,
  MessageInfoType,
  MessageDetailsFrom
} from '@serge/custom-types'
import { PlayerUiActionTypes } from '@serge/custom-types'

export const setCurrentWargame = (wargame: Wargame): PlayerUiActionTypes => ({
  type: SET_CURRENT_WARGAME_PLAYER,
  payload: wargame
})

export const setForce = (forceName: string): PlayerUiActionTypes => ({
  type: SET_FORCE,
  payload: forceName
})

export const setRole = (data: Role): PlayerUiActionTypes => ({
  type: SET_ROLE,
  payload: data
})

export const setAllTemplates = (templates: Array<any>): PlayerUiActionTypes => ({
  type: SET_ALL_TEMPLATES_PLAYERUI,
  payload: templates
})

export const showHideObjectives = (): PlayerUiActionTypes => ({
  type: SHOW_HIDE_OBJECTIVES
})

export const setWargameFeedback = (messages: MessageFeedback[]): PlayerUiActionTypes => ({
  type: SET_FEEDBACK_MESSAGES,
  payload: messages
})

export const setLatestFeedbackMessage = (message: MessageFeedback): PlayerUiActionTypes => ({
  type: SET_LATEST_FEEDBACK_MESSAGE,
  payload: message
})
export const setLatestWargameMessage = (message: MessageChannel): PlayerUiActionTypes => ({
  type: SET_LATEST_WARGAME_MESSAGE,
  payload: message
})
export const setWargameMessages = (messages: Array<MessageCustom | MessageInfoType>): PlayerUiActionTypes => ({
  type: SET_ALL_MESSAGES,
  payload: messages
})
export const openMessage = (channel: string, message: MessageChannel): PlayerUiActionTypes => ({
  type: OPEN_MESSAGE,
  payload: { channel, message }
})
export const markUnread = (channel: string, message: MessageChannel): PlayerUiActionTypes => ({
  type: MARK_UNREAD,
  payload: { channel, message }
})
export const closeMessage = (channel: string, message: MessageChannel): PlayerUiActionTypes => ({
  type: CLOSE_MESSAGE,
  payload: { channel, message }
})

export const markAllAsRead = (channel: string): PlayerUiActionTypes => ({
  type: MARK_ALL_AS_READ,
  payload: channel
})

export const openTour = (isOpen: boolean): PlayerUiActionTypes => ({
  type: OPEN_TOUR,
  payload: isOpen
})

export const openModal = (modalName: string): PlayerUiActionTypes => ({
  type: OPEN_MODAL,
  payload: modalName
})
export const closeModal = (): PlayerUiActionTypes => ({
  type: CLOSE_MODAL
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

export const sendFeedbackMessage = (dbName: string, fromDetails: MessageDetailsFrom, message: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    await wargamesApi.postFeedback(dbName, fromDetails, message)
    dispatch(closeModal())
  }
}

export const failedLoginFeedbackMessage = (dbName: string, password: string): Function => {
  return async (): Promise<void> => {
    const address = await wargamesApi.getIpAddress()
    const from: MessageDetailsFrom = {
      force: address.ip,
      iconURL: '',
      forceColor: '#970000',
      roleName: '',
      roleId: '',
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

export const saveMapMessage = (dbName: string, details: MessageDetails, message: unknown): Promise<Message> => {
  // @ts-ignore
  return wargamesApi.postNewMapMessage(dbName, details, message)
}

export const getAllWargameFeedback = (dbName: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const messages: Array<Message> = await wargamesApi.getAllMessages(dbName)
    const feedbackMessages: MessageFeedback[] = messages.filter(({ messageType }) => messageType === FEEDBACK_MESSAGE) as MessageFeedback[]
    dispatch(setWargameFeedback(feedbackMessages))
  }
}

export const getAllWargameMessages = (dbName: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const allMessages: Array<Message> = await wargamesApi.getAllMessages(dbName)
    dispatch(setWargameMessages(allMessages.filter(({ messageType }) => messageType !== FEEDBACK_MESSAGE) as (MessageInfoType | MessageCustom)[]))
    dispatch(setWargameFeedback(allMessages.filter(({ messageType }) => messageType === FEEDBACK_MESSAGE) as MessageFeedback[]))
  }
}
