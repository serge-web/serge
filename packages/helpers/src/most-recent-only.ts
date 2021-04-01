import { CUSTOM_MESSAGE } from '@serge/config';
import { MessageChannel } from '@serge/custom-types'


/** helper function to handle an array of messages, and
 * only return the newest version of custom messages. Note: it does not inspect
 * the pouchdb _rev field, it just returns the last version
 * of that message encountered in the list
 * @param (MessageChannel[]) array of messages
 * @returns (MessageCustom[]) latest version of specified messages
 */
const mostRecentOnly = (messages: MessageChannel[]): MessageChannel[] => {
  // create list of docs with refs
  const refs: string[] = []
  const results:MessageChannel[] = []
  messages.forEach((message: MessageChannel) => {
    if(message.messageType === CUSTOM_MESSAGE) {
      const custom = message
      const ref = custom.message.Reference
      // see if it's a versioned document
      if(ref !== undefined) {
        if(refs.find(item => item === ref)){
          // don't store it - we've got this reference already
        } else {
          refs.push(ref)
          results.push(message)
        }
      } else {
        results.push(message)
      }  
    } else {
      results.push(message)
    }
  })
  return results
}
export default mostRecentOnly
