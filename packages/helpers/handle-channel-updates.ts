import { CHAT_CHANNEL_ID, INFO_MESSAGE } from "@serge/config"
import { ForceData, PlayerUiChannels, PlayerUiChatChannel, SetWargameMessage, 
  MessageChannel, MessageCustom, ChannelData } from "@serge/custom-types"
import { /*checkParticipantStates,*/ getParticipantStates } from "./participant-states"
import deepCopy from './deep-copy'
// @ts-ignore
import uniqId from 'uniqid'
import _ from 'lodash'

/** a message has been received. Put it into the correct channel */
const handleNonInfoMessage = (chatChannel: PlayerUiChatChannel, channels: PlayerUiChannels, channel: string, payload: MessageCustom) => {
  if (channel === CHAT_CHANNEL_ID) {
    chatChannel.messages.unshift(deepCopy(payload))
  } else if (channels[channel]) {
    const theChannel: ChannelData = channels[channel]

    // create the messages array, if necessary
    if(theChannel.messages === undefined) {
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
  isObserver: boolean, allTemplates:any[], allForces: ForceData[]): SetWargameMessage => {

  const res: SetWargameMessage = {
    channels: { ...channels },
    chatChannel: { ...chatChannel }
  }

  // keep track of the channels that have been processed. We'll delete the other later
  const unprocessedChannels: PlayerUiChannels = {... channels}

  const forceId: string | undefined = selectedForce ? selectedForce.uniqid : undefined

  if (payload.messageType === INFO_MESSAGE) {
    // this message is a new version of the wargame document

    // remove ourselves from any channels we're no longer a member of
    // deleteChannels(res.channels, allChannels, forceId, selectedRole, isObserver)

    // create any new channels & add to current channel
    allChannels.forEach((channel: ChannelData) => {
      if(channel.uniqid === undefined) {
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
      if(!isParticipant && !observing) {
        delete res.channels[channelId]
      } else {
        // see if there is a channel for this id
        if((isParticipant || allRolesIncluded) && !res.channels[channelId]) {
          // ok, we need to create one
          res.channels[channelId] = {
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
        }

        // rename channel, if necessary
        if (
          (isParticipant || allRolesIncluded) &&
          !!res.channels[channelId] &&
          res.channels[channelId].name !== channel.name
        ) {
          res.channels[channelId].name = channel.name
        }

        // update observing status when observer removed from channel participants
        if (
          (!isParticipant && !allRolesIncluded) &&
          isObserver &&
          !!res.channels[channelId]
        ) {
          res.channels[channelId].observing = true
        } else if (
          (isParticipant || allRolesIncluded) &&
          isObserver &&
          !!res.channels[channelId]
        ) {
          res.channels[channelId].observing = false
        }

        // if channel already created update templates.
        if (
          (isParticipant || allRolesIncluded) &&
          !!res.channels[channelId]
        ) {
          res.channels[channelId].templates = templates
        }

        
        // if channel already created
        if (
          (isParticipant || allRolesIncluded) &&
          res.channels[channelId] !== undefined &&
          res.channels[channelId].messages!.findIndex(
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
          res.channels[channelId || channel.name].messages!.unshift(message)
          return
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
