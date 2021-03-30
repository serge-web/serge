import React, { useState, useEffect } from 'react'
import { Box } from '@material-ui/core'
import { expiredStorage } from '@serge/config'
/* Import Types */
import PropTypes from './types/props'
import { ChatMessage as ChatMessageType } from '@serge/custom-types'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Components */
import ChatMessage from '../../molecules/chat-message'
import ForcesInChannel from '../../molecules/forces-in-channel'
/* Render component */
export const ChatMessagesList: React.FC<PropTypes> = ({ messages, icons, userId, colors, isUmpire, playerForce }: PropTypes) => {
  const [allMarkedRead, setAllMarkedRead] = useState(false)
  const [messageList, setMessageList] = useState<Array<ChatMessageType>>()

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
  const markAllAsRead = (): void => {
    setAllMarkedRead(true)
  }
  return (
    <div>
      <Box mb={2} ml={2} mr={3}>
        <ForcesInChannel onMarkAllAsRead={markAllAsRead} colors={colors} icons={icons} />
      </Box>
      <Box ml={2} className={styles['messages-list']} flexDirection="column-reverse" display="flex">
        {
          messageList && messageList.map((message, key) => {
            return (
              <Box mb={2} mr={2} key={key} justifyContent="flex-end" display="block">
                <Box maxWidth={'60%'} minWidth={'40%'} display="inline-block" style={{ float: message.details.from.force === playerForce ? 'right' : 'left' }}>
                  <ChatMessage isUmpire={isUmpire} isOwner={message.details.from.force === playerForce} message={message} />
                </Box>
              </Box>
            )
          })
        }
      </Box>
    </div>
  )
}

export default ChatMessagesList
