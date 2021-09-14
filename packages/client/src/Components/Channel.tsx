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
import { MessageChannel, MessageCustom, TemplateBody } from '@serge/custom-types'
import { CoaStatusBoard } from "@serge/components";
import { SpecialChannelTypes } from "@serge/config";
import '@serge/themes/App.scss'

const Channel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce, selectedRole, selectedRoleName, gameDate } = state
  const isUmpire = selectedForce && selectedForce.umpire
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

  const handleUnreadMessage = (message: MessageChannel): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    dispatch(markUnread(channelId, message))
  }

  const handleChange = (nextMsg: MessageCustom): void => {
    saveMessage(state.currentWargame, nextMsg.details, nextMsg.message)()
  }

  const icons = state.channels[channelId].forceIcons
  const colors = state.channels[channelId].forceColors
  const channelFormat = state.channels[channelId].format
  const channelMessages = state.channels[channelId].messages
  const messages = channelMessages ? channelMessages as MessageChannel[] : []
  const isCollabWorking = channelFormat === SpecialChannelTypes.CHANNEL_COLLAB_EDIT || channelFormat === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE

  const templates = state.channels[channelId].templates || []
  // if this is a collab working channel, strip out any chat templates - since we only use structured messages
  // in collab working channels
  const trimmedTemplates = isCollabWorking ? templates.filter((temp: TemplateBody) => temp.title !== 'Chat') : templates
  const observing = !!state.channels[channelId].observing

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <div className='flexlayout__scrollbox' style={{ height: observing ? '100%' : 'calc(100% - 40px)' }}>
        {isCollabWorking ? (
          <CoaStatusBoard
            templates={state.allTemplatesByKey}
            messages={messages}
            role={{
              forceId: selectedForce.uniqid,
              forceName: selectedForce.name,
              roleId: selectedRole,
              roleName: selectedRoleName
            }}
            forces={state.allForces}
            isUmpire={!!isUmpire}
            channel={state.channels[channelId]}
            onChange={handleChange}
            gameDate={gameDate}
          />
        ) : (
          <ChannelMessagesList
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
          />
        )}
      </div>
      {
        !observing && trimmedTemplates.length > 0 &&
        <NewMessage
          orderableChannel={true}
          curChannel={channelId}
          privateMessage={!!selectedForce.umpire}
          templates={trimmedTemplates}
        />
      }
    </div>
  )
}

export default Channel
