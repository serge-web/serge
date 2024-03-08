import React, { useEffect, useMemo, useRef, useState } from 'react'
import { ChannelMapping, MappingMessage, MappingMessageDelta, MessageChannel } from 'src/custom-types'
import {
  getAllWargameMessages, sendMappingMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import 'src/themes/App.scss'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'

import { Phase } from 'src/config'
import CoreMapping from './local/atoms/core-mapping'
import { forceStyles } from 'src/Helpers'
import { isEqual } from 'lodash'

export type PanelSize = {
  width: number
  height: number
}

const CoreMappingChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const playerUiDispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedRole, selectedForce } = state
  const channelUI = state.channels[channelId]
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  
  const channel = channelUI.cData as ChannelMapping
  const messages = state.channels[channelId].messages as Array<MessageChannel>
  const forceStylesArr = forceStyles(state.allForces, false)
  const mapPanelRef = useRef<HTMLDivElement | null>(null)
  const [localMessages, setLocalMessages] = useState<MessageChannel[]>(messages)
  const [panelSize, setPanelSize] = useState<PanelSize>({ width: 0, height: 0 })

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(playerUiDispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  useEffect(() => {
    if (!isEqual(messages, localMessages)) {
      setLocalMessages(messages)
    }
  }, [messages])

  if (mapPanelRef.current && !isEqual(mapPanelRef.current?.clientWidth, panelSize.width)) {
    setPanelSize({ width: mapPanelRef.current?.clientWidth || 0, height: mapPanelRef.current?.clientHeight || 0 })
  }

  const messageHandler = (message: MappingMessage | MappingMessageDelta): void => {
    sendMappingMessage(state.currentWargame, message)
  }

  const coreMappingComponent = useMemo(() => {
    return <CoreMapping
      postBack={messageHandler}
      channel={channel}
      currentPhase={Phase.Planning}
      currentTurn={1}
      forceStyles={forceStylesArr}
      messages={messages}
      playerForce={selectedForce}
      playerRole={selectedRole}
      openPanelAsDefault={true}
      panelSize={panelSize}
    />
  }, [localMessages, panelSize])

  return (
    <div className={channelTabClass} data-channel-id={channelId} ref={mapPanelRef}>
      {coreMappingComponent}
    </div>
  )
}

export default CoreMappingChannel
