import { faEnvelope, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import AdminMessage from '../../Components/local/molecules/admin-message'
import { MessageChannel } from 'src/custom-types'
import { isMessageReaded } from 'src/Helpers'
import 'src/themes/App.scss'
import sortBy from 'lodash/sortBy'
import React, { useEffect, useMemo, useRef } from 'react'
import { usePlayerUiState } from '../../Store/PlayerUi'
import Props from './types'

const MessagesListChatChannel = ({ messages, markAllAsRead }: Props): React.ReactElement | null => {
  const { currentWargame, selectedForce, selectedRole } = usePlayerUiState()
  if (selectedRole === undefined) throw new Error('selectedRole is undefined')

  const selectedForceId = selectedForce ? selectedForce.uniqid : ''
  const msgRef = useRef<HTMLDivElement | null>(null)
  const orderedMessages = useMemo(() => sortBy(messages, '_id'), [messages.length])

  const isMessageRead = (message: MessageChannel): boolean => isMessageReaded(currentWargame, selectedForceId, selectedRole, message._id || '')
  const isMessageUnreadExists = orderedMessages.some(message => !isMessageRead(message))

  // on new message arrived, we should scroll the last message in to view
  useEffect(() => {
    if (msgRef && msgRef.current && msgRef.current.parentElement) {
      msgRef.current.parentElement.scrollTop = msgRef.current.parentElement.scrollHeight
    }
  }, [msgRef.current])

  return (
    <>
      <span className='message-status-icon'>
        <FontAwesomeIcon icon={isMessageUnreadExists ? faEnvelope : faEnvelopeOpen} onClick={markAllAsRead} style={{ cursor: 'pointer' }} />
      </span>
      {
        orderedMessages.map((message, idx) => {
          message.hasBeenRead = isMessageRead(message)

          return (
            <div key={idx} ref={msgRef}>
              <AdminMessage roleId={selectedRole} message={message} />
            </div>
          )
        })
      }
    </>
  )
}

export default MessagesListChatChannel
