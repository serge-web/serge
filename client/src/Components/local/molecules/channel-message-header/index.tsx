import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Box from '@material-ui/core/Box'
import AddIcon from '@material-ui/icons/Add'
import RemoveIcon from '@material-ui/icons/Remove'
import cyan from '@material-ui/core/colors/cyan'
import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from '../../atoms/badge'
import { formatTime } from 'src/Helpers'

/* Render component */
export const ChannelMessageHeader: React.FC<Props> = ({
  isOpen,
  title,
  timestamp,
  forceColor,
  role,
  messageType,
  hasBeenRead,
  onExpand,
  markUnread
}: Props) => {
  return (
    <div className={
      `${styles['message-title-wrap']} 
      ${!hasBeenRead ? styles['message-item-unread'] : ''} 
      ${isOpen ? styles['message-title-opened'] : ''}`
    }>
      <FontAwesomeIcon
        className={styles.marker}
        title={hasBeenRead ? 'Click here to mark as unread' : ''}
        icon={hasBeenRead ? faEnvelopeOpen : faEnvelope}
        onClick={markUnread}
        color={!hasBeenRead ? 'rgb(255, 193, 7)' : 'rgb(255, 255, 255)'}
      />
      <div onClick={onExpand}>
        {
          isOpen
            ? <RemoveIcon fontSize="small" style={{ color: cyan.A200 }} />
            : <AddIcon fontSize="small" style={{ color: cyan.A200 }} />
        }
        <div className={styles['message-title']}>{title}</div>
        <Box display="flex" alignItems="center" pl={3}>
          <span className={styles['info-body']}>{timestamp && formatTime(timestamp)}</span>
          <Badge size="small" label={role} customBackgroundColor={forceColor} />
          <Badge size="small" label={messageType} />
        </Box>
      </div>
    </div>
  )
}

export default ChannelMessageHeader
