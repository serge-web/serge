import { expiredStorage, CHAT_CHANNEL_ID, CUSTOM_MESSAGE, INFO_MESSAGE, INFO_MESSAGE_CLIPPED, CHANNEL_COLLAB } from '@serge/config'
import {
  ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, MessageChannel,
  MessageCustom, ChannelUI, MessageInfoType, MessageInfoTypeClipped, TemplateBodysByKey,
  Role, ChannelTypes, PlayerLogInstance, PlayerLog
} from '@serge/custom-types'
import { getParticipantStates } from './participant-states'
import deepCopy from './deep-copy'
import uniqId from 'uniqid'
import mostRecentOnly from './most-recent-only'
import newestPerRole from './newest-per-role'
import { CoreParticipant } from '@serge/custom-types/participant'

/** a message has been received. Put it into the correct channel */
const handleNonInfoMessage = (data: SetWargameMessage, channel: string, payload: MessageCustom) => {
  const sourceRole: string = payload.details.from.roleId
  const logger: PlayerLogInstance = {
    roleId: payload.details.from.roleId,
    lastMessageTitle: payload.details.messageType,
    lastMessageTime: payload.details.timestamp
  }
  data.playerLog[sourceRole] = logger
  if (channel === CHAT_CHANNEL_ID) {
    data.chatChannel.messages.unshift(deepCopy(payload))
  } else if (data.channels[channel]) {
    const theChannel: ChannelUI = data.channels[channel]

    // create the messages array, if necessary
    if (theChannel.messages === undefined) {
      theChannel.messages = []
    }

    // if this message has a reference number, we should delete any previous message
    // with that reference number before we insert the message
    if (payload.message.Reference) {
      // remove any existing RFI with this reference number. Note: we can't use
      // filter() array function since it produces a new array, which would
      // have a new reference, and wouldn't get returned as a parameter
      theChannel.messages.forEach((msg, idx) => {
        if (msg.messageType === CUSTOM_MESSAGE &&
          msg.message.Reference === payload.message.Reference) {
          theChannel.messages?.splice(idx, 1)
        }
      })
    }

    theChannel.messages.unshift({
      ...deepCopy(payload),
      hasBeenRead: false,
      isOpen: false
    })

    // update message count
    theChannel.unreadMessageCount = (theChannel.unreadMessageCount || 0) + 1
  }
}

/** create a new (empty) channel */
const createNewChannel = (channelId: string, channel: ChannelTypes): ChannelUI => {
  const res: ChannelUI = {
    uniqid: channelId,
    name: 'channelName',
    cData: channel,
    templates: [],
    forceIcons: [],
    forceColors: [],
    messages: [],
    unreadMessageCount: 0,
    observing: false
  }
  return res
}

export const isMessageHasBeenRead = (id: string, currentWargame: string, forceId: string | undefined, selectedRole: Role['roleId']): boolean => (
  expiredStorage.getItem(`${currentWargame}-${forceId || ''}-${selectedRole}-${id}`) === 'read'
)

export const clipInfoMEssage = (message: MessageInfoType | MessageInfoTypeClipped, hasBeenRead = false): MessageInfoTypeClipped => {
  if (message.messageType !== INFO_MESSAGE && message.messageType !== INFO_MESSAGE_CLIPPED) {
    throw new TypeError(`Message should be INFO_MESSAGE: "${INFO_MESSAGE}" type`)
  }
  return {
    messageType: INFO_MESSAGE_CLIPPED,
    details: {
      channel: `infoTypeChannelMarker${uniqId.time()}`
    },
    infoType: true,
    gameTurn: message.gameTurn,
    isOpen: false,
    hasBeenRead,
    _id: message._id
  }
}

