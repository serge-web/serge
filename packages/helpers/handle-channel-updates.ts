import { CHAT_CHANNEL_ID, CUSTOM_MESSAGE, INFO_MESSAGE } from "@serge/config"
import {
  ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage,
  MessageChannel, MessageCustom, ChannelData, ChannelUI, MessageInfoType
} from "@serge/custom-types"
import { getParticipantStates } from "./participant-states"
import { deepCopy } from '@serge/helpers'
// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'

import {
  expiredStorage,
} from '@serge/config'

/** a message has been received. Put it into the correct channel */
const handleNonInfoMessage = (chatChannel: PlayerUiChatChannel, channels: PlayerUiChannels, channel: string, payload: MessageCustom) => {
  if (channel === CHAT_CHANNEL_ID) {
    chatChannel.messages.unshift(deepCopy(payload))
  } else if (channels[channel]) {
    const theChannel: ChannelUI = channels[channel]

    // create the messages array, if necessary
    if (theChannel.messages === undefined) {
      theChannel.messages = []
    }

    // now insert the message
    theChannel.messages.unshift({
      ...deepCopy(payload),
      hasBeenRead: false,
      isOpen: false
    })

    // update message count
    theChannel.unreadMessageCount = (theChannel.unreadMessageCount || 0) + 1
  }
}

/** create a new turn marker */
const createTurnMarker = (turn: number): MessageChannel => {
  const res: MessageChannel = {
    details: {
      from: {
        force: 'unset-game-turn-marker',
        forceColor: 'unset-game-turn-marker',
        role: 'unset-game-turn-marker',
        icon: 'unset-game-turn-marker',
      },
      messageType: 'turn marker',
      timestamp: new Date().toISOString(),
      channel: `infoTypeChannelMarker${uniqId.time()}`,
    },
    infoType: true,
    messageType: CUSTOM_MESSAGE,
    gameTurn: turn,
    isOpen: true,
    hasBeenRead: false,
    _id: uniqId.time(),
    message: {}
  }
  return res
}

/** create a new (empty) channel */
const createNewChannel = (channelId: string): ChannelUI => {
  const res: ChannelUI = {
    uniqid: channelId,
    participants: [],
    name: 'channelName',
    templates: [],
    forceIcons: [] ,
    forceColors: [],
    messages: [],
    unreadMessageCount: 0,
    observing: false
  }
  return res
}


const reduceTurnMarkers = (message: MessageChannel):string => {
  if (message.messageType === INFO_MESSAGE) {
    return '' + message.gameTurn
  }
  return message._id
}

export const handleAllInitialChannelMessages = (payload: Array<MessageChannel>, currentWargame: string,
  selectedForce: ForceData | undefined, selectedRole: string, allChannels: ChannelData[],
  allForces: ForceData[], chatChannel: PlayerUiChatChannel, isObserver: boolean,
  allTemplates: any[]): SetWargameMessage  => {
  const messagesFiltered: Array<MessageChannel> = payload.map((message) => {
    if (message.messageType === INFO_MESSAGE) {
      // convert the big wargame message into a turn marker
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
      hasBeenRead: expiredStorage.getItem(`${currentWargame}-${selectedForce}-${selectedRole}${message._id}`) === 'read',
      isOpen: false
    }
  })

  const chatMessages = _.uniqBy(messagesFiltered, reduceTurnMarkers)
    .filter((message) => message.details && message.details.channel === chatChannel.name)

  const channels: PlayerUiChannels = {}
  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined

  allChannels.forEach((channel: ChannelData) => {
    const {
      isParticipant,
      allRolesIncluded,
      observing,
      templates
    } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplates)

    if (isObserver || isParticipant || allRolesIncluded) {
      const newChannel: ChannelUI = {
        name: channel.name,
        uniqid: channel.uniqid,
        templates: templates,
        participants: [],
        forceIcons: channel.participants && channel.participants.map((participant) => participant.icon),
        forceColors: channel.participants && channel.participants.map((participant) => {
          const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
          return (force && force.color) || '#FFF'
        }),
        messages: messagesFiltered.filter((message) => message.details && message.details.channel === channel.uniqid || message.messageType === INFO_MESSAGE),
        unreadMessageCount: messagesFiltered.filter((message) => {
          if (message.messageType !== INFO_MESSAGE) {
            return false
          } else {
            return (
              expiredStorage.getItem(`${currentWargame}-${selectedForce}-${selectedRole}${message._id}`) === null &&
              message.details.channel === channel.uniqid
            )
          }
        }).length,
        observing: observing
      }
      // TODO: use channel uniqid
      channels[channel.uniqid] = newChannel
    }
  })

  return {
    channels,
    chatChannel: {
      ...chatChannel,
      messages: chatMessages
    }
  }
}

