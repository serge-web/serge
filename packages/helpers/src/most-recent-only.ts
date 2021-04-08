import { INFO_MESSAGE_CLIPPED } from '@serge/config';
import { MessageChannel } from '@serge/custom-types'


/** helper function to produce unique ids for channel messages
 */
const mostRecentOnly = (message: MessageChannel): string => {
  let res
  if (message.messageType === INFO_MESSAGE_CLIPPED || message.infoType === true) {
    res = '' + message.gameTurn
  } else {
    const msg = message.message
    if(msg.Reference !== undefined) {
      res = msg.Reference
    } else {
      res = message._id
    }
  }
  return res
}
export default mostRecentOnly
