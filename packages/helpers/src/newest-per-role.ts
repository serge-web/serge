import { CUSTOM_MESSAGE } from '@serge/config'
import { ForceData, MessageCustom, MessageInfoType, PlayerLog, PlayerLogInstance, Role } from '@serge/custom-types'

export const logTable = (playerLog: PlayerLog, forces: ForceData[]): Array<Array<string>> => {
  const res: Array<Array<string>> = []
  forces.forEach((element: ForceData) => {
    element.roles.forEach((role: Role) => {
      const entry = playerLog[role.roleId]
      if (entry) {
        res.push([element.name, role.name, entry.lastMessageTitle, entry.lastMessageTime])
      } else {
        res.push([element.name, role.name])
      }
    })
  })
  return res
}

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
