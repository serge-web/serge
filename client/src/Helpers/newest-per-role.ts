import { CUSTOM_MESSAGE } from 'src/config'
import { ForceData, MessageCustom, MessageInfoType, PlayerMessageLog, PlayerMessage, PlayerLogUI, Role } from 'src/custom-types'

export const logTable = (playerLog: PlayerMessageLog, forces: ForceData[]): Array<PlayerLogUI> => {
  const res: Array<PlayerLogUI> = []
  forces.forEach((force: ForceData) => {
    force.roles.forEach((role: Role) => {
      const entry = playerLog[role.roleId]
      if (entry) {
        res.push({ force: force.name, forceColor: force.color, iconURL: force.iconURL, role: role.name, title: entry.lastMessageTitle, time: entry.lastMessageTime })
      } else {
        res.push({ force: force.name, forceColor: force.color, iconURL: force.iconURL, role: role.name })
      }
    })
  })
  return res
}

/** helper function to find the newest message per role
 */
const newestPerRole = (messages: Array<MessageInfoType | MessageCustom>): PlayerMessageLog => {
  const log: PlayerMessageLog = {}
  messages.forEach((msg: MessageInfoType | MessageCustom) => {
    if (msg.messageType === CUSTOM_MESSAGE) {
      const msgC: MessageCustom = msg
      const roleId = msgC.details.from.roleId
      const existingInstance = log[roleId]
      if (!existingInstance) {
        const newI: PlayerMessage = {
          roleId: roleId,
          lastMessageTitle: msgC.templateId,
          lastMessageTime: msgC.details.timestamp,
          hasBeenRead: !!msg.hasBeenRead,
          _id: msg._id
        }
        log[roleId] = newI
      }
    }
  })
  return log
}
export default newestPerRole
