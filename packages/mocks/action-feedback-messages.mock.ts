import { SET_FEEDBACK_MESSAGES } from '@serge/config'
import { SetWargameFeedbackAction } from '@serge/custom-types'
import { feedbackMessage1, feedbackMessage2 } from './feedback-message.mock'

const actionFeedbackMessages: SetWargameFeedbackAction = {
  type: SET_FEEDBACK_MESSAGES,
  payload: [feedbackMessage1, feedbackMessage2]
}

export default actionFeedbackMessages
