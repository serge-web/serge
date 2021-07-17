import React, { useRef, useState } from 'react'
import { Box } from '@material-ui/core'

import { CHAT_MESSAGE } from '@serge/config'

/* Import Types */
import Props from './types/props'
import { ChatMessage } from '@serge/custom-types'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChatInputText from '../chat-input-text'
import PrivateChatInputToggle from '../private-chat-input-toggle'

/* Render component */
export const ChatEntryForm: React.FC<Props> = ({
  from,
  channel,
  isUmpire,
  roleId,
  roleName,
  postBack
}: Props) => {
  const [message, setMessage] = useState('')
  const [privateMessage, setPrivateMessage] = useState('')
  const messageEle = useRef<any>(null)
  const privateMessageEle = useRef<any>(null)
  const timestamp = new Date().toISOString()

  const submitForm = (): void => {
    const post: ChatMessage = {
      messageType: CHAT_MESSAGE,
      details: {
        channel: channel,
        from: {
          force: from.name,
          forceColor: from.color,
          iconURL: from.iconURL || from.icon || '',
          roleId: roleId,
          roleName: roleName
        },
        messageType: 'Chat',
        timestamp: timestamp,
        privateMessage: privateMessage
      },
      message: {
        content: message
      },
      _id: timestamp
    }
    postBack && postBack(post)
    messageEle.current.clear()
    privateMessageEle &&
      privateMessageEle.current &&
      privateMessageEle.current.clear()
  }

  return (
    <Box className={styles['chat-container']}>
      <ChatInputText
        ref={messageEle}
        placeholder="type the text"
        onMessageChange={setMessage}
        postBack={submitForm}
      />
      {isUmpire && (
        <Box mt={1}>
          <PrivateChatInputToggle
            postBack={(message): void => setPrivateMessage(message)}
            sendMessage={submitForm}
            ref={privateMessageEle}
          />
        </Box>
      )}
    </Box>
  )
}

export default ChatEntryForm
