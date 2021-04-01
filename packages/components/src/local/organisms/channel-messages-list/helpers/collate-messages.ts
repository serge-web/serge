import { MessagesTypes } from '../types/props'
import { INFO_MESSAGE_CLIPPED, UMPIRE_FORCE } from '@serge/config'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import moment from 'moment'


/** Generate the Serge name for the supplied cell (1,3) == "B03" */
const collateMessages = (messages: MessageChannel[], 
     selectedForceId: string, 
     onRead?: { (detail: object): void }): MessagesTypes[]  => {

return messages.map((item: MessageChannel | any) => {
      if(item.messageType === INFO_MESSAGE_CLIPPED) {
        // this is a turn marker, we return it unchanged
        // TODO: I think this would return wargame documents too. 
        // we probably need to reduce it to just the game turn. Then
        // we reduce the list of messages to remove duplicate game turns
        return item
      } else {
        const messageItem: MessageCustom = item
        const {
          details,
          message,
          isOpen,
          hasBeenRead,
          infoType,
          gameTurn
        } = messageItem
        const { role, forceColor } = details.from || {}
        const { messageType, privateMessage } = details
        const dynamicBorderColor = `${forceColor}${hasBeenRead ? 'B3':''}`
        const timestamp = moment(details.timestamp)
        const isUmpire = selectedForceId === UMPIRE_FORCE
        const detail = message || {}
        let title
        if (detail.title) {
          title = detail.title
        } else if (detail.Title) { 
          title = detail.Title // have Title field in RFI format
        } else if(detail.content) {
          // yes, we have content (probably chat) use it
          title = detail.content
        } else {
          // no content, just use message-type
          title = details.messageType
        }
        return {
          ...item,
          borderColor: dynamicBorderColor,
          infoType,
          gameTurn,
          isOpen,
          title,
          timestamp,
          role,
          forceColor,
          messageType,
          hasBeenRead,
          privateMessage,
          isUmpire,
          detail,
          onRead
        }
      }
    })
}

export default collateMessages
