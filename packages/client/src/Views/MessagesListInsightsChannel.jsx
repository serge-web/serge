import React from 'react'
import Badge from 'react-bootstrap/Badge'
import classNames from 'classnames'
import { isMessageReaded, formatFullDate } from '@serge/helpers'
import { usePlayerUiState } from '../Store/PlayerUi'
import '@serge/themes/App.scss'

const MessagesListChatChannel = ({ messages, markAllAsRead }) => {
  const { currentWargame, selectedForce, selectedRole } = usePlayerUiState()
  const selectedForceId = selectedForce ? selectedForce.uniqid : ''
  const isMessageRead = (message) => isMessageReaded(currentWargame, selectedForceId, selectedRole, message._id)

  return (
    <>
      <span className='link link--noIcon link--secondary' onClick={markAllAsRead}>Mark all as read</span>
      {messages.map((message, i) => {
        return (
          <React.Fragment key={`feedback${i}`}>
            <div className='info-wrap'>
              <Badge pill variant='primary'>{message.details.from.force}</Badge>
              <Badge pill variant='secondary'>{message.details.from.role}</Badge>
              {message.details.from.name && <Badge pill variant='warning'>{message.details.from.name}</Badge>}
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
