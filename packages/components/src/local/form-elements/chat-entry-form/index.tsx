import { Box } from '@material-ui/core'
import { UNSENT_CHAT_MESSAGE_TYPE, UNSENT_PRIVATE_MESSAGE_TYPE } from '@serge/config'
import { MessageDetails, MessagePlanning } from '@serge/custom-types'
import React, { useRef, useState } from 'react'
import { dummyMessages } from '../../organisms/support-panel/helpers/dummy_messages'
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
  turnNumber,
  clearCachedMessage,
  onchangeChatInputMessage,
  onChangePrivateStorage,
  privatMessageValue,
  chatEntryFormValue
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
      messageType: UNSENT_CHAT_MESSAGE_TYPE,
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
    clearCachedMessage && clearCachedMessage([UNSENT_PRIVATE_MESSAGE_TYPE, UNSENT_CHAT_MESSAGE_TYPE])
    setMessage('')
    setPrivateMessage('')
    messageEle.current.clear()
    privateMessageEle && privateMessageEle.current && privateMessageEle.current.clear()
  }

  const onCancel = () => {
    messageEle.current.clear()
    privateMessageEle.current.clear()
    onchangeChatInputMessage('', UNSENT_CHAT_MESSAGE_TYPE)
    onChangePrivateStorage('', UNSENT_PRIVATE_MESSAGE_TYPE)
    clearCachedMessage && clearCachedMessage([UNSENT_PRIVATE_MESSAGE_TYPE, UNSENT_CHAT_MESSAGE_TYPE])
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
