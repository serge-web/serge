import React from 'react'
import Box from '@material-ui/core/Box'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

/* Import Types */
import { Props } from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Badge from '../../atoms/badge'
import Paragraph from '../../atoms/paragraph'

import { MessageInfoTypeClipped } from 'src/custom-types'
import { formatTime } from 'src/Helpers'

/* Render component */
export const ChatMessage: React.FC<Props> = ({ message, isOwner, isUmpire, markUnread, hideAuthor }: Props) => {
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
  
  // TODO: use turn marker as we found when we load existing messages. This workaround
  // presents the game turn as a chat message
  const channelMessage = message as unknown as MessageInfoTypeClipped
  const messageContent = message.templateId === 'turn marker' ? 'Turn:' + channelMessage.gameTurn : message.message.content  
  // reverse the flag, to make it easier to read. Show the author if this a player form an umpire force,
  // or if hideAuthor is false
  const showAuthor = isUmpire || !hideAuthor
  // New functional component for the author info section
  const AuthorInfoSection: React.FC<{ isOwner: boolean, isUmpire: boolean, showAuthor: boolean, message: any }> = ({ isOwner, isUmpire, showAuthor, message }) => (
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
        {
          showAuthor && <Badge size="small" label={message.details.from.roleName} customBackgroundColor={message.details.from.forceColor} />
        }
        <span className={`${styles['info-body']} ${isOwner ? styles['info-body__owner'] : styles['info-body__other']}`}>
          {formatTime(message.details.timestamp)}
        </span>
      </Box>
    </Box>
  )

  return (
    <div className={
      `${styles['chat-message-wrapper']} 
      ${isOwner ? styles['chat-message-wrapper__owner'] : styles['chat-message-wrapper__other']}`
    } style={{ position: 'relative' }}><span
        className={styles['message-bar']}
        style={{
          background: showAuthor ? message.details.from.forceColor : '',
          left: isOwner ? '99%' : '0%',
          borderRadius: isOwner ? '0 8px 8px 0' : '8px 0 0 8px'
        }}
        onClick={(): void => markUnread && markUnread(message)}></span>
      <div className={styles['message-text']}>{messageContent}</div>
      <AuthorInfoSection isOwner={isOwner} isUmpire={isUmpire} showAuthor={showAuthor} message={message} />

      {isUmpire && message.details.privateMessage &&
        (<Box mt={1} className={styles.private} textAlign="left">
          <Paragraph content={message.details.privateMessage} />
        </Box>)
      }
    </div>
  )
}

export default ChatMessage
