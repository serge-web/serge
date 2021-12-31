import { CHANNEL_COLLAB } from '@serge/config'
import { ChannelCollab, ChannelData } from '@serge/custom-types'

export default (channelData?: ChannelData): boolean => {
  if (!channelData) return false
  return 'channelType' in channelData && (channelData as unknown as ChannelCollab).channelType === CHANNEL_COLLAB
}
