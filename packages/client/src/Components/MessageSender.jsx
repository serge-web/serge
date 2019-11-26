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

  let currentChannelIncluded = false

  const multiChannelSendingChannels = playerPerrmitions
    .filter(channel => (channel.participants.find(p => p.multiChannelMessages)))
    .map(({ name, uniqid, participants }) => {
      if (uniqid === currentChannel) currentChannelIncluded = true
      return {
        name,
        value: uniqid,
        draft: participants.find(p => p.draftMessages)
      }
    })

  if (!currentChannelIncluded) {
    multiChannelSendingChannels.unshift({
      name: 'Current',
      value: currentChannel,
      draft: allowDrawfForCurrentChannel
    })
  }

  if (multiChannelSendingChannels.length > 1) {
    let multiChannelDraftMessages = multiChannelSendingChannels.filter(channel => channel.draft)

    if (allowDrawfForCurrentChannel && multiChannelDraftMessages.length === 1 && multiChannelDraftMessages[0].value === allowDrawfForCurrentChannel.uniqid) {
      multiChannelDraftMessages = []
    }

    return (
      <div className="form-group se-send-message">
        {multiChannelDraftMessages.length > 0 ? <MessageSenderMultichannel
          active={allowDrawfForCurrentChannel}
          draft={true}
          channels={multiChannelDraftMessages}
          sendMessage={sendMessage}
        >Send draft</MessageSenderMultichannel> : allowDrawfForCurrentChannel && <button name="send" className="btn btn-action btn-action--form" onClick={() => { sendMessage(true) }}>
          <span>Send Message as draft</span>
        </button>}
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
