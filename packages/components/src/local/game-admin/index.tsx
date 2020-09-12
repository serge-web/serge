import React, { useState } from 'react'

// /* Import Constants */
import { CHAT_CHANNEL_ID } from '@serge/config'

// /* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Import components */
import AdminMessagesList from '../admin-messages-list'
import MessageCreator from '../message-creator'
import { Message } from '@serge/custom-types'

/* Render component */
export const GameAdmin: React.FC<PropTypes> = ({ wargameTitle, selectedForce, selectedRole, chatChannel }) => {
  const [messages, setMessages] = useState(chatChannel)

  const messageHandler = (data: Message): void => setMessages([...messages, data])

  return <div>
    <AdminMessagesList currentChannel={CHAT_CHANNEL_ID} userId={`${wargameTitle}-${selectedForce}-${selectedRole}`} messages={messages} />
    <MessageCreator from={selectedForce} channel={CHAT_CHANNEL_ID} role={selectedRole} postBack={messageHandler}/>
  </div>
}

export default GameAdmin
