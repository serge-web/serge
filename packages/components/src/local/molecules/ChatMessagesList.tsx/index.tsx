import React from 'react'
import ChatMessageBubble from '../chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Grid from '@material-ui/core/Grid';

/* Render component */
export const ChatChannelMessage: React.FC<Props> = ({ isUmpire, messages=[], colors} : Props) => {
  return (
    <Grid container spacing={3}>
        <Grid item xs={12} className={styles['chat-bubble-grid']}>
            {messages.map((item,index) => {
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
        </Grid>
      </Grid>
  )
}

export default ChatChannelMessage
