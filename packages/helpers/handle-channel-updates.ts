import { CHAT_CHANNEL_ID, CUSTOM_MESSAGE, INFO_MESSAGE } from "@serge/config"
import {
  ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage,
  MessageChannel, MessageCustom, ChannelData, ChannelUI
} from "@serge/custom-types"
import { getParticipantStates } from "./participant-states"
import deepCopy from './deep-copy'
// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'

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
    theChannel.messages!.unshift({
      ...deepCopy(payload),
      hasBeenRead: false,
      isOpen: false
    })

    // update message count
    theChannel.unreadMessageCount = (theChannel.unreadMessageCount || 0) + 1
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

  if (payload.messageType === INFO_MESSAGE) {
    // this message is a new version of the wargame document

    // remove ourselves from any channels we're no longer a member of
    // deleteChannels(res.channels, allChannels, forceId, selectedRole, isObserver)

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

      // make note that we've procesed this channel
      delete unprocessedChannels[channelId]

      // if we're not a participant, drop out
      if (!isParticipant && !observing) {
        delete res.channels[channelId]
      } else {
        // see if there is a channel for this id
        if (isParticipant || allRolesIncluded || observing) {
          // ok, we're in this channel
          // does it exist?
          if (!res.channels[channelId]) {
            // no, create it
            const newChannel: ChannelUI = {
              uniqid: channelId,
              participants: [], // new
              name: channel.name,
              templates,
              forceIcons: channel.participants && channel.participants.map((participant) => participant.icon),
              forceColors: channel.participants && channel.participants.map((participant) => {
                const force = allForces.find((force) => force.uniqid === participant.forceUniqid)
                return (force && force.color) || '#FFF'
              }),
              messages: [],
              unreadMessageCount: 0,
              observing
            }
            // ok, we need to create one
            res.channels[channelId] = newChannel
          } else {
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
          }
          // channel will now exist, get shortcut
          const thisChannel: ChannelUI = res.channels[channelId]

          // check if we're missing a turn marker for this turn
          if (thisChannel.messages!.findIndex((prevMessage: MessageChannel) => prevMessage.gameTurn === payload.gameTurn) === -1) {
            // no turn marker found, create one
            const message: MessageChannel = {
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
              gameTurn: payload.gameTurn,
              isOpen: true,
              hasBeenRead: false,
              _id: uniqId.time(),
              message: {}
            }
            if (!thisChannel.messages) {
              thisChannel.messages = []
            }
            thisChannel.messages.unshift(message)
          }
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
