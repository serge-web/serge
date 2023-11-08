import {
  MessageChannel,
  PlayerUi,
  ChannelUI,
  MessageCustom,
  MessageInfoType,
  SetWargameMessage,
  Wargame,
  MessagePlanning,
  ChatMessage,
  PlayerMessageLog,
  PlayerUiChannels 
} from 'src/custom-types'
import {
  handleChannelUpdates, handleAllInitialChannelMessages, setMessageState, 
  getMessageState, removeMessageState, handleNewMessageData 
} from 'src/Helpers'
import {
  INFO_MESSAGE_CLIPPED
} from 'src/config'
import deepCopy from '../../../Helpers/copyStateHelper'

/** a new document has been received, either add it to the correct channel,
 * or update the channels to reflect the new channel definitions
 */
export const handleWargameUpdate = (payload: Wargame, newState: PlayerUi): SetWargameMessage => {
  // TODO: only one of `payload` or `newState` will have been received. We should have 
  // two different handlers, one for each change.
  if (!payload._id) {
    console.error('Payload missing id field')
  }
  const res: SetWargameMessage = handleChannelUpdates(payload.data.channels.channels, payload._id || 'note: id missing', payload.gameTurn, newState.channels, newState.chatChannel,
    newState.selectedForce, newState.selectedRole, newState.isObserver,
    newState.allTemplatesByKey, newState.allForces, newState.playerMessageLog)
  return res
}

/** a new document has been received, either add it to the correct channel,
 * or update the channels to reflect the new channel definitions
 */
export const handleNewMessage = (payload: MessageChannel, newState: PlayerUi): SetWargameMessage => {
  // TODO: only one of `payload` or `newState` will have been received. We should have 
  // two different handlers, one for each change.
  const res: SetWargameMessage = handleNewMessageData(payload, newState.channels, newState.chatChannel,
    newState.playerMessageLog, newState.selectedRole)
  return res
}

/** when the app first opens it processes a list of all existing messages,,
 * grouping them into channels
 */
export const handleSetAllMessages = (payload: Array<MessageCustom | MessageInfoType>, newState: PlayerUi): SetWargameMessage => {
  const res: SetWargameMessage = handleAllInitialChannelMessages(payload, newState.currentWargame, newState.selectedForce,
    newState.selectedRole, newState.allChannels, newState.allForces, newState.chatChannel,
    newState.isObserver, newState.allTemplatesByKey, newState.isUmpire)
  return res
}

const openMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  let changed = false
  if (message._id === id) {
    changed = true
    message.isOpen = true
    message.hasBeenRead = true
  }
  return { message, changed }
}

export const openMessage = (channel: string, payloadMessage: MessageChannel, newState: PlayerUi): ChannelUI => {
  // mutating `messages` array - copyState at top of switch
  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  const selectedForce = newState.selectedForce ? newState.selectedForce.uniqid : ''
  if (payloadMessage._id !== undefined) {
    for (const i in channelMessages) {
      const res = openMessageChange(channelMessages[i], payloadMessage._id)
      if (res.changed) {
        channelMessages[i] = res.message
        setMessageState(newState.currentWargame, selectedForce, newState.selectedRole, payloadMessage._id)
        break
      }
    }
  }

  const unreadMessageCount = channelMessages.filter((message) => {
    return message._id &&
      !message.hasBeenRead &&
      message.messageType !== INFO_MESSAGE_CLIPPED &&
      getMessageState(newState.currentWargame, selectedForce, newState.selectedRole, message._id) === null
  }).length

  return {
    ...newState.channels[channel],
    unreadMessageCount,
    messages: channelMessages
  }
}

const closeMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  const changed = false
  if (message.messageType === INFO_MESSAGE_CLIPPED /* InfoType have no id */ && message._id === id) {
    message.isOpen = false
  }
  return { message, changed }
}

export const markUnread = (channel: string, message: MessageChannel | ChatMessage, newState: PlayerUi) => {
  if (!message._id) {
    return {
      ...newState.channels[channel],
      message
    }
  }

  const selectedForce = newState.selectedForce ? newState.selectedForce.uniqid : ''
  removeMessageState(newState.currentWargame, selectedForce, newState.selectedRole, message._id)

  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  const unreadMessageCount = channelMessages.filter((message) => {
    return message._id &&
      !message.hasBeenRead &&
      message.messageType !== INFO_MESSAGE_CLIPPED &&
      getMessageState(newState.currentWargame, selectedForce, newState.selectedRole, message._id) === null
  }).length

  return {
    ...newState.channels[channel],
    unreadMessageCount,
    messages: channelMessages
  }
}

export const closeMessage = (channel: string, payloadMessage: MessageChannel, newState: PlayerUi): (MessageChannel)[] => {
  // mutating messages array - copyState at top of switch
  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  if (payloadMessage._id !== undefined) {
    for (const i in channelMessages) {
      const res = closeMessageChange(channelMessages[i], payloadMessage._id)
      if (res.changed) {
        channelMessages[i] = res.message
        break
      }
    }
  }

  return channelMessages
}

export const MarkAllPlayerMessageRead = (newStates: PlayerUi, msgState: string): PlayerMessageLog => {
  Object.values(newStates.playerMessageLog).map((value) => {
    const selectedForce = newStates.selectedForce ? newStates.selectedForce.uniqid : ''
    if (value._id) {
      value.hasBeenRead = msgState === 'read'
      const msgFnc = msgState === 'read' ? setMessageState : removeMessageState
      msgFnc(newStates.currentWargame, selectedForce, newStates.selectedRole, value._id)
    }  
    return value  
  })
  return newStates.playerMessageLog
}

export const markAllMessageState = (channel: string, newState: PlayerUi, msgState: 'read' | 'unread'): ChannelUI => {
  const channelMessages: MessageChannel[] = (newState.channels[channel].messages || []).map((message) => {
    const selectedForce = newState.selectedForce ? newState.selectedForce.uniqid : ''
    if (message._id) {
      message.hasBeenRead = msgState === 'read'
      const msgFnc = msgState === 'read' ? setMessageState : removeMessageState
      msgFnc(newState.currentWargame, selectedForce, newState.selectedRole, message._id)
    }
    return message
  })

  return {
    ...newState.channels[channel],
    unreadMessageCount: msgState === 'read' ? 0 : channelMessages.length,
    messages: channelMessages
  }
}

export const HandleUpdateBulksData = (newState: PlayerUi, anyPayload: MessagePlanning[]): PlayerUiChannels => {
  const channelMessageTypes: string = anyPayload[0].details.channel
  const copyChanels: PlayerUiChannels = deepCopy(newState.channels)
  const currentChannel = newState.channels[channelMessageTypes]
  const channelMessage = currentChannel.messages 
  if (channelMessage) {
    anyPayload.forEach((data: MessagePlanning) => {
      const findIndexs = channelMessage.findIndex(number => number._id !== data._id)
      if (currentChannel && findIndexs !== -1) {
        channelMessage.unshift(data) 
      }
    })

    currentChannel.messages = channelMessage
    copyChanels[channelMessageTypes] = currentChannel
  }
  
  return copyChanels
}
