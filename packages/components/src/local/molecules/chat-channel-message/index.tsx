import React from 'react'
import ChatMessageBubble from '../chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import WriteMessagePanel from '../write-message-panel'

/* Render component */
export const ChatChannelMessage: React.FC<Props> = ({ title, timestamp, role, messageType, hasBeenRead, authorForceId, playerForceId, forceColors, isUmpire, privateMessage, hasPrivate }: Props) => {
  return (
    <div
      className={`${styles['chat-channel-message']}`}
    >
      <ChatMessageBubble
        title={title}
        timestamp={timestamp}
        role={role}
        messageType={messageType}
        hasBeenRead={hasBeenRead}
        authorForceId={authorForceId}
        playerForceId={playerForceId}
        forceColors={forceColors}
        privateMessage={privateMessage}
        hasPrivate={hasPrivate}
      />
      <WriteMessagePanel isUmpire={isUmpire}/>
    </div>
  )
}

export default ChatChannelMessage
