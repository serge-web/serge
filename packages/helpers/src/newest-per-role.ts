import { CUSTOM_MESSAGE } from '@serge/config'
import { MessageCustom, MessageInfoType, PlayerLog, PlayerLogInstance } from '@serge/custom-types'

/** helper function to find the newest message per role
 */
const newestPerRole = (messages: Array<MessageInfoType | MessageCustom>): PlayerLog => {
  const log: PlayerLog = {}
  messages.forEach((msg: MessageInfoType | MessageCustom) => {
    if (msg.messageType === CUSTOM_MESSAGE) {
      const msgC: MessageCustom = msg
      const roleId = msgC.details.from.roleId
      const existingInstance = log[roleId]
      if (!existingInstance) {
        const newI: PlayerLogInstance = {
          roleId: roleId,
          lastMessageTitle: msgC.details.messageType,
          lastMessageTime: msgC.details.timestamp
        }
        log[roleId] = newI
      }
    }
  })
  return log
}
export default newestPerRole
