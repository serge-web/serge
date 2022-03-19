import { SET_LATEST_WARGAME_MESSAGE, CUSTOM_MESSAGE } from '@serge/config'
import { SetLatestWargameMessageAction, Role } from '@serge/custom-types'
import { forces } from './forces.mock'

const blueCO: Role = forces[1].roles[0]
const actionSetLatestFeedbackMessage: SetLatestWargameMessageAction = {
  type: SET_LATEST_WARGAME_MESSAGE,
  payload: {
    messageType: CUSTOM_MESSAGE,
    isOpen: false,
    hasBeenRead: [],
    "details": {
      "channel": "channel-k16fgs63",
      "from": {
        "force": "Blue",
        "forceColor": "#3dd0ff",
        "roleId": blueCO.roleId,
        "roleName": blueCO.name,
        "iconURL": "http://localhost:8080/default_img/forceDefault.png"
      },
      "messageType": "Chat",
      "timestamp": "2020-12-07T06:38:43.642Z",
      turnNumber: 1
    },
    "message": {
      "content": "My test message"
    },
    "_id": "2020-12-07T06:38:43.643Z",
    "_rev": "1-aa5428939cd0e0dd1a5ec9106316aa08"
  }
}

export default actionSetLatestFeedbackMessage
