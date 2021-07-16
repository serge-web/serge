import { CUSTOM_MESSAGE } from '@serge/config'
import { MessageCustom, MessageChannel } from '@serge/custom-types'

const message1: MessageChannel = {
  "messageType": CUSTOM_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "White",
      "forceColor": "#FCFBEE",
      "role": "Game Control",
      "iconURL": "default_img/umpireDefault.png"
    },
    "messageType": "Chat",
    "timestamp": "2020-03-25T15:08:47.510Z"
  },
  "message": {
    "content": "test\n"
  },
  "_id": "2020-03-25T15:08:47.510Z",
  "hasBeenRead": false,
  "isOpen": false
}
const message2: MessageCustom = {
  "messageType": CUSTOM_MESSAGE,
  "details": {
    "channel": "game-admin",
    "from": {
      "force": "Blue",
      "forceColor": "#1989dc",
      "role": "CO",
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
  "hasBeenRead": false,
  "isOpen": false
}

const messages: MessageChannel[] = [message1, message2]

export default messages
