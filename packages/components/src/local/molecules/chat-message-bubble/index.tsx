import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import Badge from '../../atoms/badge'
const currentUserForceId = 'Blue'

/* Render component */
export const ChatMessageBubble: React.FC<Props> = ({
  title,
  timestamp,
  role,
  messageType,
  hasBeenRead,
  forceId,
  forces
}: Props) => {
  let currentColor = forces?.find(item => item.uniqid === forceId);
  return (
    <div
      className={`${styles['chat-messgae-bubble']} ${forceId === currentUserForceId ? styles['chat-messgae-bubble-sent'] : ''}`}
      style={{ borderColor: currentColor && currentColor.color }}
    >
      <div className={`${styles['chat-inner-bubble']} ${!hasBeenRead ? styles['message-item-unread'] : ''}`}>
        <div className={styles['message-title-wrap']}>
          <div className={styles['message-title']}>{title}</div>
          <Box display="flex" alignItems="center" justifyContent={forceId === currentUserForceId ? 'flex-end' : ''}>
            <span className={styles['info-body']}>
              {moment(timestamp).format('HH:mm')}
            </span>
            <Badge size="small" type="charcoal" label={role} />
            <Badge size="small" label={messageType} />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default ChatMessageBubble
