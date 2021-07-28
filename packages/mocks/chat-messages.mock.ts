import { CHAT_MESSAGE } from '@serge/config'
import { ChatMessage, Role } from '@serge/custom-types'
import { forces } from './forces.mock'

const whiteGC: Role = forces[0].roles[0]
const blueCO: Role = forces[1].roles[0]

const message1: ChatMessage = {
  "messageType": CHAT_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "White",
      "forceColor": "#FCFBEE",
      "roleId": whiteGC.roleId,
      "iconURL": "default_img/umpireDefault.png",
    },
    "messageType": "Chat",
    "privateMessage": "Private message here",
    "timestamp": "2020-03-25T15:08:47.510Z"
  },
  "message": {
    "content": "test\n"
  },
  "_id": "2020-03-25T15:08:47.510Z",
}

const message2: ChatMessage = {
  "messageType": CHAT_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "Blue",
      "forceColor": "#1989dc",
      "roleId": blueCO.roleId,
      "name": "Blue",
      "iconURL": "default_img/umpireDefault.png"
    },
    "messageType": "Chat",
    "timestamp": "2020-03-25T15:08:47.510Z"
  },
  "message": {
    "content": "Lorem ipsum do lor sit amet adipiscius elit\n"
  },
  "_id": "2020-03-25T15:08:47.520Z",
}

const messages: ChatMessage[] = [message1, message2]

export default messages