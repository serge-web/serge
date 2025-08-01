import {
  MessageChannel,
  PlayerUi,
  ChannelUI,
  MessageCustom,
  MessageInfoType,
  SetWargameMessage,
  Wargame,
  ChatMessage,
  PlayerMessageLog
} from 'src/custom-types'
import {
  handleChannelUpdates, handleAllInitialChannelMessages, setMessageState, 
  getMessageState, removeMessageState, handleNewMessageData 
} from 'src/Helpers'
import {
  INFO_MESSAGE_CLIPPED
} from 'src/config'
/** a new document has been received, either add it to the correct channel,
 * or update the channels to reflect the new channel definitions
 */
const handleWargameUpdate = (payload: Wargame, newState: PlayerUi): SetWargameMessage => {
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
const handleNewMessage = (payload: MessageChannel, newState: PlayerUi): SetWargameMessage => {
  // TODO: only one of `payload` or `newState` will have been received. We should have 
  // two different handlers, one for each change.
  const res: SetWargameMessage = handleNewMessageData(payload, newState.channels, newState.chatChannel,
    newState.playerMessageLog, newState.selectedRole)
  return res
}

/** when the app first opens it processes a list of all existing messages,,
 * grouping them into channels
 */
const handleSetAllMessages = (payload: Array<MessageCustom | MessageInfoType>, newState: PlayerUi): SetWargameMessage => {
  const res: SetWargameMessage = handleAllInitialChannelMessages(payload, newState.currentWargame, newState.selectedForce,
    newState.selectedRole, newState.allChannels, newState.allForces, newState.chatChannel,
    newState.isObserver, newState.allTemplatesByKey, newState.isUmpire)
  return res
}

const openMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  let changed = false
  if (message._id === id) {
    changed = true
    message.isOpen = !message.isOpen
    message.hasBeenRead = true
  }
  return { message, changed }
}

/**
 * Open a message in the specified channel.
 * Mutates the `messages` array.
 */
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

const MarkAllPlayerMessageRead = (newStates: PlayerUi, msgState: string): PlayerMessageLog => {
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

const markAllMessageState = (channel: string, newState: PlayerUi, msgState: 'read' | 'unread'): ChannelUI => {
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

/** 
 * Handle the latest wargame message based on its action payload.
 */
export const handleLatestWargameMessage = (actionPayload: MessageChannel, newState: PlayerUi): PlayerUi => {
  const anyPayload = actionPayload as any
  if (anyPayload.activityTime) {
    return newState
  } else if (anyPayload.data) {
    // wargame change
    const wargame = anyPayload as Wargame
    newState.allChannels = wargame.data.channels.channels
    const changedLatestState = handleWargameUpdate(wargame, newState)
    newState.channels = changedLatestState.channels
    newState.chatChannel = changedLatestState.chatChannel
    newState.playerMessageLog = changedLatestState.playerMessageLog
  } else {
    // process new message
    const changedLatestState = handleNewMessage(actionPayload, newState)
    newState.channels = changedLatestState.channels
    newState.chatChannel = changedLatestState.chatChannel
    newState.playerMessageLog = changedLatestState.playerMessageLog
  }
  return newState
}
  
/**
 * Open a message based on the action payload.
*/
export const openMessageAction = (payload: {
    channel: string
    message: MessageChannel
  }, newState: PlayerUi): void => {
  newState.channels[payload.channel] = openMessage(payload.channel, payload.message, newState)
}

/**
 * Handle the action of setting all messages based on the action payload.
*/
export const handleSetAllMessagesAction = (payload: Array<MessageCustom | MessageInfoType>, newState: PlayerUi): void => {
  const changedAllMesagesState = handleSetAllMessages(payload, newState)
  newState.channels = changedAllMesagesState.channels
  newState.chatChannel = changedAllMesagesState.chatChannel
  newState.playerMessageLog = changedAllMesagesState.playerMessageLog
}

/**
 * Mark all messages in a channel as read based on the action payload.
*/
export const markAllMessagesAsRead = (payload: string | undefined, currentState: PlayerUi) => {
  if (!payload) {
    currentState.playerMessageLog = MarkAllPlayerMessageRead(currentState, 'read')
  } else {
    currentState.channels[payload] = markAllMessageState(payload, currentState, 'read')
  }
}

/**
 * Mark all messages in a channel as unread based on the action payload.
*/
export const markAllMessagesAsUnread = (payload: string | undefined, currentState: PlayerUi) => {
  if (!payload) {
    currentState.playerMessageLog = MarkAllPlayerMessageRead(currentState, 'unread')
  } else {
    currentState.channels[payload] = markAllMessageState(payload, currentState, 'unread')
  }
}
