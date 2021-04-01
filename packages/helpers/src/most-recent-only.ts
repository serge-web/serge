import { CUSTOM_MESSAGE } from '@serge/config';
import { MessageChannel, MessageCustom } from '@serge/custom-types'


/** helper function to handle an array of messages, and
 * only return the newest version of custom messages. Note: it does not inspect
 * the pouchdb _rev field, it just returns the last version
 * of that message encountered in the list
 * @param (MessageChannel[]) array of messages
 * @returns (MessageCustom[]) latest version of specified messages
 */
const mostRecentOnly = (messages: MessageChannel[]): MessageCustom[] => {
  // create list of docs with refs
  const refs: string[] = []
  const results:MessageCustom[] = []
  messages.forEach((message: MessageChannel) => {
    if(message.messageType === CUSTOM_MESSAGE) {
      const ref = message.message.Reference
      // see if it's a versioned document
      if(ref !== undefined) {
        const found = refs.find(item => item === ref)
        if(!found) {
          refs.push(ref)
          results.push(message)
        }
      } else {
        results.push(message)
      }  
    }
  })
  return results
}
export default mostRecentOnly
