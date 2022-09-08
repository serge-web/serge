import { describe, it, expect } from '@jest/globals'
import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { actionSetLatestWargameMessage } from '@serge/mocks'
import setLatestWargameMessageData from './data/set_latest_wargame_message_mock'
import { setLatestWargameMessage } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'

describe('PlayerUi Message Actions', () => {
  it('Should set wargame Message to state', () => {
    expect(setLatestWargameMessage(actionSetLatestWargameMessage.payload)).toEqual(actionSetLatestWargameMessage)
  })
})

describe('PlayerUi Message Reducers', () => {
  it('Should add SET_LATEST_WARGAME_MESSAGE to state', () => {
    expect(reducer(setLatestWargameMessageData.state, actionSetLatestWargameMessage))
      .toEqual(setLatestWargameMessageData.newState)
  })
})
