import React from 'react'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import { Props } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Badge from '../../atoms/badge'
import Paragraph from '../../atoms/paragraph'

/* Render component */
export const ChatMessage: React.FC<Props> = ({ message, isOwner, isUmpire }: Props) => {
  const PrivateBadge = (): React.ReactElement => (
    <span>
      <span className={styles['icon-private']}>
        <FontAwesomeIcon size='1x' icon={faUserSecret} />
      </span>
      <span className={styles['label-private']}>
        Private message:
      </span>
    </span>
  )

  return (
    <div
      className={
        `${styles['chat-message-wrapper']} 
      ${isOwner ? styles['chat-message-wrapper__owner'] : styles['chat-message-wrapper__other']}`
      }
      style={{
        [isOwner ? 'borderRightColor' : 'borderLeftColor']: message.details.from.forceColor
      }}
    >
      <div className={styles['message-text']}>{message.message.content}</div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={isUmpire && message.details.privateMessage ? 'space-between' : 'flex-end'}
        flexDirection={!isOwner ? 'row-reverse' : ''}
        mt={1}>
        {isUmpire && message.details.privateMessage && <PrivateBadge />}
        <Box
          display="flex"
          flexDirection={!isOwner ? 'row-reverse' : ''}
          alignItems="flex-end"
        >
          <Badge size="small" label={message.details.from.role} color={'default'} />
          <span className={`${styles['info-body']} ${isOwner ? styles['info-body__owner'] : styles['info-body__other']}`}>
            {moment(message.details.timestamp).format('HH:mm')}
          </span>
        </Box>
      </Box>
      {isUmpire && message.details.privateMessage &&
        (<Box mt={1} className={styles.private} textAlign="left">
          <Paragraph content={message.details.privateMessage} />
        </Box>)
      }
    </div>
  )
}

export default ChatMessage
