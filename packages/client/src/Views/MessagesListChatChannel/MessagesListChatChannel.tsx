import React, { RefObject, useEffect, useMemo, useRef, useState } from 'react'
import { AdminMessage } from '@serge/components'
import { usePlayerUiState } from '../../Store/PlayerUi'
import '@serge/themes/App.scss'
import Props from './types'
import sortBy from 'lodash/sortBy'

const MessagesListChatChannel = ({ messages, markAllAsRead }: Props): React.ReactElement | null => {

  const { selectedRole } = usePlayerUiState()
  if (selectedRole === undefined) throw new Error('selectedRole is undefined')

  let msgRef = useRef<HTMLDivElement | null>(null)
  const orderedMessages = useMemo(() => sortBy(messages, '_id'), [messages.length]);

  // on new message arrived, we should scroll the last message in to view
  useEffect(() => {
    if (msgRef && msgRef.current && msgRef.current.parentElement) {
      msgRef.current.parentElement.scrollTop = msgRef.current.parentElement.scrollHeight
    }
  }, [msgRef.current])

  return (
    <>
      <span className='link link--noIcon link--secondary' onClick={markAllAsRead}>Mark all as read</span>
      {
        orderedMessages.map((message, idx) => {
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
