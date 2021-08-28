import React, { useEffect, useState } from 'react'

import NewMessage from './NewMessage'
import { ChannelMessagesList } from '@serge/components'
import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
  saveMessage,
  markUnread
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import { CoaStatusBoard } from "@serge/components";
import '@serge/themes/App.scss'

const Channel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce, selectedRole, selectedRoleName } = state
  const isUmpire = selectedForce && selectedForce.umpire
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const generateNextReference = (): number => {
    return state.nextMsgReference
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

  const handleUnreadMessage = (message: MessageChannel): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channelId, message))
  }

  const handleChange = (nextMsg: MessageCustom): void => {
    console.log('sending modified message', nextMsg)
    saveMessage(state.currentWargame, nextMsg.details, nextMsg.message)()
  }

  const icons = state.channels[channelId].forceIcons
  const colors = state.channels[channelId].forceColors

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <CoaStatusBoard
        templates={state.allTemplatesByKey}
        rfiMessages={state.rfiMessages}
        role={{
          forceId: selectedForce.uniqid, 
          forceName: selectedForce.name,
          roleId: selectedRole, 
          roleName: selectedRoleName
        }}
        forces={state.allForces}
        isUmpire={true}
        channel={state.channels[channelId]}
        onChange={() => {}}
      />

      {colors && colors.length === 888 && <ChannelMessagesList
        messages={state.channels[channelId].messages || []}
        onRead={handleOpenMessage}
        onUnread={handleUnreadMessage}
        turnPresentation={state.turnPresentation}
        role={selectedRole}
        isRFIManager={state.isRFIManager}
        isUmpire={!!isUmpire}
        onChange={handleChange}
        playerForceId={selectedForce.uniqid}
        icons={icons || []}
        colors={colors || []}
        onMarkAllAsRead={(): void => dispatch(markAllAsRead(channelId))}
      />}
      {
        state.channels[channelId].observing === false &&
        <NewMessage
          orderableChannel={true}
          curChannel={channelId}
          generateNextReference={generateNextReference}
          privateMessage={!!selectedForce.umpire}
          templates={state.channels[channelId].templates || []}
        />
      }
    </div>
  )
}

export default Channel
