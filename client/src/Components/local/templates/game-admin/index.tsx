import React, { useEffect, useState } from 'react'

// /* Import Constants */
import { CHAT_CHANNEL_ID, expiredStorage } from 'src/config'
import { MessageChannel } from 'src/custom-types'

// /* Import Stylesheet */
// import styles from './styles.module.scss'

/* Import types */
import PropTypes from './types/props'

/* Import components */
import AdminMessagesList from '../../organisms/admin-messages-list'
import AdminMessageCreator from '../../molecules/admin-message-creator'

/* Render component */
export const GameAdmin: React.FC<PropTypes> = ({ wargameTitle, selectedForce, selectedRole, selectedRoleName, chatChannel, turnNumber }) => {
  const [messages, setMessages] = useState(chatChannel)
  const [messageList, setMessageList] = useState<Array<MessageChannel>>([])
  const [allMarkedRead, setAllMarkedRead] = useState(false)
  const userId = `${wargameTitle}-${selectedForce.name}-${selectedRole}`
  const currentChannel = CHAT_CHANNEL_ID
  useEffect(() => {
    setMessageList(messages.map((message: MessageChannel) => {
      const hasBeenRead = expiredStorage.getItem(`${userId}${message._id}`) === 'read'
      return {
        ...message,
        open: false,
        hasBeenRead
      }
    }))
  }, [messages])

  // Listen for changes to the allMarkedRead variable
  useEffect(() => {
    if (allMarkedRead) {
      setMessageList(messages.map((message: MessageChannel) => ({ ...message, hasBeenRead: true })))
    }
  }, [allMarkedRead])

  // Listen for changes to currentChannel
  useEffect(() => {
    if (messageList && messageList.length === 0) {
      setMessageList(messages.map((message: MessageChannel) => {
        const hasBeenRead = expiredStorage.getItem(`${userId}${message._id}`) === 'read'
        return {
          ...message,
          open: false,
          hasBeenRead
        }
      }))
    }
  }, [currentChannel])

  const markAllAsRead = (): void => {
    setAllMarkedRead(true)
  }
  const messageHandler = (data: MessageChannel): void => setMessages([...messages, data])

  return <div>
    <AdminMessagesList force={selectedForce} messages={messageList} markAllAsRead={markAllAsRead} />
    <AdminMessageCreator turnNumber={turnNumber} from={selectedForce} channel={currentChannel} role={selectedRole} roleName={selectedRoleName} postBack={messageHandler}/>
  </div>
}

export default GameAdmin
