import { ChannelData } from '@serge/custom-types'
import { SpecialChannelTypes } from '../../config/build'

const isCollabWorkingChannel = (channel: ChannelData): boolean => {
  // examine the channel format
  if (channel.format) {
    return channel.format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT || 
    channel.format === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
  } else {
    return false
  }
}

export default isCollabWorkingChannel
