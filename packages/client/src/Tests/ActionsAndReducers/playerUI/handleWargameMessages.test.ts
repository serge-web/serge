import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'

// data from db
import setAllMessagesData from './data/set_all_messages.json'
import setAllFeedbackMessagesData from './data/set_all_feedback_messages.json'
import openMessageData from './data/open_message.json'
import closeMessageData from './data/close_message.json'
import markAllAsReadData from './data/mark_all_as_read.json'
import setLatestFeedbackMessageData from './data/set_latest_feedback_message.json'
import setLatestWargameMessageData from './data/set_latest_wargame_message.json'

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
  it('Should set all feedback messages gained from db to state', () => {
    const expectedAction = {
      type: SET_FEEDBACK_MESSAGES,
      payload: setAllFeedbackMessagesData.action.payload
    }
    expect(setWargameFeedback(setAllFeedbackMessagesData.action.payload)).toEqual(expectedAction)
  })
  it('Should set feedback Message to state', () => {
    const expectedAction = {
      type: SET_LATEST_FEEDBACK_MESSAGE,
      payload: setLatestFeedbackMessageData.action.payload
    }
    expect(setLatestFeedbackMessage(setLatestFeedbackMessageData.action.payload)).toEqual(expectedAction)
  })
  it('Should set wargame Message to state', () => {
    const expectedAction = {
      type: SET_LATEST_WARGAME_MESSAGE,
      payload: setLatestWargameMessageData.action.payload
    }
    expect(setLatestWargameMessage(setLatestWargameMessageData.action.payload)).toEqual(expectedAction)
  })
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
  it('Should set SET_FEEDBACK_MESSAGES gained from db to state', () => {
    expect(reducer(setAllFeedbackMessagesData.state, setWargameFeedback(setAllFeedbackMessagesData.action.payload)))
      .toEqual(setAllFeedbackMessagesData.newState)
  })
  it('Should add SET_LATEST_FEEDBACK_MESSAGE to state', () => {
    expect(reducer(setLatestFeedbackMessageData.state, setLatestFeedbackMessage(setLatestFeedbackMessageData.action.payload)))
      .toEqual(setLatestFeedbackMessageData.newState)
  })
  it('Should add SET_LATEST_WARGAME_MESSAGE to state', () => {
    expect(reducer(setLatestWargameMessageData.state, setLatestWargameMessage(setLatestWargameMessageData.action.payload)))
      .toEqual(setLatestWargameMessageData.newState)
  })
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
})
