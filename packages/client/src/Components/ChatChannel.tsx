import React, { useEffect, useState } from 'react'
import { UMPIRE_FORCE } from '../consts'
import { ChatMessagesList, ChatEntryForm } from '@serge/components'
import { ChatMessage } from '@serge/custom-types'
import { saveMessage } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import {
  getAllWargameMessages
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import '@serge/themes/App.scss'

const ChatChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])


  const messageHandler = (post: ChatMessage): void => {
    saveMessage(state.currentWargame, post.details, post.message)()
  }

  const isUmpire = state.selectedForce && state.selectedForce.uniqid === UMPIRE_FORCE

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChatMessagesList
        messages={state.channels[channelId].messages}
        playerForce={selectedForce.name}
        isUmpire={isUmpire} 
      />
      {
        state.channels[channelId].observing === false &&
        <ChatEntryForm from={selectedForce} isUmpire={isUmpire} channel={channelId} role={state.selectedRole} postBack={messageHandler} />
      }
    </div>
  )
}

export default ChatChannel
