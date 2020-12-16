import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'

// data from db
import setAllMessagesData from './data/set_all_messages.json'
import openMessageData from './data/open_message.json'
import closeMessageData from './data/close_message.json'
import markAllAsReadData from './data/mark_all_as_read.json'
import setLatestWargameMessageData from './data/set_latest_wargame_message.json'

import {
  setLatestFeedbackMessage,
  setLatestWargameMessage,
  setWargameMessages,
  openMessage,
  closeMessage,
  markAllAsRead
} from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import { PlayerUiActionTypes } from '@serge/custom-types'

import {
  SET_LATEST_WARGAME_MESSAGE,
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ
} from '@serge/config'

describe('PlayerUi Message Actions', () => {
  it('Should set wargame Message to state', () => {
    const expectedAction = {
      type: SET_LATEST_WARGAME_MESSAGE,
      payload: setLatestWargameMessageData.action.payload
    }
    expect(setLatestWargameMessage(setLatestWargameMessageData.action.payload)).toEqual(expectedAction)
  })
})

describe('PlayerUi Message Reducers', () => {
  /*

  it('Should add SET_LATEST_WARGAME_MESSAGE to state', () => {
    expect(reducer(setLatestWargameMessageData.state, setLatestWargameMessage(setLatestWargameMessageData.action.payload)))
      .toEqual(setLatestWargameMessageData.newState)
  })
  */
})
