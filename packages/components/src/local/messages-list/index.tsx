import React, { useState, useEffect } from 'react'
import { expiredStorage } from '@serge/config'

/* Import Types */
import PropTypes from './types/props'

/* Import Stylesheet */
import styles from './styles.module.scss'
import Message from '../message'

/* Render component */
export const MessagesList: React.FC<PropTypes> = ({ currentChannel, userId, messages, allMarkedRead }: PropTypes) => {
  const messageState = messages.map(message => {
    const hasBeenRead = expiredStorage.getItem(`${userId}${message._id}`) === 'read'
    return {
      ...message,
      open: false,
      hasBeenRead
    }
  })

  const [messageList, setMessageList] = useState(messageState)

  // Listen for changes to the allMarkedRead variable
  useEffect(() => {
    if (allMarkedRead) {
      setMessageList(messages.map(message => ({ ...message, hasBeenRead: true })))
    }
  }, [allMarkedRead])
  
  // Listen for changes to currentChannel
  useEffect(() => {
    if (messageList.length === 0) {
      setMessageList(messages.map((message) => {
        const hasBeenRead = expiredStorage.getItem(`${userId}${message._id}`) === 'read'
        return {
          ...message,
          open: false,
          hasBeenRead
        }
      }))
    }
  }, [currentChannel])

  useEffect(() => {
   // Unmount component

  })

  return (
    <div className={styles['message-list']}>
      <span className={styles.link}>Mark all as read</span>
      {
        messageList.map(message => <Message key={message._id} message={message} />)
      }
    </div>
  )
}

export default MessagesList
