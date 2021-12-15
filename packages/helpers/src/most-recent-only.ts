import _ from 'lodash'
import { INFO_MESSAGE_CLIPPED } from '@serge/config'
import { MessageChannel } from '@serge/custom-types'

/** helper function to produce unique ids for channel messages
 */
const getIDs = (message: MessageChannel): string => {
  let res
  if (message.messageType === INFO_MESSAGE_CLIPPED || message.infoType === true) {
    res = '' + message.gameTurn
  } else {
    if(!message) {
      console.log('message missing:', message)
      return new Date().toString()
    }
    const msg = message.message
    if (msg.Reference !== undefined) {
      res = msg.Reference
    } else {
      res = message._id
    }
  }
  return res
}

/** helper function to reduce the list of messages by removing duplicate
 * turn markers & older versions of messages with reference numbers
 */
const mostRecentOnly = (messages: MessageChannel[]): MessageChannel[] => {
  return _.uniqBy(messages, getIDs)
}
export default mostRecentOnly
