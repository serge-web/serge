import { CHAT_MESSAGE, INFO_MESSAGE_CLIPPED } from 'src/config'
import { ChatMessage, Message, MessageInfoTypeClipped, Role } from 'src/custom-types'
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
      "roleName": whiteGC.name,
      "iconURL": "default_img/umpireDefault.png",
    },
    "messageType": "Chat",
    "privateMessage": "Private message here",
    "timestamp": "2020-03-25T15:08:47.510Z",
    turnNumber: 1
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
      "roleName": blueCO.name,
      "name": "Blue",
      "iconURL": "default_img/umpireDefault.png"
    },
    "messageType": "Chat",
    "timestamp": "2020-03-25T15:08:47.510Z",
    turnNumber: 1
  },
  "message": {
    "content": "Lorem ipsum do lor sit amet adipiscius elit\n"
  },
  "_id": "2020-03-25T15:08:47.520Z",
}

const message3: MessageInfoTypeClipped = {
  gameTurn: 0,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'Net 16'},
  _id: "2021-02-24T17:50:31.603Z",
  isOpen: false,
  hasBeenRead: false
}

const message4: MessageInfoTypeClipped = {
  gameTurn: 1,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'Net 16'},
  _id: "2021-02-24T17:52:31.643Z",
  isOpen: false,
  hasBeenRead: false
}

const messages: Message[] = [message3, message1, message4, message2]

export default messages