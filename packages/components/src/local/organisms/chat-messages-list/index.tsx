import React from 'react'
import ChatMessageBubble from '../../molecules/chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const ChatMessagesList: React.FC<Props> = ({ isUmpire, messages = [], colors, currentForce }: Props) => {
  return (
    <div className={styles['chat-bubble-grid']}>
      {messages.map((item, index) => {
        const currentForceName = currentForce ? currentForce.name : "";
        const messagePosition = item && item.details && item.details.from && item.details.from.force && item.details.from.force === currentForceName ? true : false
        return ( item &&
          <ChatMessageBubble
            title={item.title}
            timestamp={item.timestamp}
            role={item.role}
            hasBeenRead={item.hasBeenRead}
            authorForceId={item.authorForceId}
            playerForceId={item.playerForceId}
            forceColors={colors}
            privateMessage={item.privateMessage}
            messagePosition = {messagePosition}
            isUmpire={isUmpire}
            key={index}
            borderColor={item.borderColor}
          />
        )
      })}
    </div>
  )
}

export default ChatMessagesList
