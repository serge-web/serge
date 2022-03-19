import { Button } from '@material-ui/core'
import { MessageChannel } from '@serge/custom-types'
import React from 'react'
/* Import Components */
import Message from '../message'
/* Import Stylesheet */
import styles from './styles.module.scss'
/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const MessagesList: React.FC<PropTypes> = ({ messages }: PropTypes) => {
  const markAllAsRead = (): void => {
    // TODO: update hasBeenRead message state
  }

  return (
    <div className={styles['message-list']}>
      <Button onClick={markAllAsRead}>Mark all as read</Button>
      {
        messages.map((message: MessageChannel) => <Message key={message._id} message={message} />)
      }
    </div>
  )
}

export default MessagesList
