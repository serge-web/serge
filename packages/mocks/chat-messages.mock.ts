import { CHAT_MESSAGE } from '@serge/config'
import { ChatMessage } from '@serge/custom-types'

const message1: ChatMessage = {
  "messageType": CHAT_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "White",
      "forceColor": "#FCFBEE",
      "role": "Game Control",
      "icon": "default_img/umpireDefault.png",
    },
    "messageType": "Chat",
    "privateMessage": "Private message here",
    "timestamp": "2020-03-25T15:08:47.510Z"
  },
  "message": {
    "content": "test\n"
  },
  "isOwner": true,
  "isUmpire": true,
  "_id": "2020-03-25T15:08:47.510Z",
}

const message2: ChatMessage = {
  "messageType": CHAT_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "Blue",
      "forceColor": "#1989dc",
      "role": "CO",
      "name": "Blue",
      "icon": "default_img/umpireDefault.png"
    },
    "messageType": "Chat",
    "timestamp": "2020-03-25T15:08:47.510Z"
  },
  "message": {
    "content": "Lorem ipsum do lor sit amet adipiscius elit\n"
  },
  "isOwner": false,
  "_id": "2020-03-25T15:08:47.520Z",
}

const messages: ChatMessage[] = [message1, message2]

export default messages