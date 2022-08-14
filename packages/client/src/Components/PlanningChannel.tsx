import { PlanningMessagesList, SupportPanel } from '@serge/components'
import { ChannelPlanning, ChatMessage, MessageChannel, MessageCustom } from '@serge/custom-types'
import React, { useEffect, useState } from 'react'
import {
  getAllWargameMessages, markAllAsRead, markUnread, openMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import '@serge/themes/App.scss'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'

const PlanningChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const channelUI = state.channels[channelId]
  const channelPlanning = channelUI.cData as ChannelPlanning
  console.log('rendering planning channel', channelPlanning.name)
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

  const markAllAsReadLocal = (): void => {
    dispatch(markAllAsRead(channelId))
  }

  const icons = state.channels[channelId].forceIcons || []
  const colors = state.channels[channelId].forceColors || []
  const names = state.channels[channelId].forceNames || []
  const hideForcesInChannel = !!state.hideForcesInChannels

  // TODO: we have some wrong typing here.  The messages for this channel
  // will all be chat messages plus turn markers.  But, that doesn't match
  // what data is stored in the the channels dictionary
  const messages = state.channels[channelId].messages as any

  const onRead = (detail: MessageCustom): void => {
    dispatch(openMessage(channelId, detail))
  }

  const handleUnreadMessage = (message: MessageChannel | ChatMessage): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channelId, message))
  }

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <SupportPanel />
      <PlanningMessagesList
        messages={messages}
        onRead={onRead}
        playerForceId={selectedForce.name}
        isUmpire={true}
        icons={icons}
        colors={colors}
        names={names}
        onMarkAllAsRead={markAllAsReadLocal}
        turnPresentation={state.turnPresentation}
        onUnread={handleUnreadMessage}
        hideForcesInChannel={hideForcesInChannel}
      />
    </div>
  )
}

export default PlanningChannel
