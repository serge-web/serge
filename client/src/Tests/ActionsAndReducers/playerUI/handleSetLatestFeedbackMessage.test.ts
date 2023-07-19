import { describe, it, expect } from '@jest/globals'
import reducer, { initialState } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { setLatestFeedbackMessage } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { actionSetLatestFeedbackMessage, feedbackMessage2 } from 'src/mocks'
import { PlayerUi } from 'src/custom-types'

describe('PlayerUi Message Actions', () => {
  it('Should set feedback Message to state', () => {
    expect(setLatestFeedbackMessage(actionSetLatestFeedbackMessage.payload)).toEqual(actionSetLatestFeedbackMessage)
  })
})

const state: PlayerUi = {
  ...initialState,
  feedbackMessages: [feedbackMessage2]
}
const expectedState: PlayerUi = {
  ...initialState,
  feedbackMessages: [actionSetLatestFeedbackMessage.payload, feedbackMessage2]
}

describe('PlayerUi Message Reducers', () => {
  it('Should add SET_LATEST_FEEDBACK_MESSAGE to state', () => {
    expect(reducer(state, setLatestFeedbackMessage(actionSetLatestFeedbackMessage.payload)))
      .toEqual(expectedState)
  })
})
