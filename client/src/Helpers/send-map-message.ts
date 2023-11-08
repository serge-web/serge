import { ForceData, Message, MessageDetails, MessageMap, Role } from 'src/custom-types'

/**
 * @param mType message type
 * @param message contents of message
 * @param force  force sending message
 * @param channelID channel for message
 * @param role logged in player
 * @param currentWargame name of wargame
 * @param saveMapMessage callback to actually store message
 */
const sendMapMessage = (mType: string, message: MessageMap, force: ForceData | undefined,
  channelID: string, role: Role['roleId'], roleName: Role['name'], currentWargame: string, turnNumber: number,
  saveMapMessage: {(dbName: string, details: MessageDetails, message: MessageMap): Promise<Message>}): void => {
  if (force) {
    const { name, color, iconURL } = force

    const details: MessageDetails = {
      channel: channelID,
      from: {
        force: name,
        forceColor: color,
        roleId: role,
        roleName: roleName,
        iconURL
      },
      messageType: mType,
      timestamp: new Date().toISOString(),
      turnNumber: turnNumber
    }
    saveMapMessage(currentWargame, details, message)
  } else {
    console.error('Cannot send map message, force is missing')
  }
}

export default sendMapMessage