export const handleAllInitialChannelMessages = (
  payload: Array<MessageInfoType | MessageCustom>,
  currentWargame: string,
  selectedForce: ForceData | undefined,
  selectedRole: Role['roleId'],
  allChannels: ChannelTypes[],
  allForces: ForceData[],
  chatChannel: PlayerUiChatChannel,
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey
): SetWargameMessage => {
  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined
  const messagesReduced: Array<MessageChannel> = payload.map((message) => {
    const hasBeenRead = typeof message._id === 'string' && isMessageHasBeenRead(message._id, currentWargame, forceId, selectedRole)

    if (message.messageType === INFO_MESSAGE) {
      return clipInfoMEssage(message, hasBeenRead)
    } else {
      return {
        ...message,
        hasBeenRead: hasBeenRead,
        isOpen: false
      }
    }
  })

  // reduce messages, so we just have single turn marker, and most recent
  // version of referenced messages
  const messagesFiltered = mostRecentOnly(messagesReduced)

  const playerLog = newestPerRole(payload)

  const chatMessages = messagesFiltered
    .filter((message) => message.details && message.details.channel === chatChannel.name)

  const channels: PlayerUiChannels = {}

  allChannels.forEach((channel: ChannelTypes) => {
    const {
      isParticipant,
      observing,
      templates
    } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplatesByKey)

    const isCollab = channel.channelType === CHANNEL_COLLAB

    const filterMessages = () => {
      return messagesFiltered.filter((message) => (message.details && message.details.channel === channel.uniqid) || (!isCollab && message.messageType === INFO_MESSAGE_CLIPPED))
    }

    if (isObserver || isParticipant) {
      // TODO: define type for force Icons
      const forceIcons: any[] = []
      const forceColors: string[] = []
      for (const { forceUniqid } of channel.participants) {
        const force = allForces.find((force) => force.uniqid === forceUniqid)
        forceIcons.push((force && force.iconURL) || force?.icon)
        forceColors.push((force && force.color) || '#FFF')
      }

      const messages = filterMessages()
      // grow the existing channel definition to include the new UI-focussed entries
      const newChannel: ChannelUI = {
        name: channel.name,
        uniqid: channel.uniqid,
        templates: templates,
        forceIcons,
        forceColors,
        messages,
        unreadMessageCount: messages.filter(message => !message.hasBeenRead && message.messageType !== INFO_MESSAGE_CLIPPED).length,
        observing: observing,
        cData: channel
      }

      channels[channel.uniqid] = newChannel
    }
  })

  return {
    channels,
    chatChannel: {
      ...chatChannel,
      messages: chatMessages
    },
    playerLog: playerLog
  }
}

const handleChannelUpdates = (
  payload: MessageChannel,
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  selectedForce: ForceData | undefined,
  allChannels: ChannelTypes[],
  selectedRole: Role['roleId'],
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  allForces: ForceData[],
  playerLog: PlayerLog): SetWargameMessage => {
  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel },
    playerLog: deepCopy(playerLog)
  }

  // keep track of the channels that have been processed. We'll delete the other later
  const unprocessedChannels: PlayerUiChannels = { ...channels }

  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined

  // is this an information (wargame) update, or a channel message?
  if (payload.messageType === INFO_MESSAGE_CLIPPED) {
    // this message is a new version of the wargame document

    // create any new channels & add to current channel
    allChannels.forEach((channel: ChannelTypes) => {
      if (channel.uniqid === undefined) {
        console.error('Received channel without uniqid')
      }

      const channelId = channel.uniqid

      const {
        isParticipant,
        observing,
        templates
      } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplatesByKey)

      // make a note that we've procesed this channel
      delete unprocessedChannels[channelId]

      // are we participating in this channel?
      if (!isParticipant && !observing) {
        // we're not a participant, delete it
        delete res.channels[channelId]
      } else {
        // see if there is a channel for this id
        if (isParticipant || observing) {
          // does this channel exist?
          if (!res.channels[channelId]) {
            // create and store it
            res.channels[channelId] = createNewChannel(channel.uniqid, channel)
          }

          // already exists, get shortcut
          const thisChannel: ChannelUI = res.channels[channelId]

          // rename channel, if necessary
          if (thisChannel.name !== channel.name) {
            res.channels[channelId].name = channel.name
          }

          // update observing status when observer removed from channel participants
          thisChannel.observing = observing
          // if (observing !== thisChannel.observing) {
          // }

          // templates
          if (templates !== thisChannel.templates) {
            thisChannel.templates = templates
          }

          // force icons
          const cParts: CoreParticipant[] = channel.participants
          const forceIcons = cParts && cParts.map((participant) => {
            const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
            return (force && force.iconURL) || force?.icon
          })
          if (forceIcons !== thisChannel.forceIcons) {
            thisChannel.forceIcons = forceIcons
          }

          // force colors
          const forceColors = cParts && cParts.map((participant) => {
            const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
            return (force && force.color) || '#FFF'
          })
          if (forceColors !== thisChannel.forceColors) {
            thisChannel.forceColors = forceColors
          }
        }
        // channel will now exist, get shortcut
        const thisChannel: ChannelUI = res.channels[channelId]

        // check if this is a collab channel, since we don't fire turn markers into collab channels
        const collabChannel = thisChannel.cData && thisChannel.cData.channelType === CHANNEL_COLLAB

        // check if we're missing a turn marker for this turn
        if (thisChannel.messages && !collabChannel) {
          if (!thisChannel.messages.find((prevMessage: MessageChannel) => prevMessage.gameTurn === payload.gameTurn)) {
            // no messages, or no turn marker found, create one
            const message: MessageChannel = clipInfoMEssage(payload, false)

            // if messages array is missing, create one
            // NO: we've already established this can't be missing
            // if (!thisChannel.messages) {
            //   thisChannel.messages = []
            // }
            thisChannel.messages.unshift(message)
          }
        }
      }
    })

    // delete any unprocessed channels
    for (const key in unprocessedChannels) {
      // this key didn't get processed when we looped through all main channels. So,
      // it must have been deleted
      delete res.channels[key]
    }
  } else {
    handleNonInfoMessage(res, payload.details.channel, payload)
  }

  return res
}
export default handleChannelUpdates
