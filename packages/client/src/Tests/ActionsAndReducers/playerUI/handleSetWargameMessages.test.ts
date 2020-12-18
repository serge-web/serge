import reducer from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'

import { actionSetWargameMessages } from '@serge/mocks'
import { setWargameMessages } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import setAllMessagesData from './data/set_all_messages.json'

describe('PlayerUi Message Actions', () => {
  it('Should set all messages gained from db to state', () => {
    expect(setWargameMessages(actionSetWargameMessages.payload)).toEqual(actionSetWargameMessages)
  })
})

describe('PlayerUi Message Reducers', () => {
  it('Should convert and set SET_ALL_MESSAGES gained from db to state', () => {
    expect(reducer(setAllMessagesData.state, actionSetWargameMessages))
      .toEqual(setAllMessagesData.newState)
  })
})
