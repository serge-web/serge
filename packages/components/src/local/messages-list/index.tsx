import React, { useState, useEffect } from 'react'
import { expiredStorage } from '@serge/config'
import moment from 'moment'
import Chip from '@material-ui/core/Chip'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const MessagesList: React.FC<PropTypes> = ({ messageType, userId, messages, allMarkedRead }: PropTypes) => {
  const messageState = messages.map(message => {
    const hasBeenRead = expiredStorage.getItem(`${userId}${message._id}`) === 'read'
    return {
      ...message,
      open: false,
      hasBeenRead
    }
  })

  const [messageList, setMessageList] = useState(messageState)

  useEffect(() => {
    if (allMarkedRead) {
      setMessageList(messages.map(message => ({ ...message, hasBeenRead: true })))
    }
  }, [messageList, allMarkedRead])

  return (
    <div className={styles['message-list']}>
      <span className={styles['link']}>Mark all as read</span>
      {
        messageList.map(message => {

          const { force, role, name } = message.details.from

          return (<>
            <div className={styles['info-wrap']}>
              <Chip color="primary" label={force} />
              <Chip color="secondary" label={role} />
              {name && <Chip color="default" label={name} />}
              <span>{moment(message.details.timestamp).format('YYYY-MMM-DD HH:mm')}</span>
            </div>
            <div>
                {message.message.content}
            </div>
            <p className="feedback-marker" style={{ borderColor: message.details.from.forceColor }}></p>
          </>)
        })
      }
    </div>
  )
}

export default MessagesList
