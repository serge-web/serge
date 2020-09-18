import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import cyan from '@material-ui/core/colors/cyan'
import moment from 'moment'
import Badge from '../../atoms/badge'

/* Render component */
export const MessageListHeader: React.FC<Props> = ({
  borderColor,
  isOpen,
  title,
  timestamp,
  role,
  messageType,
  hasBeenRead
}: Props) => {
  return (
    <div className={!hasBeenRead ? styles['message-item-unread'] : ''}>
      <div className={styles['message-title-wrap']} style={{ borderColor }}>
        {
          isOpen
            ? <RemoveIcon fontSize="small" style={{ color: cyan.A200 }} />
            : <AddIcon fontSize="small" style={{ color: cyan.A200 }} />
        }
        <div className={styles['message-title']}>{title}</div>
        <Box display="flex" alignItems="center" pl={3}>
          <span className={styles['info-body']}>{moment(timestamp).format('HH:mm')}</span>
          <Badge size="small" type="charcoal" label={role} />
          <Badge size="small" label={messageType} />
          {!hasBeenRead && <Badge size="small" label="Unread" type="warning" />}
        </Box>
      </div>
    </div>
  )
}

export default MessageListHeader
