/* eslint-disable @typescript-eslint/ban-types */
import {
  CLOSE_MESSAGE, CLOSE_MODAL, FEEDBACK_MESSAGE, MARK_ALL_AS_READ, MARK_ALL_AS_UNREAD, MARK_UNREAD, OPEN_MESSAGE, OPEN_MODAL, OPEN_TOUR, SET_ALL_MESSAGES, SET_ALL_TEMPLATES_PLAYERUI, SET_CURRENT_WARGAME_PLAYER, SET_FEEDBACK_MESSAGES, SET_FORCE, SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE, SET_ROLE, SHOW_HIDE_OBJECTIVES, UPDATE_MESSAGE_STATE
} from 'src/config'
import React from 'react'
import * as wargamesApi from '../../api/wargames_api'
import isError from '../../Helpers/isError'
import { addNotification } from '../Notification/Notification_ActionCreators'

import { ChatMessage, MappingMessage, Message, MessageChannel, MessageCustom, MessageDetails, MessageDetailsFrom, MessageFeedback, MessageInfoType, PlayerUiActionTypes, Role, TemplateBodysByKey, Wargame } from 'src/custom-types'

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

export const setAllTemplates = (templatesByKey: TemplateBodysByKey): PlayerUiActionTypes => ({
  type: SET_ALL_TEMPLATES_PLAYERUI,
  payload: templatesByKey
})

export const showHideObjectives = (): PlayerUiActionTypes => ({
  type: SHOW_HIDE_OBJECTIVES
})

export const updateMessageState = (state: boolean): PlayerUiActionTypes => ({
  type: UPDATE_MESSAGE_STATE,
  payload: state
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
export const markUnread = (channel: string, message: MessageChannel | ChatMessage): PlayerUiActionTypes => ({
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

export const markAllAsUnread = (channel: string): PlayerUiActionTypes => ({
  type: MARK_ALL_AS_UNREAD,
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

export const sendFeedbackMessage = (dbName: string, fromDetails: MessageDetailsFrom, message: string, turnNumber: number): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    await wargamesApi.postFeedback(dbName, fromDetails, turnNumber, message)
    dispatch(closeModal())
  }
}

export const sendMappingMessage = (dbName: string, details: MessageDetails, message: MappingMessage): void => {
  wargamesApi.postMappingMessage(dbName, details, message)
}

export const failedLoginFeedbackMessage = (dbName: string, password: string, turnNumber: number): Function => {
  return async (): Promise<void> => {
    const address = await wargamesApi.getIpAddress()
    const from: MessageDetailsFrom = {
      force: address.ip,
      forceId: 'n/a',
      iconURL: '',
      forceColor: '#970000',
      roleId: '',
      roleName: '',
      name: password
    }
    await wargamesApi.postFeedback(dbName, from, turnNumber, 'A failed login attempt has been made.')
  }
}

export const saveMessage = (dbName: string, details: MessageDetails, message: object): Function => {
  return async (): Promise<void> => {
    // the following block of commented out code was used in the past
    // to generate bulk volumes of test data, by repeatedly submitting
    // the provided message, with id/ref changed each time
    //
    // const bulkSubmit = false
    // if (bulkSubmit) {
    //   const msg1 = message as any
    //   const title = msg1.Title
    //   const randomId = Math.floor(Math.random() * 100)
    //   for (let i = 0; i < 200; i++) {
    //     // timestamps can be used for ids, so ensure timestamps are unique.
    //     const time = details.timestamp
    //     const trimmedTime = time.substr(0, time.length - 4)
    //     const newTime = trimmedTime + (100 + i) + `Z`
    //     details.timestamp = newTime
    //     const msg = message as any
    //     // create unique title
    //     msg.Title = title + '-' + i
    //     // create unique message reference
    //     msg.Reference = `Blue_c-` + randomId + '-' + i
    //     // actually post the message
    //     await wargamesApi.postNewMessage(dbName, details, message)
    //   }
    // } else {
    // actually post the message
    await wargamesApi.postNewMessage(dbName, details, message)
  }
}

/** get all messages (documents) from the database (except counter messages) */
export const getAllWargameMessages = (dbName: string): Function => {
  return async (dispatch: React.Dispatch<PlayerUiActionTypes>): Promise<void> => {
    const allMessages: Array<Message | Wargame> = await wargamesApi.getAllMessages(dbName)
    dispatch(setWargameMessages(allMessages.filter(({ messageType }) => messageType !== FEEDBACK_MESSAGE) as (MessageInfoType | MessageCustom)[]))
    dispatch(setWargameFeedback(allMessages.filter(({ messageType }) => messageType === FEEDBACK_MESSAGE) as MessageFeedback[]))
  }
}
