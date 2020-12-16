import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { actionSetLatestWargameMessage } from '@serge/mocks'
import setLatestWargameMessageData from './data/set_latest_wargame_message.json'
import { setLatestWargameMessage } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { PlayerUi } from '@serge/custom-types'

import {
  SET_LATEST_WARGAME_MESSAGE,
  SET_ALL_MESSAGES,
  OPEN_MESSAGE,
  CLOSE_MESSAGE,
  MARK_ALL_AS_READ
} from '@serge/config'

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
