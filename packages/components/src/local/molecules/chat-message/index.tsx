import React from 'react'
import Box from '@material-ui/core/Box'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Badge from '../../atoms/badge'
import Paragraph from '../../atoms/paragraph'

/* Render component */
export const ChatMessage: React.FC<Props> = (props: Props) => {

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
      ${props.isOwner ? styles['chat-message-wrapper__owner'] : styles['chat-message-wrapper__other']}`
      }
      style={{
        [props.isOwner ? "borderRightColor" : "borderLeftColor"]: props.borderColor
      }}
    >
      <div className={styles['message-text']}>{props.message}</div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent={props.isUmpire && props.privateMessage ? 'space-between' : 'flex-end'}
        flexDirection={!props.isOwner ? 'row-reverse' : ''}
        mt={1}>
        {props.isUmpire && props.privateMessage && <PrivateBadge />}
        <Box
          display="flex"
          flexDirection={!props.isOwner ? 'row-reverse' : ''}
          alignItems="flex-end"
        >
          <Badge size="small" label={props.role} color={'default'} />
          <span className={`${styles['info-body']} ${props.isOwner ? styles['info-body__owner'] : styles['info-body__other']}`}>
            {moment(props.timestamp).format('HH:mm')}
          </span>
        </Box>
      </Box>
      {props.isUmpire && props.privateMessage &&
        (<Box mt={1} className={styles.private} textAlign="left">
          <Paragraph content={props.privateMessage} />
        </Box>)
      }
    </div>
  )
}

export default ChatMessage
