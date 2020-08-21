import React, { useState } from 'react'

// /* Import Constants */
import { CHAT_CHANNEL_ID } from '@serge/config'

// /* Import Stylesheet */
import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Import components */
import MessagesList from '../../messages-list'
import MessageCreator from '../../message-creator'
import { Message } from '@serge/custom-types'

/* Render component */
export const Chat: React.FC<PropTypes> = ({ wargameTitle, selectedForce, selectedRole, chatChannel }) => {
  const [messages, setMessages] = useState(chatChannel)

  const messageHandler = (data: Message): void => setMessages([...messages, data])

  return <div className={styles.main}>
    <div className={styles.messages}>
      <MessagesList currentChannel={CHAT_CHANNEL_ID} userId={`${wargameTitle}-${selectedForce}-${selectedRole}`} messages={messages} />
    </div>
    <div className={styles.chat}>
      <MessageCreator from={selectedForce} channel={CHAT_CHANNEL_ID} role={selectedRole} postBack={messageHandler}/>
    </div>
  </div>
}

export default Chat
