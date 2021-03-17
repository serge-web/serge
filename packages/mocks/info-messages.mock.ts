
import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { MessageInfoTypeClipped } from '@serge/custom-types'

const message1: MessageInfoTypeClipped = {
  gameTurn: 0,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'Net 16'},
  _id: "2021-02-24T17:50:31.603Z",
  isOpen: false,
  hasBeenRead: false
}
const message2: MessageInfoTypeClipped = {
  gameTurn: 1,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'Net 16'},
  _id: "2021-02-24T17:52:31.603Z",
  isOpen: false,
  hasBeenRead: false
}

const messages: MessageInfoTypeClipped[] = [message1, message2]

export default messages
