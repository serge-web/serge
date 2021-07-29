import { ChannelData, ForceData, Participant } from "@serge/custom-types";
import uniqid from 'uniqid'
import { SpecialChannelTypes } from "@serge/config";
import { generateSubscriptionId } from "./createParticipant";

// Create uniq chanel name
const generateChannelName = (channels: ChannelData[], key = 1, exclude: number = -1, defName = 'New Channel'): string => {
  let name: string = defName
  if (key > 1)  name += ' ' + key
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
  const participants: Participant[] = []

  // IF format given apply Original template based on format
  if (typeof format !== 'undefined') {
    // Create 
    if (
      format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT ||
      format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
    ) {
      const participant: Participant = {
        force: defaultForce.name,
        forceUniqid: defaultForce.uniqid,
        roles: [],
        templates: [{ _id: 'k16eedkj', title: 'RFI' }],
        subscriptionId: generateSubscriptionId(),
        canCollaborate: false,
        canReleaseMessages: false
      }
      console.log(participant);
      participants.push(participant)
    }
  }

  return {
    uniqid: uniqid.time(), 
    name: generateChannelName(channels),
    participants,
    format,
  }
}

export default createChannel
