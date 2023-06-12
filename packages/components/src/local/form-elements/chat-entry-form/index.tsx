import { Box } from '@material-ui/core'
import { PLANNING_MESSAGE, UNSENT_CHAT_MESSAGE_TYPE } from '@serge/config'
import { MessageDetails, MessagePlanning } from '@serge/custom-types'
import React, { useRef, useState } from 'react'
import { dummyMessages } from '../../p9legacy/support-panel/helpers/dummy_messages'
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
      const messages: MessagePlanning[] = dummyMessages.filter((message) => message.messageType === PLANNING_MESSAGE) as MessagePlanning[]
      messages.forEach((msg: MessagePlanning) => {
        console.log('sending', msg._id)
        postBack && postBack(msg.details, msg.message)
      })
    } else {
      postBack && postBack(details, contents)
    }

    postBack && postBack(details, contents)
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
