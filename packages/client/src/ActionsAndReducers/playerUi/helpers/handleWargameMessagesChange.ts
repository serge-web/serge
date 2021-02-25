import {
  MessageInfoType,
  MessageChannel,
  PlayerUi,
  PlayerUiChatChannel,
  PlayerUiChannels,
  ChannelData,
  MessageCustom,
  SetWargameMessage,
  ChannelUI
} from '@serge/custom-types'
import { deepCopy, matchedForceAndRoleFilter, matchedAllRolesFilter, getParticipantStates, checkParticipantStates, handleChannelUpdates } from '@serge/helpers'

import {
  INFO_MESSAGE
} from '@serge/config'
// TODO: change it to @serge/config

// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'



import {
  LOCAL_STORAGE_TIMEOUT,
  CHAT_CHANNEL_ID,
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

  const messagesFiltered: Array<MessageChannel> = payload.map((message) => {
    if (message.messageType === INFO_MESSAGE) {
      const res: MessageInfoType = {
        messageType: INFO_MESSAGE,
        details: {
          channel: `infoTypeChannelMarker${uniqId.time()}`
        },
        infoType: true,
        gameTurn: message.gameTurn
      }
      return res
    }

    return {
      ...message,
      hasBeenRead: expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === 'read',
      isOpen: false
    }
  })

  const messages = _.uniqBy(messagesFiltered, reduceTurnMarkers)
    .filter((message) => message.details && message.details.channel === newState.chatChannel.name)

  const channels: PlayerUiChannels = {}
  const forceId: string | undefined = newState.selectedForce ? newState.selectedForce.uniqid : undefined

  newState.allChannels.forEach((channel: ChannelData) => {
    const {
      isParticipant,
      allRolesIncluded,
      observing,
      templates
    } = getParticipantStates(channel, forceId, newState.selectedRole, newState.isObserver, newState.allTemplates)

    if (newState.isObserver || isParticipant || allRolesIncluded) {
      const newChannel: ChannelUI = {
        name: channel.name,
        uniqid: channel.uniqid,
        templates,
        participants: [],
        forceIcons: channel.participants && channel.participants.map((participant) => participant.icon),
        forceColors: channel.participants && channel.participants.map((participant) => {
          const force = newState.allForces.find((force) => force.uniqid === participant.forceUniqid)
          return (force && force.color) || '#FFF'
        }),
        messages: messages.filter((message) => message.details && message.details.channel === channel.uniqid || message.messageType === INFO_MESSAGE),
        unreadMessageCount: messages.filter((message) => {
          if (message.messageType !== INFO_MESSAGE) {
            return false
          } else {
            return (
              expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null &&
              message.details.channel === channel.uniqid
            )
          }
        }).length,
        observing
      }
      // TODO: use channel uniqid
      channels[channel.uniqid || channel.name] = newChannel
    }
  })

  return {
    channels,
    chatChannel: {
      ...newState.chatChannel,
      messages
    }
  }
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
