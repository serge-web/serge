import React, { useEffect, useState } from 'react'
import { ChannelMapping, MappingMessage, MessageChannel, MessageDetails } from 'src/custom-types'
import {
  getAllWargameMessages, sendMappingMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import 'src/themes/App.scss'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'

import { Phase } from 'src/config'
import CoreMapping from './local/atoms/core-mapping'

const CoreMappingChannel: React.FC<{ channelId: string, isCustomChannel?: boolean }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const playerUiDispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedRole, selectedForce } = state
  const channelUI = state.channels[channelId]
  // const selectedForceId = state.selectedForce ? state.selectedForce.uniqid : ''
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  
  const channel = channelUI.cData as ChannelMapping
  const messages = state.channels[channelId].messages as Array<MessageChannel>
  
  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(playerUiDispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const messageHandler = (details: MessageDetails, message: MappingMessage): void => {
    console.log('xx> save message: ', details, message)
    sendMappingMessage(state.currentWargame, details, message)
  }

  console.log('xx> messages: ', channelUI.messages)
  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <CoreMapping
        postBack={messageHandler}
        channel={channel}
        currentPhase={Phase.Planning}
        currentTurn={1}
        forces={[]}
        messages={messages}
        playerForce={selectedForce}
        playerRole={selectedRole}
        openPanelAsDefault={true}
      />
    </div>
  )
}

export default CoreMappingChannel
