import { CHANNEL_CHAT, CHANNEL_COLLAB, CHAT_CHANNEL_ID, CUSTOM_MESSAGE, expiredStorage, INFO_MESSAGE, INFO_MESSAGE_CLIPPED } from 'src/config'
import {
  ChannelTypes, ChannelUI, ForceData, MessageChannel,
  MessageCustom, MessageInfoType, MessageInfoTypeClipped, PlayerMessage, PlayerMessageLog, PlayerUiChannels, PlayerUiChatChannel, Role, SetWargameMessage, TemplateBodysByKey
} from 'src/custom-types'
import uniqId from 'uniqid'
import deepCopy from './deep-copy'
import { buildForceIconsColorsNames, updateForceColors, updateForceIcons, updateForceNames } from './handle-channel-updates-force'
import mostRecentOnly from './most-recent-only'
import newestPerRole from './newest-per-role'
import { getParticipantStates } from './participant-states'

/** a message has been received. Put it into the correct channel
 * @param { SetWargameMessage } data
 * @param { string } channel id of the cahnnel
 * @param { MessageCustom } message the new message
 */
const handleNonInfoMessage = (data: SetWargameMessage, channel: string, message: MessageCustom, playerId: string) => {
  const sourceRole: string = message.details.from.roleId
  const logger: PlayerMessage = {
    roleId: message.details.from.roleId,
    lastMessageTitle: message.templateId,
    lastMessageTime: message.details.timestamp,
    hasBeenRead: !!message.hasBeenRead,
    _id: message._id
  }

  data.playerMessageLog[sourceRole] = logger

  if (channel === CHAT_CHANNEL_ID) {
    data.chatChannel.messages.unshift(deepCopy(message))
  } else if (data.channels[channel]) {
    const theChannel: ChannelUI = data.channels[channel]

    // create the messages array, if necessary
    if (theChannel.messages === undefined) {
      theChannel.messages = []
    }

    // if this message has a reference number, we should delete any previous message
    // with that reference number before we insert the message
    //
    // start off with lower-case reference, as used in PFT
    if (message.message?.reference) {
      // remove any existing RFI with this reference number. Note: we can't use
      // filter() array function since it produces a new array, which would
      // have a new reference, and wouldn't get returned as a parameter
      theChannel.messages.forEach((msg, idx) => {
        if (msg.messageType === CUSTOM_MESSAGE &&
          (msg as MessageCustom).message.reference === message.message.reference) {
          theChannel.messages?.splice(idx, 1)
        }
      })
    } else if (message.message?.Reference) {
      // remove any existing RFI with this reference number. Note: we can't use
      // filter() array function since it produces a new array, which would
      // have a new reference, and wouldn't get returned as a parameter
      theChannel.messages.forEach((msg, idx) => {
        if (msg.messageType === CUSTOM_MESSAGE &&
          (msg as MessageCustom).message.Reference === message.message.Reference) {
          theChannel.messages?.splice(idx, 1)
        }
      })
    }

    const ourMessage = message.details.from.roleId === playerId

    const newObj: MessageChannel = {
      ...deepCopy(message),
      hasBeenRead: ourMessage,
      isOpen: false
    }

    // check the channel doesn't already contain the message
    // we can mistakenly register for updates twice, which gives the appearance
    // of duplicate messages
    const present = theChannel.messages.some((msg: MessageChannel) => msg._id === message._id)
    if (!present) {
      // chat messages need to go at the end, not the start
      if (theChannel.cData.channelType === CHANNEL_CHAT) {
        theChannel.messages.push(newObj)
      } else {
        theChannel.messages.unshift(newObj)
      }
      // update message count, if it's not from us
      if (!ourMessage) {
        theChannel.unreadMessageCount = (theChannel.unreadMessageCount || 0) + 1
      }
    } else {
      console.warn('Duplicate message ditched. But, we should be preventing this in DBProvider', message)
    }
  }
}

export const handleNewMessageData = (
  payload: MessageChannel,
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  playerMessageLog: PlayerMessageLog,
  playerId: string): SetWargameMessage => {
  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel },
    playerMessageLog: deepCopy(playerMessageLog)
  }
  if (payload.messageType === INFO_MESSAGE_CLIPPED) {
    // just push it into the channel, or ignore it?
    const channelId = payload.details.channel
    const channel = channels[channelId]
    if (!channel.messages) {
      channel.messages = []
    }
    channel.messages.unshift(payload)
  } else {
    handleNonInfoMessage(res, payload.details.channel, payload, playerId)
  }
  return res
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

