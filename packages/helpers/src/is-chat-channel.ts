import { Participant, ChannelData } from '@serge/custom-types'

const isChatChannel = (channel: ChannelData): boolean => {
  // we're interested in channels that only have chat channel
  const nonChatParticipant = channel.participants.find((part: Participant) => {
    const templates = part.templates
    if (templates === undefined || templates.length === 0) {
      return false
    } else {
      return templates.find(temp => temp.title !== 'Chat')
    }
  })
  return !nonChatParticipant
}

export default isChatChannel
