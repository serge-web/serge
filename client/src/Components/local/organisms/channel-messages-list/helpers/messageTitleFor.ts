import { MessageCustom } from 'src/custom-types'
export default function messageTitleFor (message: MessageCustom): string {
  if (message.message.title || message.message.Title || message.templateId) {
    return message.message.title || message.message.Title || message.templateId
  } else if (message.message.content) {
    // yes, we have content (probably chat) use it
    return message.message.content
  } else {
    // no content, just use message-type
    return message.templateId
  }
}
