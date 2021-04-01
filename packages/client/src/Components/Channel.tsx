import React, { useEffect, useState } from 'react'

import { umpireForceTemplate } from '../consts'
import NewMessage from './NewMessage'
import { ChannelMessagesList } from '@serge/components'

import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import '@serge/themes/App.scss'

const Channel: React.FC<{ channelId: string }> = ({ channelId }) => {
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

  const handleOpenMessage = (message: MessageChannel): void => {
    dispatch(openMessage(channelId, message))
  }

  const handleChange = (nextMsg: MessageCustom): void => {
    console.log('sending modified message', nextMsg)
    // setMessages(messages.map(msg => {
    //   if (msg._id === nextMsg._id) return nextMsg
    //   return msg
    // }))
  }

  const icons = state.channels[channelId].forceIcons
  const colors = state.channels[channelId].forceColors

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChannelMessagesList
        messages={state.channels[channelId].messages}
        onRead={handleOpenMessage}
        onChange={handleChange}
        playerForceId={selectedForce}
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
