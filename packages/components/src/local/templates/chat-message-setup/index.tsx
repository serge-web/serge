import React, { useState } from 'react'

/* Import Types */
import Props from './types/props'

// /* Import Constants */
import { CHAT_CHANNEL_ID } from '@serge/config'

/* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import Component */
import ChatMessagesList from '../../organisms/chat-messages-list'
import ChatEntryForm from '../../form-elements/chat-entry-form'
import { ChatMessage } from '@serge/custom-types'

/* Render component */
export const ChatMessageSetup: React.FC<Props> = ({ selectedForce, selectedRole, chatChannel }: Props) => {
  const [messages, setMessages] = useState(chatChannel)
  const currentChannel = CHAT_CHANNEL_ID

  const messageHandler = (data: ChatMessage): void => setMessages([...messages, data])

  return (
    <React.Fragment>
      <ChatMessagesList
        colors={[
          '#0F0'
        ]}
        icons={[
          './images/default_img/forceDefault.png'
        ]}
        messages={messages}
      />
      <ChatEntryForm from={selectedForce} channel={currentChannel} role={selectedRole} postBack={messageHandler} />
    </React.Fragment>
  )
}

export default ChatMessageSetup
