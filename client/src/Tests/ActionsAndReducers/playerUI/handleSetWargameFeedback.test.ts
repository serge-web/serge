import { describe, it, expect } from '@jest/globals'
import reducer, { initialState } from '../../../ActionsAndReducers/playerUi/playerUi_Reducer'
import { setWargameFeedback } from '../../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { PlayerUi } from 'src/custom-types'
import { actionFeedbackMessages } from 'src/mocks'

describe('PlayerUi Message Actions', () => {
  it('Should set all feedback messages gained from db to state', () => {
    expect(setWargameFeedback(actionFeedbackMessages.payload)).toEqual(actionFeedbackMessages)
  })
})

describe('PlayerUi Message Reducers', () => {
  it('Should set SET_FEEDBACK_MESSAGES gained from db to state', () => {
    const expection: PlayerUi = { ...initialState, feedbackMessages: actionFeedbackMessages.payload }
    expect(reducer(undefined, setWargameFeedback(actionFeedbackMessages.payload)))
      .toEqual(expection)
  })
})
