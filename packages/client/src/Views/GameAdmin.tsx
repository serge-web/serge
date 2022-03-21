import { MessageChannel } from '@serge/custom-types'
import { setMessageState } from '@serge/helpers'
import React from 'react'
import { updateMessageState } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import MessageCreatorChatChannel from '../Components/MessageCreatorChatChannel/MessageCreatorChatChannel'
import { CHAT_CHANNEL_ID } from '../consts'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'
import MessagesListChatChannel from './MessagesListChatChannel/MessagesListChatChannel'
import MessagesListRenderProp from './MessagesListRenderProp'

const GameAdmin = (): React.ReactElement => {
  const dispatch = usePlayerUiDispatch()
  const { currentWargame, selectedForce, selectedRole, feedbackMessages, wargameTitle, chatChannel } = usePlayerUiState()
  const selectedForceId = selectedForce ? selectedForce.uniqid : ''

  const markAllAsRead = (): void => {
    chatChannel.messages.forEach((message) => {
      setMessageState(currentWargame, selectedForceId, selectedRole, message._id || '')
    })
    dispatch(updateMessageState(true))
  }

  return (
    <div className='contain-game-admin'>
      <MessagesListRenderProp
        curChannel={CHAT_CHANNEL_ID}
        messages={chatChannel.messages}
        userId={`${wargameTitle}-${selectedForce}-${selectedRole}`}
        render={(messages: MessageChannel[]) => (
          <MessagesListChatChannel messages={messages} markAllAsRead={markAllAsRead} />
        )}
      />

      <div className='new-message-creator wrap' data-tour='seventh-step'>
        <MessageCreatorChatChannel schema={chatChannel.template} />
      </div>
    </div>
  )
}

export default GameAdmin
