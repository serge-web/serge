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
export const ChatMessageSetup: React.FC<Props> = ({ selectedForce, userId, forceName, selectedRoleId, selectedRoleName, chatChannel, isUmpire }: Props) => {
  const [messages, setMessages] = useState(chatChannel)
  const currentChannel = CHAT_CHANNEL_ID
  console.log('selected force', selectedForce, isUmpire, forceName)

  const messageHandler = (data: ChatMessage): void => setMessages([...messages, data])

  return (
    <React.Fragment>
      <ChatMessagesList
        isUmpire={isUmpire}
        playerForce={forceName}
        userId={userId}
        colors={[
          '#0F0'
        ]}
        icons={[
          './images/default_img/forceDefault.png'
        ]}
        messages={messages}
      />
      <ChatEntryForm from={selectedForce} isUmpire={isUmpire} channel={currentChannel} roleId={selectedRoleId} roleName={selectedRoleName} postBack={messageHandler} />
    </React.Fragment>
  )
}

export default ChatMessageSetup
