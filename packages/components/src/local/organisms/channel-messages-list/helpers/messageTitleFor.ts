import { MessageCustom } from '@serge/custom-types'
export default function messageTitleFor (message: MessageCustom): string {
  if (message.message.title) {
    return message.message.title
  } else if (message.message.content) {
    // yes, we have content (probably chat) use it
    return message.message.content
  } else {
    // no content, just use message-type
    return message.details.messageType
  }
}
