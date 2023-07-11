import { MessageFeedback, Role } from 'src/custom-types'
import { FEEDBACK_MESSAGE } from 'src/config'

import { forces } from './forces.mock'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]

export const feedbackMessage1: MessageFeedback = {
  "details": {
    "channel": "Feedback",
    "from": {
      "force": "Blue",
      "forceColor": "#3dd0ff",
      "roleId": blueCO.roleId,
      "roleName": blueCO.name,
      "name": "",
      "iconURL": ''
    },
    "messageType": "Chat",
    "timestamp": "2020-12-06T11:05:12.038Z",
    turnNumber: 1
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
      "roleId": whiteGC.roleId,
      "roleName": whiteGC.name,
      "name": "Heri Setiawan",
      "iconURL": ''
    },
    "messageType": "Chat",
    "timestamp": "2020-10-01T01:19:56.492Z",
    turnNumber: 1
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
