import React, { useEffect, useState } from 'react'

import { umpireForceTemplate } from '../consts'
import NewMessage from './NewMessage'
import { ChannelMessagesList } from '@serge/components'
import { mostRecentOnly } from '@serge/helpers'
import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
  saveMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import '@serge/themes/App.scss'

const Channel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce, selectedRole } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const handleOpenMessage = (message: MessageChannel): void => {
    dispatch(openMessage(channelId, message))
  }

  const handleChange = (nextMsg: MessageCustom): void => {
    console.log('sending modified message', nextMsg)
    saveMessage(state.currentWargame, nextMsg.details, nextMsg.message)()
  }

  const icons = state.channels[channelId].forceIcons
  const colors = state.channels[channelId].forceColors

  const allMessages = state.channels[channelId].messages

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChannelMessagesList
        messages={messages}
        onRead={handleOpenMessage}
        role={selectedRole}
        onChange={handleChange}
        playerForceId={selectedForce.uniqid}
        icons={icons || []}
        colors={colors || []}
        onMarkAllAsRead={(): void => dispatch(markAllAsRead(channelId))}
      />
      {
        state.channels[channelId].observing === false &&
        <NewMessage
          orderableChannel={true}
          curChannel={channelId}
          privateMessage={selectedForce.uniqid === umpireForceTemplate.uniqid}
          templates={state.channels[channelId].templates || []}
        />
      }
    </div>
  )
}

export default Channel
