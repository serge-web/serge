import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { formatFullDate, isMessageReaded } from 'src/Helpers'
import { MessageFeedback } from 'src/custom-types'
import 'src/themes/App.scss'
import classNames from 'classnames'
import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { usePlayerUiState } from '../Store/PlayerUi'

interface Props { messages: MessageFeedback[], markAllAsRead: () => void }

const MessagesListChatChannel: React.FC<Props> = ({ messages, markAllAsRead }) => {
  const { currentWargame, selectedForce, selectedRole } = usePlayerUiState()
  const selectedForceId = selectedForce ? selectedForce.uniqid : ''
  const isMessageRead = (message: MessageFeedback) => isMessageReaded(currentWargame, selectedForceId, selectedRole, message._id)
  const isMessageUnreadExists = messages.some(message => !isMessageRead(message))
  
  return (
    <>
      <span className='message-status-icon'>
        <FontAwesomeIcon icon={isMessageUnreadExists ? faEnvelope : faEnvelopeOpen} onClick={markAllAsRead} style={{ cursor: 'pointer' }} />
      </span>
      {messages.map((message, i) => {
        return (
          <React.Fragment key={`feedback${i}`}>
            <div className='info-wrap'>
              <Badge pill variant='primary'>{message.details.from.force}</Badge>
              <Badge pill variant='secondary'>{message.details.from.roleName}</Badge>
              {message.name && <Badge pill variant='warning'>{message.name}</Badge>}
              <span>{formatFullDate(message.details.timestamp)}</span>
            </div>
            <div className={classNames({ bold: !isMessageRead(message) })}>
              {message.message.content}
            </div>
            <p className='feedback-marker' style={{ borderColor: message.details.from.forceColor }}></p>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default MessagesListChatChannel
