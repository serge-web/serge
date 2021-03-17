import { CUSTOM_MESSAGE } from '@serge/config';
import { MessageChannel, MessageCustom } from '@serge/custom-types'
/** helper function to handle an array of messages, and
 * only return the newest version of custom messages. Note: it does not inspect
 * the pouchdb _rev field, it just returns the last version
 * of that message encountered in the list
 * @param (MessageChannel[]) array of messages
 * @param (string) the channel to get messages for (opt)
 * @param (string) the type of message to look for
 * @returns (MessageCustom[]) latest version of specified messages
 */
const mostRecentOnly = (messages: MessageChannel[], channel?: string, msgType?: string): MessageCustom[] => {
  const matches = new Map<string, MessageCustom>();
  messages.forEach((message: MessageChannel) => {
    const isCustom = message.messageType === CUSTOM_MESSAGE
    const correctChannel = channel === undefined || message.details.channel === channel
    if(isCustom && correctChannel ) {
      const customMessage: MessageCustom = message as MessageCustom
      if(msgType === undefined || msgType === customMessage.details.messageType) {
        if(message._id) {
          matches.set(message._id, message as MessageCustom)
        } else {
          console.warn('Encountered message without an _id')
        }  
      }
    }
  })
  return Array.from(matches.values())
}
export default mostRecentOnly
