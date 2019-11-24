import React from 'react'
import MessageSenderMultichannel from './MessageSenderMultichannel'

const MessageSender = ({ sendMessage, data, messageType, currentChannel }) => {
  const [state] = data
  if (!state) return null
  const filterParticipants = participant => (
    participant.forceUniqid === state.selectedForce &&
    (participant.roles.length === 0 ||
    participant.roles.find(role => (role.value === state.selectedRole)))
  )
  const channelIds = Object.keys(state.channels)
  const playerPerrmitions = state.allChannels.filter(channel => {
    return channelIds.includes(channel.uniqid) && channel.participants.find(participant => filterParticipants(participant))
  }).map(channel => {
    channel.participants = channel.participants.filter(participant => filterParticipants(participant))
    return channel
  })

  const allowDrawfForCurrentChannel = playerPerrmitions.find(channel => {
    return channel.uniqid === currentChannel && channel.participants.find(p => p.draftMessages)
  })

  const multiChannelSendingChannels = playerPerrmitions
    .filter(channel => (channel.participants.find(p => p.multiChannelMessages)))
    .map(({ name, uniqid, participants }) => ({
      name,
      value: uniqid,
      draft: participants.find(p => p.draftMessages)
    }))

  if (multiChannelSendingChannels.length > 1) {
    const multiChannelDraftMessages = multiChannelSendingChannels.filter(channel => channel.draft)

    return (
      <div className="form-group">
        {multiChannelDraftMessages.length > 0 && <MessageSenderMultichannel
          active={allowDrawfForCurrentChannel}
          draft={true}
          channels={multiChannelDraftMessages}
          sendMessage={sendMessage}
        >Send draft</MessageSenderMultichannel>}
        <MessageSenderMultichannel
          active={true}
          draft={false}
          channels={multiChannelSendingChannels}
          sendMessage={sendMessage}
        >Send</MessageSenderMultichannel>
      </div>
    )
  }

  return (
    <div className="form-group">
      {allowDrawfForCurrentChannel && <button name="send" className="btn btn-action btn-action--form" onClick={() => { sendMessage(true) }}>
        <span>Send Message as draft</span>
      </button>}
      <button name="send" className="btn btn-action btn-action--form" onClick={sendMessage}>
        <span>Send Message</span>
      </button>
    </div>
  )
}

export default MessageSender
