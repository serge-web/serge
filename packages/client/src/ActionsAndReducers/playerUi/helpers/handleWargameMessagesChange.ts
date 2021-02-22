import {
  MessageInfoType,
  MessageChannel,
  PlayerUi,
  PlayerUiChatChannel,
  PlayerUiChannels,
  ChannelData,
  MessageCustom
} from '@serge/custom-types'
import { deepCopy, matchedForceAndRoleFilter, matchedAllRolesFilter, getParticipantStates } from '@serge/helpers'

import {
  INFO_MESSAGE
} from '@serge/config'
// TODO: change it to @serge/config

// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'

interface SetWargameMessage {
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
}

import {
  LOCAL_STORAGE_TIMEOUT,
  CHAT_CHANNEL_ID,
  expiredStorage,
} from '../../../consts'

// TODO: remove uniqid and use name
export const hanldeSetLatestWargameMessage = (payload: MessageChannel, newState: PlayerUi):SetWargameMessage => {

  let channels: PlayerUiChannels = { ...newState.channels }
  const chatChannel: PlayerUiChatChannel = { ...newState.chatChannel }

  if (payload.messageType === INFO_MESSAGE) {
    // this message is a new version of the wargame document
    const message = {
      details: {
        channel: `infoTypeChannelMarker${uniqId.time()}`
      },
      infoType: true,
      gameTurn: payload.gameTurn
    }
    const { selectedForce } = newState

    console.log('tune channels', newState.allChannels, newState.channels)

    for (const channelId in channels) {
      const matchedChannel = newState.allChannels.find((channel) => channel.uniqid === channelId)

      if (!matchedChannel) {
        delete channels[channelId]
      } else {
        const isParticipant = matchedChannel.participants && matchedChannel.participants.some(p => matchedForceAndRoleFilter(p, selectedForce ? selectedForce.uniqid : undefined, newState.selectedRole))
        const allRolesIncluded = selectedForce && matchedChannel.participants && matchedChannel.participants.some(p => matchedAllRolesFilter(p, selectedForce.uniqid))

        if (isParticipant || allRolesIncluded || newState.isObserver) {
          // ok, this is a channel we wish to display
        } else {
          // no, we no longer need to display this channel
          delete channels[channelId]
        }
      }
    }

    // create any new channels & add to current channel
    newState.allChannels.forEach((channel) => {
      const channelActive = channel.participants && channel.participants.some(p => matchedForceAndRoleFilter(p, selectedForce ? selectedForce.uniqid : undefined, newState.selectedRole))
      const { selectedForce } = newState
      const allRoles = selectedForce && channel.participants && channel.participants.some(p => matchedAllRolesFilter(p, selectedForce.uniqid))

      // rename channel
      if (
        (channelActive || allRoles) &&
        channel.uniqid !== undefined &&
        !!channels[channel.uniqid]
      ) {
        channels[channel.uniqid].name = channel.name
      }

      // update observing status when observer removed from channel participants
      if (
        (!channelActive && !allRoles) &&
        newState.isObserver &&
        channel.uniqid !== undefined &&
        !!channels[channel.uniqid]
      ) {

        channels[channel.uniqid].observing = true
      } else if (
        (channelActive || allRoles) &&
        newState.isObserver &&
        channel.uniqid !== undefined &&
        !!channels[channel.uniqid]
      ) {
        channels[channel.uniqid].observing = false
      }

      // if channel already created update templates.
      if (
        (channelActive || allRoles) &&
        channel.uniqid !== undefined &&
        !!channels[channel.uniqid]
      ) {
        const { templates } = getParticipantStates(channel, newState)
        channels[channel.uniqid].templates = templates
      }

      // if channel already created
      if (
        (channelActive || allRoles) &&
        channel.uniqid !== undefined &&
        channels[channel.uniqid] !== undefined &&
        channels[channel.uniqid].messages!.findIndex(
          // @ts-ignore
          (prevMessage) => prevMessage.gameTurn === message.gameTurn
        ) === -1
      ) {
        // @ts-ignore
        channels[channel.uniqid || channel.name].messages!.unshift(message)
        return
      }

      // if no channel created yet
      if (
        (channelActive || allRoles) &&
        channel.uniqid !== undefined &&
        !channels[channel.uniqid]
      ) {
        const {
          isParticipant,
          allRolesIncluded,
          observing,
          templates
        } = getParticipantStates(channel, newState)

        if (allRolesIncluded || isParticipant || newState.isObserver) {
          channels[channel.uniqid || channel.name] = {
            participants: [], // new
            name: channel.name,
            templates,
            forceIcons: channel.participants && channel.participants.map((participant) => participant.icon),
            forceColors: channel.participants && channel.participants.map((participant) => {
              const force = newState.allForces.find((force) => force.uniqid === participant.forceUniqid)
              return (force && force.color) || '#FFF'
            }),
            messages: [],
            unreadMessageCount: 0,
            observing
          }
        }
        channels = _.defaults({}, channels)
      }
    })
  } else {
    handleMessage(chatChannel, channels, payload.details.channel, payload)
  }

  return {
    channels,
    chatChannel
  }
}

const handleMessage = (chatChannel: PlayerUiChatChannel, channels: PlayerUiChannels, channel: string, payload: MessageCustom) => {
  if (channel === CHAT_CHANNEL_ID) {
    chatChannel.messages.unshift(deepCopy(payload))
  } else if (channels[channel] && channels[channel].messages !== undefined) {
    channels[channel].messages!.unshift({
      ...deepCopy(payload),
      hasBeenRead: false,
      isOpen: false
    })

    channels[payload.details.channel].unreadMessageCount = (channels[payload.details.channel].unreadMessageCount || 0) + 1
  }
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

  const channels = {}

  newState.allChannels.forEach((channel) => {
    const {
      isParticipant,
      allRolesIncluded,
      observing,
      templates
    } = getParticipantStates(channel, newState)

    if (!newState.isObserver && !isParticipant && !allRolesIncluded) return
    else {
      // TODO: use channel name
      channels[channel.uniqid || channel.name] = {
        name: channel.name,
        templates,
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

export const openMessage = (channel: string, payloadMessage: MessageChannel, newState: PlayerUi): ChannelData => {
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

export const markAllAsRead = (channel: string, newState: PlayerUi): ChannelData => {
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
