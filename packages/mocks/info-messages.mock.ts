
import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { MessageInfoTypeClipped } from '@serge/custom-types'

const messages: MessageInfoTypeClipped[] = [{
  gameTurn: 0,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'Net 16' },
  _id: "2021-02-24T17:50:31.603Z",
  isOpen: false,
  hasBeenRead: []
}, {
  gameTurn: 1,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'Net 16' },
  _id: "2021-02-24T17:52:31.643Z",
  isOpen: false,
  hasBeenRead: []
}, {
  gameTurn: 1,
  messageType: INFO_MESSAGE_CLIPPED,
  infoType: true,
  details: { channel: 'channel-BlueRFI' },
  _id: "2021-02-24T17:52:31.613Z",
  isOpen: false,
  hasBeenRead: []
}]

export default messages
