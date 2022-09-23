import React, { useRef, useState } from 'react'
import { Box } from '@material-ui/core'

/* Import Types */
import Props from './types/props'
import { MessageDetails, MessagePlanning } from '@serge/custom-types'

/* Import Stylesheet */
import styles from './styles.module.scss'

import ChatInputText from '../chat-input-text'
import PrivateChatInputToggle from '../private-chat-input-toggle'
import { dummyMessages } from '../../organisms/support-panel/helpers/dummy_messages'

/* Render component */
export const ChatEntryForm: React.FC<Props> = ({
  from,
  channel,
  isUmpire,
  role,
  roleName,
  postBack,
  turnNumber,
  clearCachedMessage,
  onchangeChatInputMessage,
  onChangePrivateStorage,
  privatMessageValue,
  chatEntryFormValue
}: Props) => {
  const [message, setMessage] = useState('')
  const [privateMessage, setPrivateMessage] = useState('')
  const [privateMessageType, setPrivateMessageType] = useState('')
  const messageEle = useRef<any>(null)
  const privateMessageEle = useRef<any>(null)
  const timestamp = new Date().toISOString()

  const submitForm = (type: string): void => {
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
      messageType: 'Chat',
      timestamp: timestamp,
      privateMessage: privateMessage,
      turnNumber: turnNumber
    }
    const contents = {
      content: message
    }

    // NOTE: utility to send bulk messages into backend
    const sendBulk = false
    if (sendBulk) {
      const messages: MessagePlanning[] = dummyMessages
      messages.forEach((msg: MessagePlanning) => {
        console.log('sending', msg._id)
        postBack && postBack(msg.details, msg.message)
      })
    } else {
      postBack && postBack(details, contents)
    }

    postBack && postBack(details, contents)
    clearCachedMessage && clearCachedMessage([privateMessageType, type])
    messageEle.current.clear()
    setMessage('')
    setPrivateMessage('')
    privateMessageEle && privateMessageEle.current && privateMessageEle.current.clear()
  }

  const onCancel = () => {
    messageEle.current.clear()
    onchangeChatInputMessage('', 'chat')
    clearCachedMessage && clearCachedMessage(['chat'])
  }

  return (
    <Box className={styles['chat-container']}>
      <ChatInputText
        chatInputvalue={chatEntryFormValue}
        ref={messageEle}
        placeholder="type the text"
        onMessageChange={(message, messageType): void => {
          onchangeChatInputMessage(message, messageType)
          setMessage(message)
        }}
        postBack={submitForm}
        onCancel={onCancel}
      />
      {isUmpire &&
        <Box mt={1}>
          <PrivateChatInputToggle
            privatValue={privatMessageValue}
            clearPrivateStorage={(type: string): void => setPrivateMessageType(type)}
            postBack={(message, messageType): void => {
              onChangePrivateStorage(message, messageType)
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
