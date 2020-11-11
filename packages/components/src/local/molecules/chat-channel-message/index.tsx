import React from 'react'
import ChatMessageBubble from '../chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import WriteMessagePanel from '../write-message-panel'

/* Render component */
export const ChatChannelMessage: React.FC<Props> = ({ isUmpire, messages, colors }: Props) => {
  return (
    <div
      className={`${styles['chat-channel-message']}`}
    >
      {messages.map((item,index) => {
        return (
          <ChatMessageBubble
            title={item.title}
            timestamp={item.timestamp}
            role={item.role}
            messageType={item.messageType}
            hasBeenRead={item.hasBeenRead}
            authorForceId={item.authorForceId}
            playerForceId={item.playerForceId}
            forceColors={colors}
            privateMessage={item.privateMessage}
            hasPrivate={item.hasPrivate}
            key={index}
          />
        )
      })}
      <WriteMessagePanel isUmpire={isUmpire}/>
    </div>
  )
}

export default ChatChannelMessage
