import reducer, { initialState } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import copyState from '../../../Helpers/copyStateHelper'
import {
  openMessage,
  closeMessage,
  markAllAsRead
} from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import { PlayerUi } from '@serge/custom-types'

import { MARK_ALL_AS_READ } from '@serge/config'


import { actionOpenMessage, actionCloseMessage, GameMessagesMock } from '@serge/mocks'

describe('PlayerUi Message Actions', () => {

  it('Should set channelId and message to reducer', () => {
    expect(openMessage(actionOpenMessage.payload.channel, actionOpenMessage.payload.message)).toEqual(actionOpenMessage)
  })
  it('Should set channelId and message to reducer', () => {
    expect(closeMessage(actionCloseMessage.payload.channel, actionCloseMessage.payload.message)).toEqual(actionCloseMessage)
  })
  it('Should set channelId to reducer', () => {
    const expectedAction = {
      type: MARK_ALL_AS_READ,
      payload: GameMessagesMock[0].details.channel
    }
    expect(markAllAsRead(expectedAction.payload)).toEqual(expectedAction)
  })
})

const state: PlayerUi = {
  ...initialState,
  'channels': {
    [GameMessagesMock[0].details.channel]: {
      uniqid: '345345',
      participants: [],
      'name': 'Blue Chat',
      'templates': [],
      'forceIcons': ['http://localhost:8080/default_img/forceDefault.png'],
      'forceColors': ['#3dd0ff'],
      'messages': GameMessagesMock,
      'unreadMessageCount': GameMessagesMock.length,
      'observing': false
    }
  }
}

describe('PlayerUi Message Reducers', () => {
  it('Should set OPEN_MESSAGE by channelId and messsage', () => {
    const expectedState: PlayerUi = copyState(state)
    expectedState.channels[actionCloseMessage.payload.message.details.channel].messages![0].isOpen = true
    expectedState.channels[actionCloseMessage.payload.message.details.channel].messages![0].hasBeenRead = true
    expectedState.channels[actionCloseMessage.payload.message.details.channel].unreadMessageCount = GameMessagesMock.length - 1
    expect(reducer(state, actionOpenMessage)).toEqual(expectedState)
  })
  it('Should set CLOSE_MESSAGE by channelId and messsage', () => {
    const expectedState: PlayerUi = copyState(state)
    expectedState.channels[actionCloseMessage.payload.message.details.channel].messages![0].isOpen = false
    console.log(actionCloseMessage.payload.message.isOpen);
    expect(reducer(state, actionCloseMessage)).toEqual(expectedState)
  })
  it('Should set MARK_ALL_AS_READ by channel', () => {
    const expectedState: PlayerUi = copyState(state)
    expectedState.channels[actionCloseMessage.payload.message.details.channel].messages = GameMessagesMock.map(msg => ({ ...msg, hasBeenRead: true }))
    expectedState.channels[actionCloseMessage.payload.message.details.channel].unreadMessageCount = 0
    expect(reducer(state, markAllAsRead(GameMessagesMock[0].details.channel))).toEqual(expectedState)
  })
})
