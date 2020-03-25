import React, { useState, useEffect } from 'react'
import { expiredStorage } from '@serge/config'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Render component */
export const MessagesList: React.FC<PropTypes> = ({ userId, messages, allMarkedRead, currentChannel }: PropTypes) => {
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

    </div>
  )
}

export default MessagesList
