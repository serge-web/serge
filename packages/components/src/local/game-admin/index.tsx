import React, { useState, useEffect } from 'react'

// /* Import Constants */
import { CHAT_CHANNEL_ID } from "@serge/config";

// /* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

// /* import Helpers */
import markAllAsRead from './helpers/mark-all-as-read'

/* Import components */
import MessagesList from '../messages-list'

/* Render component */
export const GameAdmin: React.FC<PropTypes> = ({ wargameTitle, selectedForce, selectedRole, chatChannel }) => {
  
  const [ allMarkedRead, setAllMarkedRead ] = useState(false)

  useEffect(() => {
    const channelLength = 1
    channelLength && setAllMarkedRead(false)
  }, [])

  return <div>
    <MessagesList currentChannel={CHAT_CHANNEL_ID} userId={`${wargameTitle}-${selectedForce}-${selectedRole}`} allMarkedRead={allMarkedRead} markAllAsRead={markAllAsRead} messages={chatChannel} />
  </div>
}

export default GameAdmin
