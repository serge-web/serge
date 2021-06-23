import { CHAT_MESSAGE } from '@serge/config'
import { ChatMessage } from '@serge/custom-types'

const message1: ChatMessage = {
  "messageType": CHAT_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "White",
      "forceColor": "#FCFBEE",
      "roleName": "Game Control",
      "roleId": "r12345",
      "icon": "default_img/umpireDefault.png",
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
      "roleName": "CO",
      "roleId": "r12345",
      "name": "Blue",
      "icon": "default_img/umpireDefault.png"
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