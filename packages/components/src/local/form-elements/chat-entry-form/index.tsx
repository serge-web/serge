import React, { useRef, useState } from 'react'
import { Box } from '@material-ui/core'

import { CHAT_MESSAGE } from '@serge/config'

/* Import Types */
import Props from './types/props'
import { ChatMessage } from '@serge/custom-types'

/* Import Stylesheet */
// import styles from './styles.module.scss'

import ChatInputText from '../chat-input-text'
import PrivateChatInputToggle from '../private-chat-input-toggle'

/* Render component */
export const ChatEntryForm: React.FC<Props> = ({ from, channel, isUmpire, role, postBack }: Props) => {
  const [privateMessage, setPrivateMessage] = useState('')
  const privateMessageEle = useRef<any>(null)
  const timestamp = new Date().toISOString()

  const submitForm = (message: string): void => {
    const post: ChatMessage = {
      messageType: CHAT_MESSAGE,
      details: {
        channel: channel,
        from: {
          force: from.name,
          forceColor: from.color,
          role: role,
          icon: from.icon ? from.icon : ''
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
    privateMessageEle.current.clear()
  }

  return (
    <Box>
      <ChatInputText
        placeholder="type the text"
        postBack={submitForm}
      />
      { isUmpire &&
      <Box mt={1}>
        <PrivateChatInputToggle
          postBack={(message) => setPrivateMessage(message)}
          ref={privateMessageEle}
        />
      </Box>
      }
    </Box>
  )
}

export default ChatEntryForm
