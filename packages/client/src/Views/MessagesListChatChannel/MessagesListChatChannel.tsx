import React from 'react'
import { AdminMessage } from '@serge/components'
import { usePlayerUiState } from '../../Store/PlayerUi'
import '@serge/themes/App.scss'
import Props from './types'

const MessagesListChatChannel = ({ messages, markAllAsRead }: Props): React.ReactElement | null => {

  const { selectedRole } = usePlayerUiState()
  if (selectedRole === undefined) throw new Error('selectedRole is undefined')

  return (<>
    <span className='link link--noIcon link--secondary' onClick={markAllAsRead}>Mark all as read</span>
    {messages.map((message, id) => {
        return (
          <div key={id}>
            <AdminMessage roleId={selectedRole} message={message} />
          </div>
        )
      })
    }
  </>)
}

export default MessagesListChatChannel
