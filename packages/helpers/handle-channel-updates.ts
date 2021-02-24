import { CHAT_CHANNEL_ID, INFO_MESSAGE } from "@serge/config"
import { ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, MessageChannel, MessageCustom, ChannelData } from "@serge/custom-types"
import { checkParticipantStates, getParticipantStates } from "./participant-states"
import deepCopy from './deep-copy'
// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'

const handleNonInfoMessage = (chatChannel: PlayerUiChatChannel, channels: PlayerUiChannels, channel: string, payload: MessageCustom) => {
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

const deleteChannels = (channels: PlayerUiChannels, allChannels: ChannelData[], selectedForceId: string | undefined, selectedRole: string, isObserver: boolean) => {
  for (const channelId in channels) {
    const matchedChannel = allChannels.find((channel) => channel.uniqid === channelId)
    if (!matchedChannel) {
      delete channels[channelId]
    } else {
      const matches = checkParticipantStates(matchedChannel, selectedForceId, selectedRole, isObserver)
      if (matches.isParticipant || matches.allRolesIncluded || isObserver) {
        // ok, this is a channel we wish to display
      } else {
        // no, we no longer need to display this channel
        delete channels[channelId]
      }
    }
  }
}

const handleChannelUpdates = (payload: MessageChannel, channels: PlayerUiChannels, chatChannel: PlayerUiChatChannel,
  selectedForce: ForceData | undefined, allChannels: ChannelData[], selectedRole: string,
  isObserver: boolean, allTemplates:any[], allForces: ForceData[]): SetWargameMessage => {

  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel }
  }
  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined

  console.log('handle channels', allChannels)

  if (payload.messageType === INFO_MESSAGE) {
    // this message is a new version of the wargame document

    // remove ourselves from any channels we're no longer a member of
    deleteChannels(res.channels, allChannels, forceId, selectedRole, isObserver)

    // create any new channels & add to current channel
    allChannels.forEach((channel) => {
      if(channel.uniqid === undefined) {
        console.error('Received channel without uniqid')
      }

      const {
        isParticipant,
        allRolesIncluded,
        observing,
        templates
      } = getParticipantStates(channel, forceId, selectedRole, isObserver, allTemplates)

      // rename channel, if necessary
      if (
        (isParticipant || allRolesIncluded) &&
        !!res.channels[channel.uniqid] &&
        res.channels[channel.uniqid].name !== channel.name
      ) {
        res.channels[channel.uniqid].name = channel.name
      }

      // update observing status when observer removed from channel participants
      if (
        (!isParticipant && !allRolesIncluded) &&
        isObserver &&
        !!res.channels[channel.uniqid]
      ) {
        res.channels[channel.uniqid].observing = true
      } else if (
        (isParticipant || allRolesIncluded) &&
        isObserver &&
        !!res.channels[channel.uniqid]
      ) {
        res.channels[channel.uniqid].observing = false
      }

      // if channel already created update templates.
      if (
        (isParticipant || allRolesIncluded) &&
        !!res.channels[channel.uniqid]
      ) {
        res.channels[channel.uniqid].templates = templates
      }

      
      // if channel already created
      if (
        (isParticipant || allRolesIncluded) &&
        res.channels[channel.uniqid] !== undefined &&
        res.channels[channel.uniqid].messages!.findIndex(
          // @ts-ignore
          (prevMessage) => prevMessage.gameTurn === payload.gameTurn
        ) === -1
      ) {
      // no turn marker found, create one
      const message = {
        details: {
          channel: `infoTypeChannelMarker${uniqId.time()}`
        },
        infoType: true,
        gameTurn: payload.gameTurn
      }
        // @ts-ignore
        res.channels[channel.uniqid || channel.name].messages!.unshift(message)
        return
      }

      // if no channel created yet
      if (
        (isParticipant || allRolesIncluded) &&
        !res.channels[channel.uniqid]
      ) {

        if (allRolesIncluded || isParticipant || isObserver) {
          res.channels[channel.uniqid || channel.name] = {
            uniqid: channel.uniqid,
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
        }
        res.channels = _.defaults({}, res.channels)
      }
    })
  } else {
    handleNonInfoMessage(res.chatChannel, res.channels, payload.details.channel, payload)
  }
  
  return res
}
export default handleChannelUpdates
