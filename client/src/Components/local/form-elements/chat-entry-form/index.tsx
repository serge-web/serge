import { Box } from '@material-ui/core'
import { UNSENT_CHAT_MESSAGE_TYPE } from 'src/config'
import { MessageDetails } from 'src/custom-types'
import React, { useRef, useState } from 'react'
import ChatInputText from '../chat-input-text'
import PrivateChatInputToggle from '../private-chat-input-toggle'
import styles from './styles.module.scss'
import Props from './types/props'

/* Render component */
export const ChatEntryForm: React.FC<Props> = ({
  from,
  channel,
  isUmpire,
  role,
  roleName,
  postBack,
  turnNumber
}: Props) => {
  const [message, setMessage] = useState('')
  const [privateMessage, setPrivateMessage] = useState('')
  const messageEle = useRef<any>(null)
  const privateMessageEle = useRef<any>(null)
  const timestamp = new Date().toISOString()

  const submitForm = (): void => {
    if (!message) return
    const details: MessageDetails = {
      channel: channel,
      from: {
        force: from.name,
        forceColor: from.color,
        roleId: role,
        roleName: roleName,
        iconURL: from.iconURL || (from.icon || '')
      },
      timestamp: timestamp,
      privateMessage: privateMessage,
      turnNumber: turnNumber
    }
    const contents = {
      content: message
    }

    postBack && postBack(details, contents, UNSENT_CHAT_MESSAGE_TYPE)
    setMessage('')
    setPrivateMessage('')
    messageEle.current.clear()
    privateMessageEle && privateMessageEle.current && privateMessageEle.current.clear()
  }

  const onCancel = (): void => {
    messageEle.current.clear()
    privateMessageEle.current.clear()
  }

  return (
    <Box className={styles['chat-container']}>
      <ChatInputText
        ref={messageEle}
        placeholder="type the text"
        onMessageChange={(message): void => {
          setMessage(message)
        }}
        postBack={submitForm}
        onCancel={onCancel}
      />
      {isUmpire &&
        <Box mt={1}>
          <PrivateChatInputToggle
            postBack={(message): void => {
              setPrivateMessage(message)
            }}
            sendMessage={submitForm}
            ref={privateMessageEle}
          />
        </Box>
      }
    </Box>
  )
}

export default ChatEntryForm
