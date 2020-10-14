import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import Badge from '../../atoms/badge'

/* Render component */
export const ChannelMessageBubble: React.FC<Props> = ({
  isOpen,
  title,
  timestamp,
  role,
  messageType,
  hasBeenRead,
  onExpand
}: Props) => {
  return (
    <div onClick={onExpand} className={!hasBeenRead ? styles['message-item-unread'] : ''}>
      <div className={
        `${styles['message-title-wrap']} ${isOpen ? styles['message-title-opened'] : ''}`
      }>
        <div className={styles['message-title']}>{title}</div>
        <Box display="flex" alignItems="center">
          <span className={styles['info-body']}>{moment(timestamp).format('HH:mm')}</span>
          <Badge size="small" type="charcoal" label={role} className={styles['roleStyle']} />
          <Badge size="small" label={messageType} />
          {!hasBeenRead && <Badge size="small" label="Unread" type="warning" />}
        </Box>
      </div>
    </div>
  )
}

export default ChannelMessageBubble
