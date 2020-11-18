import React from 'react'
import ChatMessageBubble from '../chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import WriteMessagePanel from '../write-message-panel'

/* Render component */
export const ChatChannelMessage: React.FC<Props> = ({ isUmpire, messages=[], colors, onSendMessage, onChange, content, privateMessage } : Props) => {
  return (
    <div
      className={`${styles['chat-channel-message']}`}
    >
      {messages.reverse().map((item,index) => {
        return (
          <ChatMessageBubble
            title={item.title}
            timestamp={item.timestamp}
            role={item.role}
            hasBeenRead={item.hasBeenRead}
            authorForceId={item.authorForceId}
            playerForceId={item.playerForceId}
            forceColors={colors}
            privateMessage={item.privateMessage}
            isUmpire={isUmpire}
            key={index}
          />
        )
      })}
      <WriteMessagePanel isUmpire={isUmpire} content={content} privateMessage={privateMessage} onSendMessage={(): any => onSendMessage()} onChange={(event: HTMLInputElement, key: string): any => onChange(event, key)} />
    </div>
  )
}

export default ChatChannelMessage
