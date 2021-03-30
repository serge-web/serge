import {
  MessageChannel,
  PlayerUi,
  PlayerUiChatChannel,
  PlayerUiChannels,
  ChannelUI,
  MessageCustom,
  MessageInfoType
} from '@serge/custom-types'
import { handleChannelUpdates, handleAllInitialChannelMessages } from '@serge/helpers'
import { ActionPayload } from '@serge/components/src/local/molecules/rfi-form/types/props'
import {
  INFO_MESSAGE_CLIPPED,
  CollaborativeMessageStates
} from '@serge/config'
// TODO: change it to @serge/config

interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
}

interface SetRFIMessages {
  channels: PlayerUiChannels,
  rfiMessages: Array<MessageCustom>
}

import {
  LOCAL_STORAGE_TIMEOUT,
  expiredStorage,
} from '../../../consts'

/** a new document has been received, either add it to the correct channel,
 * or update the channels to reflect the new channel definitions
 */
export const handleSetLatestWargameMessage = (payload: MessageChannel, newState: PlayerUi):SetWargameMessage => {
  const res: SetWargameMessage = handleChannelUpdates(payload, newState.channels, newState.chatChannel,
    newState.selectedForce, newState.allChannels, newState.selectedRole, newState.isObserver,
    newState.allTemplates, newState.allForces)
  return res
}

/** when the app first opens it processes a list of all existing messages,,
 * grouping them into channels
 */
export const handleSetAllMessages = (payload: Array<MessageCustom | MessageInfoType>, newState: PlayerUi): SetWargameMessage => {
  const res: SetWargameMessage = handleAllInitialChannelMessages(payload, newState.currentWargame, newState.selectedForce,
    newState.selectedRole, newState.allChannels, newState.allForces, newState.chatChannel,
    newState.isObserver, newState.allTemplates)
  return res
}


const openMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  let changed: boolean = false
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
  if (payloadMessage._id !== undefined) {
    for (let i in channelMessages) {
      const res = openMessageChange(channelMessages[i], payloadMessage._id)
      if (res.changed) {
        channelMessages[i] = res.message
        expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${payloadMessage._id}`, 'read', LOCAL_STORAGE_TIMEOUT)
        break;
      }
    }
  }

  const unreadMessageCount = channelMessages.filter((message) => {
    return message._id && expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null
  }).length

  return {
    ...newState.channels[channel],
    unreadMessageCount,
    messages: channelMessages
  }
}

const closeMessageChange = (message: MessageChannel, id: string): { message: MessageChannel, changed: boolean } => {
  let changed: boolean = false
  if (message.messageType === INFO_MESSAGE_CLIPPED /* InfoType have no id */ && message._id === id) {
    message.isOpen = false
  }
  return { message, changed }
}


export const closeMessage = (channel: string, payloadMessage: MessageChannel, newState: PlayerUi): (MessageChannel)[] => {
  // mutating messages array - copyState at top of switch
  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  if (payloadMessage._id !== undefined) {
    for (let i in channelMessages) {
      const res = closeMessageChange(channelMessages[i], payloadMessage._id)
      if (res.changed) {
        channelMessages[i] = res.message
        break;
      }
    }
  }

  return channelMessages
}

export const markAllAsRead = (channel: string, newState: PlayerUi): ChannelUI => {
  const channelMessages: MessageChannel[] = (newState.channels[channel].messages || []).map((message) => {
    if (message._id) {
      message.hasBeenRead = true
      expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`, 'read', LOCAL_STORAGE_TIMEOUT)
    }
    return message
  })

  return {
    ...newState.channels[channel],
    unreadMessageCount: 0,
    messages: channelMessages
  }
}

const updateRFIMessage = (payload: { channel: string, message: MessageChannel, rfiPayload: ActionPayload }, newState: PlayerUi, rejected: boolean = false): SetRFIMessages => {
  const { channel, message: payloadMessage, rfiPayload } = payload
  const channelMessages: Array<MessageChannel> = (newState.channels[channel].messages || [])
  const statusMap = [
    CollaborativeMessageStates.Unallocated,
    CollaborativeMessageStates.InProgress,
    CollaborativeMessageStates.PendingReview,
    CollaborativeMessageStates.Released
  ]
  let updatedRFIMessage: MessageCustom | null = null
  const updatedMessages = [...channelMessages].map(message => {
    const messageItem = (message as MessageCustom)
    if (message._id === payloadMessage._id &&
      messageItem.details.collaboration) {
      const currentStatusIndex = statusMap.findIndex((status: CollaborativeMessageStates) => {
        return status === (messageItem.details.collaboration || {}).status
      })
      messageItem.details.collaboration.status = rejected
        ? CollaborativeMessageStates.Rejected
        : statusMap[Math.min(statusMap.length - 1, currentStatusIndex + 1)]
      messageItem.details.collaboration.response = rfiPayload.answer ? rfiPayload.answer : undefined
      messageItem.details.privateMessage = rfiPayload.privateMessageContent ? rfiPayload.privateMessageContent : undefined
      updatedRFIMessage = messageItem
    }
    return message
  })
  // TODO: Implement persistence data updates
  return {
    channels: {
      ...newState.channels,
      [channel]: {
        ...newState.channels[channel],
        messages: updatedMessages
      }
    },
    rfiMessages: newState.rfiMessages.map(message => {
      if (updatedRFIMessage && message._id === updatedRFIMessage._id) {
        return updatedRFIMessage
      }
      return message
    })
  }
}

export const submitRFIMessage = (payload: { channel: string, message: MessageChannel, rfiPayload: ActionPayload }, newState: PlayerUi): SetRFIMessages => {
  return updateRFIMessage(payload, newState)
}

export const rejectRFIMessage = (payload: { channel: string, message: MessageChannel, rfiPayload: ActionPayload }, newState: PlayerUi): SetRFIMessages => {
  return updateRFIMessage(payload, newState, true)
}