const handleChannelUpdates = (payload: MessageChannel, channels: PlayerUiChannels, chatChannel: PlayerUiChatChannel,
  selectedForce: ForceData | undefined, allChannels: ChannelData[], selectedRole: string,
  isObserver: boolean, allTemplates: any[], allForces: ForceData[]): SetWargameMessage => {

  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel }
  }

  // keep track of the channels that have been processed. We'll delete the other later
  const unprocessedChannels: PlayerUiChannels = { ...channels }

  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined

  // is this an information (wargame) update, or a channel message?
  if (payload.messageType === INFO_MESSAGE) {
    // this message is a new version of the wargame document

    // create any new channels & add to current channel
    allChannels.forEach((channel: ChannelData) => {
      if (channel.uniqid === undefined) {
        console.error('Received channel without uniqid')
      }

      const channelId = channel.uniqid

      const {
        isParticipant,
        allRolesIncluded,
        observing,
        templates
      } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplates)

      // make a note that we've procesed this channel
      delete unprocessedChannels[channelId]

      // are we participating in this channel?
      if (!isParticipant && !observing) {
        // we're not a participant, delete it
        delete res.channels[channelId]
      } else {
        // see if there is a channel for this id
        if (isParticipant || allRolesIncluded || observing) {
          // does this channel exist?
          if (!res.channels[channelId]) {
            // create and store it
            res.channels[channelId] = createNewChannel(channel.uniqid)
          }

          // already exists, get shortcut
          const thisChannel: ChannelUI = res.channels[channelId]

          // rename channel, if necessary
          if (thisChannel.name !== channel.name) {
            res.channels[channelId].name = channel.name
          }

          // update observing status when observer removed from channel participants
          if (isObserver !== thisChannel.observing) {
            thisChannel.observing = isObserver
          }

          // templates
          if (templates !== thisChannel.templates) {
            thisChannel.templates = templates
          }

          // force icons
          const forceIcons = channel.participants && channel.participants.map((participant) => participant.icon)
          if(forceIcons != thisChannel.forceIcons) {
            thisChannel.forceIcons = forceIcons
          }

          // force colors
          const forceColors = channel.participants && channel.participants.map((participant) => {
            const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
            return (force && force.color) || '#FFF'
          })
          if(forceColors != thisChannel.forceColors) {
            thisChannel.forceColors = forceColors
          }
        }
        // channel will now exist, get shortcut
        const thisChannel: ChannelUI = res.channels[channelId]

        // check if we're missing a turn marker for this turn
        if (!thisChannel.messages!.find((prevMessage: MessageChannel) => prevMessage.gameTurn === payload.gameTurn)) {
          // no messages, or no turn marker found, create one
          const message: MessageChannel = createTurnMarker(payload.gameTurn)

          // if messages array is missing, create one
          if (!thisChannel.messages) {
            thisChannel.messages = []
          }
          thisChannel.messages.unshift(message)
        }
      }
    })

    // delete any unprocessed channels
    for (var key in unprocessedChannels) {
      // this key didn't get processed when we looped through all main channels. So,
      // it must have been deleted
      delete res.channels[key]
    }
  } else {
    handleNonInfoMessage(res.chatChannel, res.channels, payload.details.channel, payload)
  }

  return res
}
export default handleChannelUpdates
