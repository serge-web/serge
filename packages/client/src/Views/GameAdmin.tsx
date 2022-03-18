import React, { useState, useEffect } from 'react'
import { CHAT_CHANNEL_ID, expiredStorage, LOCAL_STORAGE_TIMEOUT } from '../consts'
import MessageCreatorChatChannel from '../Components/MessageCreatorChatChannel/MessageCreatorChatChannel'
import MessagesListChatChannel from './MessagesListChatChannel/MessagesListChatChannel'
import MessagesListRenderProp from './MessagesListRenderProp'
import { usePlayerUiState } from '../Store/PlayerUi'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import { useDispatch } from 'react-redux'
import { updateAdminMessages } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

const GameAdmin = (): React.ReactElement => {
  const state = usePlayerUiState()
  const dispatch = useDispatch()

  const markAllAsRead = (): void => {
    const unreadMessageList: MessageCustom[] = []
    state.chatChannel.messages.forEach((message) => {
      if (!message.hasBeenRead) {
        message.hasBeenRead = true
        unreadMessageList.push(message as MessageCustom)
      }
    })
    // update feedback message read status
    if (unreadMessageList.length) {
      dispatch(updateAdminMessages(state.currentWargame, unreadMessageList))
    }
  }

  return (
    <div className='contain-game-admin'>
      <MessagesListRenderProp
        curChannel={CHAT_CHANNEL_ID}
        messages={state.chatChannel.messages}
        userId={`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}`}
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
