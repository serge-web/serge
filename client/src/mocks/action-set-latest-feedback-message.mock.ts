import { SET_LATEST_FEEDBACK_MESSAGE } from 'src/config'
import { SetLatestFeedbackMessageAction } from 'src/custom-types'
import feedbackMessage from './feedback-message.mock'

const actionSetLatestFeedbackMessage: SetLatestFeedbackMessageAction = {
  type: SET_LATEST_FEEDBACK_MESSAGE,
  payload: feedbackMessage
}

export default actionSetLatestFeedbackMessage