const isMessageHasBeenRead = (id: string, currentWargame: string, forceId: string | undefined, selectedRole: Role['roleId']): boolean => (
  expiredStorage.getItem(`${currentWargame}-${forceId || ''}-${selectedRole}-${id}`) === 'read'
)

// Clip an info message for a specified game turn.
const clipInfoMEssage = (gameTurn: number, messageType: string | undefined, id: string | undefined, hasBeenRead = false): MessageInfoTypeClipped => {
  if (messageType !== undefined && messageType !== INFO_MESSAGE && messageType !== INFO_MESSAGE_CLIPPED) {
    throw new TypeError(`Message should be INFO_MESSAGE: "${messageType}" type`)
  }
  return {
    messageType: INFO_MESSAGE_CLIPPED,
    details: {
      channel: `infoTypeChannelMarker${uniqId.time()}`
    },
    infoType: true,
    gameTurn: gameTurn,
    isOpen: false,
    hasBeenRead,
    _id: id
  }
}

// Transform a message to the appropriate format based on its type.
const transformMessage = (
  message: MessageInfoType | MessageCustom,
  currentWargame: string,
  forceId: string | undefined,
  selectedRole: Role['roleId']
): MessageChannel => {
  const hasBeenRead = typeof message._id === 'string' && isMessageHasBeenRead(message._id, currentWargame, forceId, selectedRole)

  if (message.messageType === INFO_MESSAGE || message.messageType === undefined) {
    return clipInfoMEssage(message.gameTurn, message.messageType, message._id, hasBeenRead)
  } else {
    return {
      ...message,
      hasBeenRead: hasBeenRead,
      isOpen: false
    }
  }
}

// Filter admin messages for a specific chat channel.
const filterAdminMessages = (
  messages: MessageChannel[],
  chatChannelName: string
): MessageChannel[] => messages.filter((message) => message.details && message.details.channel === chatChannelName)

// Create or update a channel UI based on the provided parameters.
const createOrUpdateChannelUI = (
  channel: ChannelTypes,
  forceId: string | undefined,
  selectedRole: Role['roleId'],
  isObserver: boolean,
  isUmpire: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  messagesFiltered: MessageChannel[],
  allForces: ForceData[]
): ChannelUI | undefined => {
  const { isParticipant, observing, templates } = getParticipantStates(
    channel,
    forceId,
    selectedRole,
    isObserver,
    allTemplatesByKey
  )

  if ((isUmpire && isObserver) || isParticipant) {
    const { forceIcons, forceColors, forceNames } = buildForceIconsColorsNames(channel.participants, allForces)
    const isCollab = channel.channelType === CHANNEL_COLLAB
    const messages = messagesFiltered.filter(
      (message) => (message.details && message.details.channel === channel.uniqid) || (!isCollab && message.messageType === INFO_MESSAGE_CLIPPED)
    )

    // channels expect messages to be in reverse chronological order, but database supplies them
    // in ascending order. So, reverse order
    const reverseMessages = messages.reverse()

    return {
      name: channel.name,
      uniqid: channel.uniqid,
      templates: templates,
      forceIcons,
      forceColors,
      forceNames,
      messages: reverseMessages,
      unreadMessageCount: messages.filter((message) => !message.hasBeenRead && message.messageType !== INFO_MESSAGE_CLIPPED).length,
      observing: observing,
      cData: channel
    }
  }

  return undefined
}

// Handle updates to channels and update the wargame state accordingly.
export const handleAllInitialChannelMessages = (
  payload: Array<MessageInfoType | MessageCustom>,
  currentWargame: string,
  selectedForce: ForceData | undefined,
  selectedRole: Role['roleId'],
  allChannels: ChannelTypes[],
  allForces: ForceData[],
  chatChannel: PlayerUiChatChannel,
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  isUmpire: boolean
): SetWargameMessage => {
  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined
  const messagesReduced: MessageChannel[] = payload.map((message) => transformMessage(message, currentWargame, forceId, selectedRole))
  // reduce messages, so we just have single turn marker, and most recent
  // version of referenced messages
  const messagesFiltered = mostRecentOnly(messagesReduced)
  const adminMessages = filterAdminMessages(messagesFiltered, chatChannel.name)
  const channels: PlayerUiChannels = {}

  allChannels.forEach((channel: ChannelTypes) => {
    // grow the existing channel definition to include the new UI-focussed entries
    const newChannel = createOrUpdateChannelUI(
      channel,
      forceId,
      selectedRole,
      isObserver,
      isUmpire,
      allTemplatesByKey,
      messagesFiltered,
      allForces
    )

    if (newChannel) {
      channels[channel.uniqid] = newChannel
    }
  })
    
  return {
    channels,
    chatChannel: {
      ...chatChannel,
      messages: adminMessages
    },
    playerMessageLog: newestPerRole(messagesFiltered as Array<MessageCustom>)
  }
}

