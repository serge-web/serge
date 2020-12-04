import reducer, { initialState } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { PlayerUi } from '../../../ActionsAndReducers/playerUi/types'
import { PlayerDbMessageTypes } from '@serge/custom-types'

// data from db
import allMessagesDb from './data/messagesDb.json'

import {
  setWargameFeedback,
  setLatestFeedbackMessage,
  setLatestWargameMessage,
  setWargameMessages,
  openMessage,
  closeMessage,
  markAllAsRead
} from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import {
  SET_FEEDBACK_MESSAGES,
  SET_LATEST_FEEDBACK_MESSAGE,
  SET_LATEST_WARGAME_MESSAGE,
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ
} from '../../../ActionsAndReducers/ActionConstants'

describe('PlayerUi Message Actions', () => {
  it('Should set all messages gained from db to state', () => {
    const expectedAction = {
      type: SET_ALL_MESSAGES,
      payload: allMessagesDb
    }
    expect(setWargameMessages(allMessagesDb)).toEqual(expectedAction)
  })
})

// export const setWargameFeedback = (messages: Array<MessageTypes>): PlayerUiActionTypes => ({
//   type: ActionConstant.SET_FEEDBACK_MESSAGES,
//   payload: messages
// })
//
// export const setLatestFeedbackMessage = (message: MessageTypes): PlayerUiActionTypes => ({
//   type: ActionConstant.SET_LATEST_FEEDBACK_MESSAGE,
//   payload: message
// })
// export const setLatestWargameMessage = (message: MessageTypes): PlayerUiActionTypes => ({
//   type: ActionConstant.SET_LATEST_WARGAME_MESSAGE,
//   payload: message
// })
// export const setWargameMessages = (messages: Array<MessageTypes>): PlayerUiActionTypes => ({
//   type: ActionConstant.SET_ALL_MESSAGES,
//   payload: messages
// })
// export const openMessage = (channel: string, message: Message): PlayerUiActionTypes => ({
//   type: ActionConstant.OPEN_MESSAGE,
//   payload: { channel, message }
// })
// export const closeMessage = (channel: string, message: Message): PlayerUiActionTypes => ({
//   type: ActionConstant.CLOSE_MESSAGE,
//   payload: { channel, message }
// })
//
// export const markAllAsRead = (channel: string): PlayerUiActionTypes => ({
//   type: ActionConstant.MARK_ALL_AS_READ,
//   payload: channel
// })


// describe('PlayerUi Tour Actions', () => {
//   it('should set a payload true', () => {
//     const expectedAction = {
//       type: OPEN_TOUR,
//       payload: true
//     }
//     expect(openTour(true)).toEqual(expectedAction)
//   })
//   it('should set a payload false', () => {
//     const expectedAction = {
//       type: OPEN_TOUR,
//       payload: false
//     }
//     expect(openTour(false)).toEqual(expectedAction)
//   })
// })

// describe('PlayerUi Tour Reducer', () => {
//   it('should handle OPEN_MODAL and set tourIsOpen true', () => {
//     expect(reducer({
//       ...initialState,
//       tourIsOpen: false
//     }, openTour(true))).toEqual({
//       ...initialState,
//       tourIsOpen: true
//     })
//   })
//   it('should handle OPEN_MODAL and set tourIsOpen false', () => {
//     expect(reducer({
//       ...initialState,
//       tourIsOpen: true
//     }, openTour(false))).toEqual({
//       ...initialState,
//       tourIsOpen: false
//     })
//   })
// })
