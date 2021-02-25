import {
  MessageInfoType,
  MessageChannel,
  PlayerUi,
  PlayerUiChannels,
  ChannelData,
  SetWargameMessage,
  ChannelUI
} from '@serge/custom-types'
import { getParticipantStates, handleChannelUpdates, handleAllInitialChannelMessages } from '@serge/helpers'

import {
  INFO_MESSAGE
} from '@serge/config'
// TODO: change it to @serge/config

// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'



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


const reduceTurnMarkers = (message: MessageChannel):string => {
  if (message.messageType === INFO_MESSAGE) {
    return '' + message.gameTurn
  }
  return message._id
}

export const handleSetAllMEssages = (payload: Array<MessageChannel>, newState: PlayerUi): SetWargameMessage => {
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
  if (message.messageType === INFO_MESSAGE /* InfoType have no id */ && message._id === id) {
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
