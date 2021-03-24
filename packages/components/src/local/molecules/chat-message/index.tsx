import React from 'react'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import Badge from '../../atoms/badge'
import Paragraph from '../../atoms/paragraph'

/* Render component */
export const ChatMessage: React.FC<Props> = ({ message, borderColor, role, timestamp, isUmpire, privateMessage }: Props) => {

  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      Private message:
    </span>
  )

  return (
    <div className={styles['chat-message-wrapper']} style={{ borderRightColor: borderColor, borderRightWidth: 8, borderRightStyle: 'solid' }}>
      <div className={styles['message-text']}>{message}</div>
      <Box display="flex" alignItems="center" justifyContent={isUmpire && privateMessage ? "space-between" : "flex-end"} mt={1}>
        {isUmpire && privateMessage && <PrivateBadge />}
        <div>
          <Badge size="small" label={role} color={'default'} />
          <span className={styles['info-body']}>{moment(timestamp).format('HH:mm')}</span>
        </div>
      </Box>
      {isUmpire && privateMessage &&
        (<Box mt={1} className={styles.private} textAlign="left">
          <Paragraph content={privateMessage} />
        </Box>)
      }
    </div>
  )
}

export default ChatMessage