// Process a channel and update the wargame state accordingly.
const processChannel = (
  channel: ChannelTypes,
  forceId: string | undefined,
  selectedRole: Role['roleId'],
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  allForces: ForceData[],
  res: SetWargameMessage,
  gameTurn: number,
  messageId: string,
  unprocessedChannels: PlayerUiChannels
): void => {
  if (channel.uniqid === undefined) {
    console.error('Received channel without uniqid')
    return
  }

  const channelId = channel.uniqid
  const { isParticipant, observing, templates } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplatesByKey)
  
  // make a note that we've procesed this channel
  delete unprocessedChannels[channelId]
  
  // are we participating in this channel?
  if (!isParticipant && !observing) {
    // we're not a participant, delete it
    delete res.channels[channelId]
  } else {
    updateOrCreateChannel(channel, res, channelId, templates, observing, allForces)
    updateChannelMessages(gameTurn, messageId, res.channels[channelId])
  }
}

const updateOrCreateChannel = (channel: ChannelTypes, res: SetWargameMessage, channelId: string, templates: any, observing: boolean, allForces: ForceData[]): void => {
  // does this channel exist?
  if (!res.channels[channelId]) {
    // create and store it
    res.channels[channelId] = createNewChannel(channel.uniqid, channel)
  }
  
  // already exists, get shortcut
  const thisChannel: ChannelUI = res.channels[channelId]
  
  // rename channel, if necessary
  if (thisChannel.name !== channel.name) {
    // we're not a participant, delete it
    res.channels[channelId].name = channel.name
  }
  
  // update observing status when observer removed from channel participants
  thisChannel.observing = observing

  // if (observing !== thisChannel.observing) {
  // }

  if (templates !== thisChannel.templates) {
    thisChannel.templates = templates
  }

  updateForceIcons(thisChannel, channel.participants, allForces)

  updateForceColors(thisChannel, channel.participants, allForces)

  updateForceNames(thisChannel, channel.participants, allForces)
}

const updateChannelMessages = (gameTurn: number, messageId: string, thisChannel: ChannelUI): void => {
  // check if this is a collab channel, since we don't fire turn markers into collab channels
  const collabChannel = thisChannel.cData && thisChannel.cData.channelType === CHANNEL_COLLAB
  
  // check if we're missing a turn marker for this turn
  if (thisChannel.messages && !collabChannel) {
    if (!thisChannel.messages.find((prevMessage: MessageChannel) => (prevMessage as MessageInfoTypeClipped | MessageCustom).gameTurn === gameTurn)) {
      // no messages, or no turn marker found, create one  
      const message: MessageChannel = clipInfoMEssage(gameTurn, undefined, messageId, false)
      thisChannel.messages.unshift(message)
    }
  }
}

const handleChannelUpdates = (
  allChannels: ChannelTypes[],
  messageId: string,
  gameTurn: number,
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  selectedForce: ForceData | undefined,
  selectedRole: Role['roleId'],
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  allForces: ForceData[],
  playerMessageLog: PlayerMessageLog): SetWargameMessage => {
  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel },
    playerMessageLog: deepCopy(playerMessageLog)
  }
  // keep track of the channels that have been processed. We'll delete the other later
  const unprocessedChannels: PlayerUiChannels = { ...channels }

  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined
  
  // create any new channels & add to current channel
  allChannels.forEach((channel: ChannelTypes) => {
    processChannel(channel, forceId, selectedRole, isObserver, allTemplatesByKey, allForces, res, gameTurn, messageId, unprocessedChannels)
  })

  // delete any unprocessed channels
  for (const key in unprocessedChannels) {
    // this key didn't get processed when we looped through all main channels. So,
    // it must have been deleted
    delete res.channels[key]
  }

  return res
}

export default handleChannelUpdates
