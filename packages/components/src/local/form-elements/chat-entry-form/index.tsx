import React, { useRef, useState } from 'react'
import { Box } from '@material-ui/core'

/* Import Types */
import Props from './types/props'

/* Import Stylesheet */
// import styles from './styles.module.scss'

import ChatInputText from '../chat-input-text'
import PrivateChatInputToggle from '../private-chat-input-toggle'

/* Render component */
export const ChatEntryForm: React.FC<Props> = ({ postBack }: Props) => {
  const [privateMessage, setPrivateMessage] = useState('')
  const privateMessageEle = useRef<any>(null)

  return (
    <Box>
      <ChatInputText
        placeholder="type the text"
        postBack={(message) => {
          postBack && postBack(message, privateMessage)
          privateMessageEle.current.clear()
        }}
      />
      <Box mt={1}>
        <PrivateChatInputToggle
          postBack={(message) => setPrivateMessage(message)}
          ref={privateMessageEle}
        />
      </Box>
    </Box>
  )
}

export default ChatEntryForm
