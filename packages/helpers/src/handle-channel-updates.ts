import { expiredStorage, CHAT_CHANNEL_ID, CUSTOM_MESSAGE, INFO_MESSAGE, INFO_MESSAGE_CLIPPED } from '@serge/config'
import {
  ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, MessageChannel,
  MessageCustom, ChannelData, ChannelUI, MessageInfoType, MessageInfoTypeClipped, TemplateBodysByKey, Role, MessageDetailsFrom, CollaborationDetails
} from '@serge/custom-types'
import { getParticipantStates } from './participant-states'
import deepCopy from './deep-copy'
import uniqId from 'uniqid'
import mostRecentOnly from './most-recent-only'
import getRoleFromName from './get-role-from-name'

/** a message has been received. Put it into the correct channel */
const handleNonInfoMessage = (data: SetWargameMessage, channel: string, payload: MessageCustom, selectedForceName?: string) => {
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

  if (payload.details.messageType === 'RFI') {
    // we need to stick it into the RFI messages, replacing any previous version

    // remove any existing RFI with this reference number. Note: we can't use
    // filter() array function since it produces a new array, which would
    // have a new reference, and wouldn't get returned as a parameter
    data.rfiMessages.forEach((item, idx) => {
      if (item.message.Reference === payload.message.Reference) {
        data.rfiMessages.splice(idx, 1)
      }
    })
    data.rfiMessages.unshift(deepCopy(payload))
    // rfiMessages = rfiMessages.filter((message) => message.message.Reference !== payload.message.Reference)
  }
  // lastly, sort out the message number
  data.nextMsgReference = selectedForceName && payload.messageType === CUSTOM_MESSAGE
    ? refNumberFor(payload.message && payload.message.Reference, data.nextMsgReference, selectedForceName)
    : data.nextMsgReference
}

// this method was an unnecessary duplicate of clipInfoMEssage
// /** create a new turn marker */
// const createTurnMarker = (turn: number): MessageChannel => {
//   const res: MessageChannel = {
//     details: {
//       from: {
//         force: 'unset-game-turn-marker',
//         forceColor: 'unset-game-turn-marker',
//         role: 'Turn ' + turn,
//         icon: 'unset-game-turn-marker'
//       },
//       messageType: 'Turn ' + turn,
//       timestamp: new Date().toISOString(),
//       channel: `infoTypeChannelMarker${uniqId.time()}`
//     },
//     infoType: true,
//     messageType: CUSTOM_MESSAGE,
//     gameTurn: turn,
//     isOpen: true,
//     hasBeenRead: false,
//     _id: uniqId.time(),
//     message: {}
//   }
//   return res
// }

