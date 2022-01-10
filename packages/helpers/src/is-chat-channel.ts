import { PARTICIPANT_CUSTOM } from '@serge/config'
import { ChannelTypes } from '@serge/custom-types'
import { CoreParticipant, ParticipantCustom } from '@serge/custom-types/participant'

const isChatChannel = (channel: ChannelTypes): boolean => {
  // we're interested in channels that only have chat channel
  const parts: CoreParticipant[] = channel.participants
  const nonChatParticipant = parts.find((part: CoreParticipant) => {
    if (part.pType === PARTICIPANT_CUSTOM) {
      const templates = (part as ParticipantCustom).templates
      if (templates === undefined || templates.length === 0) {
        return false
      } else {
        return templates.find(temp => temp.title !== 'Chat')
      }
    }
    return false
  })
  return !nonChatParticipant
}

export default isChatChannel
