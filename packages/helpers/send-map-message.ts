import { ForceData, MessageMap } from "@serge/custom-types"

const sendMapMessage = (mType: string, message: MessageMap, force: ForceData | undefined, channelID: string, role: string, currentWargame: any, saveMapMessage: any): void => {
    if(force) {
      const { name, color, icon } = force

      const details = {
        channel: channelID,
        forceDelta: true, // to indicate it represents a change in forces state
        from: {
          force: name,
          forceColor: color,
          role: role,
          icon
        },
        messageType: mType,
        timestamp: new Date().toISOString()
      }
      saveMapMessage(currentWargame, details, message)
    } else {
      console.error('Cannot send map message, force is missing')
    }
  }

  export default sendMapMessage