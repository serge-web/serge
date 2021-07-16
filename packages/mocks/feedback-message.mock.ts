import { MessageFeedback } from '@serge/custom-types'
import { FEEDBACK_MESSAGE } from '@serge/config'


export const feedbackMessage1: MessageFeedback = {
  "details": {
    "channel": "Feedback",
    "from": {
      "force": "Blue",
      "forceColor": "#3dd0ff",
      "role": "CO",
      "name": "",
      "iconURL": ''
    },
    "messageType": "Chat",
    "timestamp": "2020-12-06T11:05:12.038Z"
  },
  "message": {
    "content": "ds"
  },
  messageType: FEEDBACK_MESSAGE,
  // "feedback": true, we don't need it more
  "_id": "2020-12-06T11:05:12.038Z",
  "_rev": "1-5201037a26e24f70ae45464c20b312aa"
}
export const feedbackMessage2: MessageFeedback = {
  "details": {
    "channel": "Feedback",
    "from": {
      "force": "White",
      "forceColor": "#FCFBEE",
      "role": "Game Control",
      "name": "Heri Setiawan",
      "iconURL": ''
    },
    "messageType": "Chat",
    "timestamp": "2020-10-01T01:19:56.492Z"
  },
  "message": {
    "content": "Lorem ipsum do lor sit amet"
  },
  messageType: FEEDBACK_MESSAGE,
  // "feedback": true, we don't need it more
  "_id": "2020-10-01T01:19:56.492Z",
  "_rev": "1-1e2289c6ee47e2dfd1ffb7e84f66514f"
}

export default feedbackMessage1
