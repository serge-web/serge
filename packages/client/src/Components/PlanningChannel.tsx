import { SupportPanel } from '@serge/components'
import { ChannelPlanning, MessageChannel, MessagePlanning } from '@serge/custom-types'
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
  const { allForces, currentWargame, selectedForce, selectedRole } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  const platformTypes = state.allPlatformTypes

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const onReadAll = (): void => {
    dispatch(markAllAsRead(channelId))
  }

  const forceIcons = state.channels[channelId].forceIcons || []
  const forceNames = state.channels[channelId].forceNames || []
  const hideForcesInChannel = !!state.hideForcesInChannels

  // TODO: we have some wrong typing here.  The messages for this channel
  // will all be chat messages plus turn markers.  But, that doesn't match
  // what data is stored in the the channels dictionary
  const messages = state.channels[channelId].messages as any

  const onRead = (detail: MessagePlanning): void => {
    dispatch(openMessage(channelId, detail as any as MessageChannel))
  }

  const onUnread = (message: MessagePlanning): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channelId, message as any as MessageChannel))
  }

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <SupportPanel
        forceIcons={forceIcons}
        channel={channelPlanning}
        platformTypes={platformTypes}
        forceNames={forceNames}
        hideForcesInChannel={hideForcesInChannel}
        messages={messages}
        selectedForce={selectedForce.uniqid}
        selectedRole={selectedRole}
        forces={allForces}
        onReadAll={onReadAll}
        onUnread={onUnread}
        onRead={onRead}
      />
    </div>
  )
}

export default PlanningChannel
