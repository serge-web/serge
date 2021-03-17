import { CUSTOM_MESSAGE } from '@serge/config';
import { MessageChannel, MessageCustom } from '@serge/custom-types'
/** helper function to handle an array of messages, and
 * only return the newest version of custom messages. Note: it does not inspect
 * the pouchdb _rev field, it just returns the last version
 * of that message encountered in the list
 */
const mostRecentOnly = (messages: MessageChannel[], channel?: string): MessageCustom[] => {
  const matches = new Map<string, MessageCustom>();
  messages.forEach((message: MessageChannel) => {
    if(message.messageType === CUSTOM_MESSAGE && channel === undefined || message.details.channel === channel) {
      if(message._id) {
        matches.set(message._id, message as MessageCustom)
      } else {
        console.warn('Encountered message without an _id')
      }
    }
  })
  return Array.from(matches.values())
}
export default mostRecentOnly
