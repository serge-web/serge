import { MessageCustom } from 'src/custom-types'

/** filter messages according to if they are archived or not
 * @param messages the raw list of messages
 * @param showArchived whether to include archived messages in list
 */
const filteredMessages = (messages: MessageCustom[], showArchived: boolean): MessageCustom[] => {
  return messages.filter(msg => {
    if (showArchived) {
      // ok - show all messages
      return true
    } else if (!msg.details) {
      // can't be archived, if we don't have details
      return true
    } else if (msg.details.archived) {
      // archived, don't show it
      return false
    } else if (!msg.message) {
      // info message, not contnet
      return false
    } else {
      // not archived, we can show it
      return true
    }
  })
}

export default filteredMessages
