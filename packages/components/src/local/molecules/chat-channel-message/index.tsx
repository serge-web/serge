import React from 'react'
import ChatMessageBubble from '../chat-message-bubble'
/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import WriteMessagePanel from '../write-message-panel'
import Grid from '@material-ui/core/Grid';

/* Render component */
export const ChatChannelMessage: React.FC<Props> = ({ isUmpire, messages=[], colors, onSendMessage, onChange, content, privateMessage } : Props) => {
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
        <Grid item xs={12} className={styles['chat-input-grid']}>
        <WriteMessagePanel isUmpire={isUmpire} content={content} privateMessage={privateMessage} onSendMessage={(): any => onSendMessage()} onChange={(event: HTMLInputElement, key: string): any => onChange(event, key)} />
        </Grid>
      </Grid>
   
  )
}

export default ChatChannelMessage
