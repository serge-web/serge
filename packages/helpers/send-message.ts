
const sendMessage = (mType: string, message: any, force: any, channelID: string, role: string, currentWargame: any, saveMapMessage: any): void => {
    
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
  }

  export default sendMessage