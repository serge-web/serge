import React, { useState, useEffect } from 'react'
import { expiredStorage } from '@serge/config'

/* Import Types */
import PropTypes from './types/props'
import { MessageChannel } from 'src/custom-types'

/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import Message from '../message'
import { Button } from '@material-ui/core'

/* Render component */
export const MessagesList: React.FC<PropTypes> = ({ currentChannel, userId, messages }: PropTypes) => {
  const [messageList, setMessageList] = useState<Array<MessageChannel>>()
  const [allMarkedRead, setAllMarkedRead] = useState(false)

  useEffect(() => {
    setMessageList(messages.map(message => {
      const hasBeenRead = expiredStorage.getItem(`${userId}${message._id}`) === 'read'
      return {
        ...message,
        open: false,
        hasBeenRead
      }
    }))
  }, [messages])

  // Listen for changes to the allMarkedRead variable
  useEffect(() => {
    if (allMarkedRead) {
      setMessageList(messages.map(message => ({ ...message, hasBeenRead: true })))
    }
  }, [allMarkedRead])

  // Listen for changes to currentChannel
  useEffect(() => {
    if (messageList && messageList.length === 0) {
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

  const markAllAsRead = (): void => {
    setAllMarkedRead(true)
  }

  return (
    <div className={styles['message-list']}>
      <Button onClick={markAllAsRead}>Mark all as read</Button>
      {
        messageList && messageList.map((message: MessageChannel) => <Message key={message._id} message={message} />)
      }
    </div>
  )
}

export default MessagesList
