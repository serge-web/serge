import React, { useEffect, useState } from 'react'

import { umpireForceTemplate } from '../consts'
import NewMessage from './NewMessage'
import { ChannelMessagesList } from '@serge/components'
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

  const generateNextReference = (force: string): number => {
    return force ? 2 : 1
  }

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

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChannelMessagesList
        messages={state.channels[channelId].messages}
        onRead={handleOpenMessage}
        role={selectedRole}
        isRFIManager={state.isRFIManager}
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
          generateNextReference={generateNextReference}
          privateMessage={selectedForce.uniqid === umpireForceTemplate.uniqid}
          templates={state.channels[channelId].templates || []}
        />
      }
    </div>
  )
}

export default Channel
