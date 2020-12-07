import {
  PlayerUiMessageTypes,
  Message,
  PlayerUi,
  PlayerUiChatChannel,
  PlayerUiChannels,
  ChannelData,
  PlayerDbMessageTypes
} from '@serge/custom-types'
import { matchedForceAndRoleFilter, matchedAllRolesFilter } from './filters'
import { getParticipantStates } from './participantStates'
import copyState from '../../../Helpers/copyStateHelper'

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
export const hanldeSetLatestWargameMessage = (payload: PlayerUiMessageTypes, newState: PlayerUi):SetWargameMessage => {

  let channels: PlayerUiChannels = { ...newState.channels }
  const chatChannel: PlayerUiChatChannel = { ...newState.chatChannel }

  if (payload.hasOwnProperty('infoType')) {
    const message = {
      details: {
        channel: `infoTypeChannelMarker${uniqId.time()}`
      },
      infoType: true,
      gameTurn: payload.gameTurn
    }

    for (const channelId in channels) {
      const matchedChannel = newState.allChannels.find((channel) => channel.uniqid === channelId)

      if (!matchedChannel) {
        delete channels[channelId]
      } else {
        const isParticipant = matchedChannel.participants.some(p => matchedForceAndRoleFilter(p, newState))
        const allRolesIncluded = matchedChannel.participants.some(p => matchedAllRolesFilter(p, newState.selectedForce))

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
      const channelActive = channel.participants.some(p => matchedForceAndRoleFilter(p, newState))
      const allRoles = channel.participants.some(p => matchedAllRolesFilter(p, newState.selectedForce))

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
            forceIcons: channel.participants.map((participant) => participant.icon),
            forceColors: channel.participants.map((participant) => {
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
  } else if (!payload.hasOwnProperty('infoType')) {
    if (payload.details.channel === CHAT_CHANNEL_ID) {
      chatChannel.messages.unshift(copyState(payload))
    } else if (channels[payload.details.channel] && channels[payload.details.channel].messages !== undefined) {
      channels[payload.details.channel].messages!.unshift({
        ...copyState(payload),
        hasBeenRead: false,
        isOpen: false
      })

      channels[payload.details.channel].unreadMessageCount = (channels[payload.details.channel].unreadMessageCount || 0) + 1
    }
  }

  return {
    channels,
    chatChannel
  }
}

const reduceTurnMarkers = (message: PlayerUiMessageTypes):string => {
  if (message.infoType !== undefined) {
    return '' + message.gameTurn
  }
  return message._id
}

export const handleSetAllMEssages = (payload: Array<PlayerDbMessageTypes>, newState: PlayerUi): SetWargameMessage => {

  const messagesFiltered: Array<PlayerUiMessageTypes> = payload.map((message) => {
    if (message.infoType === true) {
      return {
        details: {
          channel: `infoTypeChannelMarker${uniqId.time()}`
        },
        infoType: true,
        gameTurn: message.gameTurn
      }
    }
    return {
      ...message,
      hasBeenRead: expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === 'read',
      isOpen: false
    }
  })

  const messages = _.uniqBy(messagesFiltered, reduceTurnMarkers)
    .filter((message) => message.details.channel === newState.chatChannel.name)

  const channels = {}

  newState.allChannels.forEach((channel) => {
    const {
      isParticipant,
      allRolesIncluded,
      observing,
      templates
    } = getParticipantStates(channel, newState)

    if (!newState.isObserver && !isParticipant && !allRolesIncluded) return

    if (allRolesIncluded || isParticipant || newState.isObserver) {
      // TODO: use channel name
      channels[channel.uniqid || channel.name] = {
        name: channel.name,
        templates,
        forceIcons: channel.participants.map((participant) => participant.icon),
        forceColors: channel.participants.map((participant) => {
          const force = newState.allForces.find((force) => force.uniqid === participant.forceUniqid)
          return (force && force.color) || '#FFF'
        }),
        messages: messages.filter((message) => message.details.channel === channel.uniqid || message.infoType === true),
        unreadMessageCount: messages.filter((message) => {
          if (message.infoType !== undefined) {
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


const openMessageChange = (message: PlayerUiMessageTypes, id: string): { message: PlayerUiMessageTypes, changed: boolean } => {
  let changed: boolean = false
  if (message.infoType === undefined /* InfoType have no id */ && message._id === id) {
    changed = true
    message.isOpen = true
    message.hasBeenRead = true
  }
  return { message, changed }
}

export const openMessage = (channel: string, payloadMessage: Message, newState: PlayerUi): ChannelData => {
  // mutating `messages` array - copyState at top of switch
  const channelMessages: Array<PlayerUiMessageTypes> = (newState.channels[channel].messages || [])
  for (let i in channelMessages) {
    const res = openMessageChange(channelMessages[i], payloadMessage._id)
    if (res.changed) {
      channelMessages[i] = res.message
      expiredStorage.setItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${payloadMessage._id}`, 'read', LOCAL_STORAGE_TIMEOUT)
      break;
    }
  }

  const unreadMessageCount = channelMessages.filter((message) => {
    if (message.infoType !== undefined) {
      return false
    } else {
      return expiredStorage.getItem(`${newState.currentWargame}-${newState.selectedForce}-${newState.selectedRole}${message._id}`) === null
    }
  }).length

  return {
    ...newState.channels[channel],
    unreadMessageCount,
    messages: channelMessages
  }
}

const closeMessageChange = (message: PlayerUiMessageTypes, id: string): { message: PlayerUiMessageTypes, changed: boolean } => {
  let changed: boolean = false
  if (message.infoType === undefined /* InfoType have no id */ && message._id === id) {
    message.isOpen = false
  }
  return { message, changed }
}


export const closeMessage = (channel: string, payloadMessage: Message, newState: PlayerUi): Array<PlayerUiMessageTypes> => {
  // mutating messages array - copyState at top of switch
  const channelMessages: Array<PlayerUiMessageTypes> = (newState.channels[channel].messages || [])

  for (let i in channelMessages) {
    const res = closeMessageChange(channelMessages[i], payloadMessage._id)
    if (res.changed) {
      channelMessages[i] = res.message
      break;
    }
  }

  return channelMessages
}

export const markAllAsRead = (channel: string, newState: PlayerUi): ChannelData => {
  const channelMessages: Array<PlayerUiMessageTypes> = (newState.channels[channel].messages || []).map((message) => {
    if (message.infoType === undefined /* InfoType have no id and hasBeenRead */) {
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
