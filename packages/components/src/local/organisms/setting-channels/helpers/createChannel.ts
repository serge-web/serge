import { PARTICIPANT_CUSTOM, SpecialChannelColumns, SpecialChannelTypes } from '@serge/config'
import { ChannelData, ForceData } from '@serge/custom-types'
import { CollabOptions } from '@serge/custom-types/channel-data'
import { CoreParticipant, ParticipantCustom } from '@serge/custom-types/participant'
import uniqid from 'uniqid'
import { generateSubscriptionId } from './createParticipant'

// Create uniq chanel name
const generateChannelName = (channels: ChannelData[], key = 1, exclude = -1, defName = 'New Channel'): string => {
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
  channels: ChannelData[],
  // for which force we need to create Original Template if format given
  defaultForce: ForceData,
  // On special channel creation
  format?: SpecialChannelTypes
): ChannelData => {
  // Empty Participant array for standart channels
  const participants: CoreParticipant[] = []
  let collabOptions: CollabOptions | undefined

  // IF format given apply Original template based on format
  if (typeof format !== 'undefined') {
    // Create
    if (
      format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT ||
      format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
    ) {
      // create new participant
      const participant: ParticipantCustom = {
        force: defaultForce.name,
        forceUniqid: defaultForce.uniqid,
        roles: [],
        templates: [{ _id: 'k16eedkj', title: 'RFI' }],
        subscriptionId: generateSubscriptionId(),
        pType: PARTICIPANT_CUSTOM
        // canCollaborate: false,
        // canReleaseMessages: false,
        // canUnClaimMessages: false
      }
      // add participant to channel
      participants.push(participant)
      // define collabOptions for channel based on SpecialChannelType
      const returnVerbs: string[] = []
      if (format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT) {
        returnVerbs.push('Endorse')
        returnVerbs.push('Request Changes')
        collabOptions = {
          mode: 'edit',
          returnVerbs,
          startWithReview: true,
          extraColumns: [SpecialChannelColumns.LOCATION]
        }
      } else {
        collabOptions = {
          mode: 'response',
          returnVerbs,
          startWithReview: false,
          extraColumns: []
        }
      }
    }
  }

  return {
    uniqid: uniqid.time(),
    name: generateChannelName(channels),
    participants,
    format,
    collabOptions
  }
}

export default createChannel
