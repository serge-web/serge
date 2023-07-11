import { SET_FEEDBACK_MESSAGES } from 'src/config'
import { SetWargameFeedbackAction } from 'src/custom-types'
import { feedbackMessage1, feedbackMessage2 } from './feedback-message.mock'

const actionFeedbackMessages: SetWargameFeedbackAction = {
  type: SET_FEEDBACK_MESSAGES,
  payload: [feedbackMessage1, feedbackMessage2]
}

export default actionFeedbackMessages
