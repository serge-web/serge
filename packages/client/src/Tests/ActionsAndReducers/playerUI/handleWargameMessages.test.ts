import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'

// data from db
import setAllMessagesData from './data/set_all_messages.json'
import openMessageData from './data/open_message.json'
import closeMessageData from './data/close_message.json'
import markAllAsReadData from './data/mark_all_as_read.json'
import setLatestWargameMessageData from './data/set_latest_wargame_message.json'

import {
  setWargameMessages,
  openMessage,
  closeMessage,
  markAllAsRead
} from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import { PlayerUiActionTypes } from '@serge/custom-types'

import {
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ
} from '@serge/config'

describe('PlayerUi Message Actions', () => {

  it('Should set all messages gained from db to state', () => {
    const expectedAction = {
      type: SET_ALL_MESSAGES,
      payload: setAllMessagesData.action.payload
    }
    expect(setWargameMessages(setAllMessagesData.action.payload)).toEqual(expectedAction)
  })
  it('Should set channelId and message to reducer', () => {
    const expectedAction = {
      type: OPEN_MESSAGE,
      payload: openMessageData.action.payload
    }
    expect(openMessage(openMessageData.action.payload.channel, openMessageData.action.payload.message)).toEqual(expectedAction)
  })
  it('Should set channelId and message to reducer', () => {
    const expectedAction = {
      type: CLOSE_MESSAGE,
      payload: closeMessageData.action.payload
    }
    expect(closeMessage(closeMessageData.action.payload.channel, closeMessageData.action.payload.message)).toEqual(expectedAction)
  })
  it('Should set channelId to reducer', () => {
    const expectedAction = {
      type: MARK_ALL_AS_READ,
      payload: markAllAsReadData.action.payload
    }
    expect(markAllAsRead(markAllAsReadData.action.payload)).toEqual(expectedAction)
  })
})

describe('PlayerUi Message Reducers', () => {
  /*

  it('Should convert and set SET_ALL_MESSAGES gained from db to state', () => {
    expect(reducer(setAllMessagesData.state, setWargameMessages(setAllMessagesData.action.payload)))
      .toEqual(setAllMessagesData.newState)
  })
  it('Should set OPEN_MESSAGE by channelId and messsage', () => {
    expect(reducer(openMessageData.state, openMessage(openMessageData.action.payload.channel, openMessageData.action.payload.message)))
      .toEqual(openMessageData.newState)
  })
  it('Should set CLOSE_MESSAGE by channelId and messsage', () => {
    expect(reducer(closeMessageData.state, closeMessage(closeMessageData.action.payload.channel, closeMessageData.action.payload.message)))
      .toEqual(closeMessageData.newState)
  })
  it('Should set MARK_ALL_AS_READ by channel', () => {
    expect(reducer(markAllAsReadData.state, markAllAsRead(markAllAsReadData.action.payload)))
      .toEqual(markAllAsReadData.newState)
  })
  */
})
