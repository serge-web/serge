import { CHANNEL_CHAT, CHANNEL_COLLAB, CHANNEL_CUSTOM, CHANNEL_MAPPING, CollaborativePermission, InitialStates, PARTICIPANT_CHAT, PARTICIPANT_COLLAB, PARTICIPANT_CUSTOM, PARTICIPANT_MAPPING, SpecialChannelTypes } from 'src/config'
import { ChannelCollab, ChannelTypes, ForceData } from 'src/custom-types'
import { ChannelChat, ChannelCustom, ChannelMapping } from 'src/custom-types/channel-data'
import { ParticipantChat, ParticipantCollab, ParticipantCustom, ParticipantMapping } from 'src/custom-types/participant'
import uniqid from 'uniqid'

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
          forceUniqid: defaultForce.uniqid,
          roles: [],
          subscriptionId: Math.random().toString(36).substring(8),
          pType: PARTICIPANT_COLLAB,
          canCreate: true,
          viewUnreleasedVersions: true,
          permission: CollaborativePermission.CannotCollaborate
        }
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
      case SpecialChannelTypes.CHANNEL_CORE_MAPPING:
        const participant: ParticipantMapping = {
          forceUniqid: defaultForce.uniqid,
          roles: [],
          subscriptionId: Math.random().toString(36).substring(8),
          pType: PARTICIPANT_MAPPING,
          forRenderer: [],
          permissionTo: {},
          phases: []
        }
        const res: ChannelMapping = {
          uniqid: uniqid.time(),
          name: generateChannelName(channels),
          channelType: CHANNEL_MAPPING,
          participants: [participant],
          constraints: {
            bounds: [[1.1, 2.2], [3.3, 5.5]],
            minZoom: 1,
            maxZoom: 12,
            tileLayer: {
              url: 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png',
              attribution: '',
              maxNativeZoom: 12
            }
          },
          renderers: []
        }
        return res
      case SpecialChannelTypes.CHANNEL_CHAT:
      default: {
        const participant: ParticipantChat = {
          forceUniqid: defaultForce.uniqid,
          roles: [],
          subscriptionId: Math.random().toString(36).substring(8),
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
    forceUniqid: defaultForce.uniqid,
    roles: [],
    subscriptionId: Math.random().toString(36).substring(8),
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