/** create a new (empty) channel */
const createNewChannel = (channelId: string): ChannelUI => {
  const res: ChannelUI = {
    uniqid: channelId,
    participants: [],
    name: 'channelName',
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

/** helper function, to return the next reference number for this force
 * @param {string} msgRef this message reference
 * @param {number} string the current counter
 * @param {string} selectedForceName the selected force
 */
export const refNumberFor = (msgRef: string | undefined, current: number, selectedForceName?: string): number => {
  if (msgRef !== undefined) {
    // see if it starts with this force
    if (selectedForceName && msgRef.startsWith(selectedForceName)) {
      // strip out the force name
      const remainder = msgRef.substr(selectedForceName.length, msgRef.length - selectedForceName.length)
      // strip out the number
      const parts = remainder.split('-')
      // check the first match is zero length, that prevents `blue-1` matching `blue-10`
      if (parts.length === 2 && parts[0].length === 0) {
        const number = +parts[1] + 1
        return Math.max(number, current)
      } else {
        return current
      }
    }
  }
  return current
}

export const handleAllInitialChannelMessages = (
  payload: Array<MessageInfoType | MessageCustom>,
  currentWargame: string,
  selectedForce: ForceData | undefined,
  selectedRole: Role['roleId'],
  allChannels: ChannelData[],
  allForces: ForceData[],
  chatChannel: PlayerUiChatChannel,
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey
): SetWargameMessage => {
  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined
  let nextMsgReference = 0
  const messagesReduced: Array<MessageChannel> = payload.map((message) => {
    const hasBeenRead = typeof message._id === 'string' && isMessageHasBeenRead(message._id, currentWargame, forceId, selectedRole)

    if (message.messageType === INFO_MESSAGE) {
      return clipInfoMEssage(message, hasBeenRead)
    } else {
      nextMsgReference = refNumberFor(message.message && message.message.Reference, nextMsgReference, selectedForce?.name)
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

  const chatMessages = messagesFiltered
    .filter((message) => message.details && message.details.channel === chatChannel.name)

  const channels: PlayerUiChannels = {}

  allChannels.forEach((channel: ChannelData) => {
    const {
      isParticipant,
      allRolesIncluded,
      observing,
      templates
    } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplatesByKey)

    const filterMessages = () => {
      return messagesFiltered.filter((message) => (message.details && message.details.channel === channel.uniqid) || message.messageType === INFO_MESSAGE_CLIPPED)
    }

    if (isObserver || isParticipant || allRolesIncluded) {
      // TODO: define type for force Icons
      const forceIcons: any[] = []
      const forceColors: string[] = []
      for (const { forceUniqid } of channel.participants) {
        const force = allForces.find((force) => force.uniqid === forceUniqid)
        forceIcons.push((force && force.iconURL) || force?.icon)
        forceColors.push((force && force.color) || '#FFF')
      }

      const messages = filterMessages()
      const newChannel: ChannelUI = {
        name: channel.name,
        uniqid: channel.uniqid,
        templates: templates,
        participants: channel.participants,
        forceIcons,
        forceColors,
        messages,
        unreadMessageCount: messages.filter(message => !message.hasBeenRead && message.messageType !== INFO_MESSAGE_CLIPPED).length,
        observing: observing,
        format: channel.format,
        collabOptions: channel.collabOptions
      }

      // TODO: use channel uniqid
      channels[channel.uniqid] = newChannel
    }
  })

  // also sort out the RFI messages
  const rfiMessages = messagesFiltered.filter((message: MessageChannel) => {
    if (message.messageType === CUSTOM_MESSAGE) {
      const custom = message as MessageCustom

      // TODO: retire this support for legacy code in Autumn 2021
      // see if this has a legacy role
      const from: MessageDetailsFrom = custom.details.from
      const fromAny: any = from
      if (typeof fromAny.role === 'string') {
        // ok, it's legacy data now called `roleName`
        from.roleName = fromAny.role
        const role = getRoleFromName(allForces, custom.details.from.force, from.roleName)
        // try to sort out the role id
        if (role) {
          from.roleId = role.roleId
          if (!from.forceId) {
            // now try to sort the force
            const force = allForces.find((force: ForceData) => force.name === custom.details.from.force)
            if (force) {
              from.forceId = force.uniqid
            }
          }
        }
      }

      // see if this is a legacy owner
      // TODO: retire this support in Autumn 2021
      if (custom.details.collaboration) {
        const collabAny: any = custom.details.collaboration
        if (collabAny.owner && typeof collabAny.owner === 'string') {
          // yes - update data model
          const collab: CollaborationDetails | undefined = custom.details.collaboration
          collab.owner = { forceId: '', forceName: '', roleId: '', roleName: collabAny.owner }
        }
      }

      return custom.details.messageType === 'RFI'
    }
    return false
  })
  const rfiMessagesCustom = rfiMessages as Array<MessageCustom>

  return {
    channels,
    chatChannel: {
      ...chatChannel,
      messages: chatMessages
    },
    rfiMessages: rfiMessagesCustom,
    nextMsgReference: nextMsgReference
  }
}

const handleChannelUpdates = (
  payload: MessageChannel,
  channels: PlayerUiChannels,
  chatChannel: PlayerUiChatChannel,
  rfiMessages: MessageCustom[],
  nextMsgReference: number,
  selectedForce: ForceData | undefined,
  allChannels: ChannelData[],
  selectedRole: Role['roleId'],
  isObserver: boolean,
  allTemplatesByKey: TemplateBodysByKey,
  allForces: ForceData[]): SetWargameMessage => {
  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel },
    rfiMessages: deepCopy(rfiMessages),
    nextMsgReference: nextMsgReference
  }

  // keep track of the channels that have been processed. We'll delete the other later
  const unprocessedChannels: PlayerUiChannels = { ...channels }

  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined

  // is this an information (wargame) update, or a channel message?
  if (payload.messageType === INFO_MESSAGE_CLIPPED) {
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
      } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplatesByKey)

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
          thisChannel.observing = observing
          // if (observing !== thisChannel.observing) {
          // }

          // templates
          if (templates !== thisChannel.templates) {
            thisChannel.templates = templates
          }

          // force icons
          const forceIcons = channel.participants && channel.participants.map((participant) => {
            const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
            return (force && force.iconURL) || force?.icon
          })
          if (forceIcons !== thisChannel.forceIcons) {
            thisChannel.forceIcons = forceIcons
          }

          // force colors
          const forceColors = channel.participants && channel.participants.map((participant) => {
            const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
            return (force && force.color) || '#FFF'
          })
          if (forceColors !== thisChannel.forceColors) {
            thisChannel.forceColors = forceColors
          }
        }
        // channel will now exist, get shortcut
        const thisChannel: ChannelUI = res.channels[channelId]

        // check if we're missing a turn marker for this turn
        if (thisChannel.messages) {
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
    handleNonInfoMessage(res, payload.details.channel, payload, selectedForce?.name)
  }

  return res
}
export default handleChannelUpdates
