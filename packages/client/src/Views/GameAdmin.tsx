import { MessageChannel } from '@serge/custom-types'
import { setMessageState } from '@serge/helpers'
import React, { useMemo } from 'react'
import { updateMessageState } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import MessageCreatorChatChannel from '../Components/MessageCreatorChatChannel/MessageCreatorChatChannel'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'
import MessagesListChatChannel from './MessagesListChatChannel/MessagesListChatChannel'
import MessagesListRenderProp from './MessagesListRenderProp'

const GameAdmin = (): React.ReactElement => {
  const dispatch = usePlayerUiDispatch()
  const { currentWargame, selectedForce, selectedRole, chatChannel } = usePlayerUiState()
  const selectedForceId = selectedForce ? selectedForce.uniqid : ''

  const markAllAsRead = (): void => {
    chatChannel.messages.forEach((message) => {
      setMessageState(currentWargame, selectedForceId, selectedRole, message._id || '')
    })
    dispatch(updateMessageState(true))
  }
  const schema = useMemo(() => {
    return chatChannel.template
  }, [chatChannel.messages.length])

  return (
    <div className='contain-game-admin'>
      <MessagesListRenderProp
        messages={chatChannel.messages}
        render={(messages: MessageChannel[]) => (
          <MessagesListChatChannel messages={messages} markAllAsRead={markAllAsRead} />
        )}
      />

      <div className='new-message-creator wrap' data-tour='seventh-step'>
        <MessageCreatorChatChannel schema={schema} />
      </div>
    </div>
  )
}

export default GameAdmin
