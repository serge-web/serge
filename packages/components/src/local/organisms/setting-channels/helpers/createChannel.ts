import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_MAPPING, CollaborativePermission, InitialStates, PARTICIPANT_CHAT, PARTICIPANT_COLLAB, PARTICIPANT_CUSTOM, PARTICIPANT_MAPPING, SpecialChannelTypes } from '@serge/config'
import { ChannelCollab, ChannelTypes, ForceData } from '@serge/custom-types'
import { ChannelChat, ChannelCustom, ChannelMapping } from '@serge/custom-types/channel-data'
import { CoreParticipant, ParticipantChat, ParticipantCollab, ParticipantCustom, ParticipantMapping } from '@serge/custom-types/participant'
import uniqid from 'uniqid'
import { generateSubscriptionId } from './createParticipant'

// Create uniq chanel name
const generateChannelName = (channels: ChannelTypes[], key = 1, exclude = -1, defName = 'New Channel'): string => {
  let name: string = defName
  if (key > 1) name += ' ' + key
  const channelWithSameName = channels.find((channel, key) => (name === channel.name && key !== exclude))
  if (typeof channelWithSameName !== 'undefined') {
    return generateChannelName(channels, key + 1, exclude, defName)
  }
  return name
}

const createChannel = (
  // all channels list, need to create uniq name
  channels: ChannelTypes[],
  // for which force we need to create Original Template if format given
  defaultForce: ForceData,
  // On special channel creation
  format?: SpecialChannelTypes
): ChannelTypes => {
  // IF format given apply Original template based on format
  if (typeof format !== 'undefined') {
    // Create
    switch (format) {
      case SpecialChannelTypes.CHANNEL_COLLAB: {
        // create new participant
        const participant: ParticipantCollab = {
          force: defaultForce.name,
          forceUniqid: defaultForce.uniqid,
          roles: [],
          subscriptionId: generateSubscriptionId(),
          pType: PARTICIPANT_COLLAB,
          canCreate: true,
          viewUnreleasedVersions: true,
          permission: CollaborativePermission.CannotCollaborate
        }
        // add participant to channel
        participants.push(participant)

        const res: ChannelCollab = {
          uniqid: uniqid.time(),
          name: generateChannelName(channels),
          channelType: CHANNEL_COLLAB,
          requestChangesVerbs: ['Request Changes'],
          approveVerbs: ['Approve'],
          initialState: InitialStates.PENDING_REVIEW,
          extraColumns: [],
          releaseVerbs: ['Release'],
          newMessageTemplate: undefined,
          responseTemplate: undefined,
          participants: [participant]
        }
        return res
      }
      case SpecialChannelTypes.CHANNEL_MAPPING: {
        const participant: ParticipantMapping = {
          force: defaultForce.name,
          forceUniqid: defaultForce.uniqid,
          roles: [],
          subscriptionId: generateSubscriptionId(),
          pType: PARTICIPANT_MAPPING
        }
        const res: ChannelMapping = {
          uniqid: uniqid.time(),
          name: generateChannelName(channels),
          channelType: CHANNEL_MAPPING,
          participants: [participant]
        }
        return res
      }
      case SpecialChannelTypes.CHANNEL_CHAT:
      default: {
        const participant: ParticipantChat = {
          force: defaultForce.name,
          forceUniqid: defaultForce.uniqid,
          roles: [],
          subscriptionId: generateSubscriptionId(),
          pType: PARTICIPANT_CHAT
        }
        const res: ChannelChat = {
          uniqid: uniqid.time(),
          name: generateChannelName(channels),
          channelType: CHANNEL_CHAT,
          participants: [participant]
        }
        return res
      }
    }
  }
  const participant: ParticipantCustom = {
    force: defaultForce.name,
    forceUniqid: defaultForce.uniqid,
    roles: [],
    subscriptionId: generateSubscriptionId(),
    pType: PARTICIPANT_CUSTOM,
    templates: []
  }
  const res: ChannelCustom = {
    channelType: CHANNEL_CUSTOM,
    uniqid: uniqid.time(),
    name: generateChannelName(channels),
    participants: [participant]
  }
  return res
}

export default createChannel
