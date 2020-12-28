import React from 'react'
import { AdminMessage } from '@serge/components'
import { usePlayerUiState } from '../../Store/PlayerUi'
import '@serge/themes/App.scss'
import Props from './types'

const MessagesListChatChannel = ({ messages, markAllAsRead }: Props): React.ReactElement | null => {

  const { allForces, selectedForce } = usePlayerUiState()

  const force = allForces.find(({ uniqid }) => uniqid === selectedForce)
  if (force === undefined) return null

  return (<>
    <span className='link link--noIcon link--secondary' onClick={markAllAsRead}>Mark all as read</span>
    {messages.map((message, id) => {
        return (
          <div key={id}>
            <AdminMessage force={name} message={message} />
          </div>
        )
      })
    }
  </>)
}

export default MessagesListChatChannel
