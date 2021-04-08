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
  const withFirstVersion:MessageChannel[] = []
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
          withFirstVersion.push(message)
        }
      } else {
        withFirstVersion.push(message)
      }  
    } else {
      // ok, it's an info type. We want the last occurring info type
      withFirstVersion.push(message)
    }
  })

  // now pass through, to remove duplicate turns
  const reversed = withFirstVersion.reverse()
  let maxTurn: number = -1
  const onlyFirstTurn:MessageChannel[] = []
  reversed.forEach((message: MessageChannel) => {
    if(message.messageType !== CUSTOM_MESSAGE) {
      const turn = message.gameTurn
      if(turn <= maxTurn) {
        // don't store it - we've got this reference already
      } else {
        maxTurn = turn
        onlyFirstTurn.push(message)
      }  
    } else {
      // ok, it's custom message - we've already sorted them
      onlyFirstTurn.push(message)
    }
  })

  const res = onlyFirstTurn.reverse()

  return res
}
export default mostRecentOnly
