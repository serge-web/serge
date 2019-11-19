import React from 'react'
import MessageSenderMultichannel from './MessageSenderMultichannel'

const MessageSender = ({ sendMessage, data, messageType }) => {
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

  const multiChannelSendingChannels = playerPerrmitions
    .filter(channel => (channel.participants.find(p => p.multiChannelMessages)))
    .map(({ name, uniqid }) => ({ name, value: uniqid }))

  if (multiChannelSendingChannels.length > 1) {
    return (
      <MessageSenderMultichannel
        channels={multiChannelSendingChannels}
        sendMessage={sendMessage}
      >Send</MessageSenderMultichannel>
    )
  }

  return (
    <div className="form-group">
      <button name="send" className="btn btn-action btn-action--form" onClick={sendMessage}>
        <span>Send Message</span>
      </button>
    </div>
  )
}

export default MessageSender
