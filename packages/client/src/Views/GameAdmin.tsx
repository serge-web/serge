import React, { useState, useEffect } from 'react'
import { CHAT_CHANNEL_ID, expiredStorage, LOCAL_STORAGE_TIMEOUT } from '../consts'
import MessageCreatorChatChannel from '../Components/MessageCreatorChatChannel/MessageCreatorChatChannel'
import MessagesListChatChannel from './MessagesListChatChannel/MessagesListChatChannel'
import MessagesListRenderProp from './MessagesListRenderProp'
import { usePlayerUiState } from '../Store/PlayerUi'
import { MessageChannel } from '@serge/custom-types'

const GameAdmin = (): React.ReactElement => {
  const state = usePlayerUiState()
  const [allMarkedRead, setAllMarkedRead] = useState<boolean>(false)

  useEffect(() => {
    let channelLength = Object.keys(state.chatChannel.messages).length
    if (channelLength) setAllMarkedRead(false)
  }, [])

  const markAllAsRead = (): void => {
    state.chatChannel.messages.forEach((message) => {
      expiredStorage.setItem(state.currentWargame + message._id, 'read', LOCAL_STORAGE_TIMEOUT)
    })
    setAllMarkedRead(true)
  }

  return (
    <div className='contain-game-admin'>
      <MessagesListRenderProp
        curChannel={CHAT_CHANNEL_ID}
        messages={state.chatChannel.messages}
        userId={`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}`}
        allMarkedRead={allMarkedRead}
        render={(messages: MessageChannel[]) => (
          <MessagesListChatChannel messages={messages} markAllAsRead={markAllAsRead} />
        )}
      />

      <div className='new-message-creator wrap' data-tour='seventh-step'>
        <MessageCreatorChatChannel schema={state.chatChannel.template} />
      </div>
    </div>
  )
}

export default GameAdmin
