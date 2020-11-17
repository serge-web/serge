import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import Badge from '../../atoms/badge'

/* Render component */
export const ChatMessageBubble: React.FC<Props> = ({
  title,
  timestamp,
  role,
  hasBeenRead,
  authorForceId,
  playerForceId,
  forceColors,
  privateMessage,
  isUmpire
}: Props) => {
  const currentColor = forceColors?.find((item: {force: string, color: string}) => item.force === authorForceId)
  return (
    <div
      className={`${styles['chat-messgae-bubble']} ${authorForceId === playerForceId ? styles['chat-messgae-bubble-sent'] : ''}`}
      style={{ borderColor: currentColor && currentColor.color }}
    >
      <div className={`${styles['chat-inner-bubble']} ${!hasBeenRead ? styles['message-item-unread'] : ''}`}>
        <div className={styles['message-title-wrap']}>
          <div className={styles['message-title']}>{title}</div>
          <Box display="flex" alignItems="center" justifyContent={(authorForceId === playerForceId) || (isUmpire && privateMessage) ? 'flex-end' : ''} className={styles['badges-box']}>
            <span className={styles['info-body']}>
              {moment(timestamp).format('HH:mm')}
            </span>
            <Badge size="small" type="charcoal" label={role} />
          </Box>
          {(isUmpire && privateMessage) && <div>
            <div className={styles['private-message']}>
              <span className={styles['icon-private']}>
                <FontAwesomeIcon size='1x' icon={faUserSecret} />
              </span>
              <span className={styles['private-message-text']}>Private Message</span>
            </div>
            <div className={styles['private-message-box']}>
              {privateMessage}
            </div>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default ChatMessageBubble
