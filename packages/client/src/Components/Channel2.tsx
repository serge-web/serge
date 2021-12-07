import React, { useEffect, useState } from 'react'

import NewMessage from './NewMessage'
import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
  saveMessage,
  markUnread
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { ChannelCollab, MessageChannel, MessageCustom, ParticipantCollab, TemplateBody } from '@serge/custom-types'
import { CoaStatusBoard2 } from "@serge/components";
import { CHANNEL_COLLAB, SpecialChannelTypes } from "@serge/config";
import '@serge/themes/App.scss'

const Channel2: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce, selectedRole, selectedRoleName, gameDate } = state
  const isUmpire = selectedForce && selectedForce.umpire
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const channel = state.channels[channelId]
  const v3Channel = channel.v3Channel as unknown as ChannelCollab
  if(!v3Channel) {
    console.warn('failed to receive v3 data')
    return (
      <div/>
    )
  }

  useEffect(() => {
    const channelClassName = v3Channel.name.toLowerCase().replace(/ /g, '-')
    if (channel.messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const handleOpenMessage = (message: MessageChannel): void => {
    dispatch(openMessage(channelId, message))
  }

  const markAllMsgAsRead = (): void => {
    dispatch(markAllAsRead(channelId))
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

  const icons = channel.forceIcons
  const colors = channel.forceColors
  const channelFormat = channel.format
  const channelMessages = channel.messages
  const messages = channelMessages ? channelMessages as MessageChannel[] : []
  const isLegacyCollabWorking = channelFormat === SpecialChannelTypes.CHANNEL_COLLAB_EDIT || channelFormat === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE
  
  //
  const role = {
    forceId: selectedForce.uniqid,
    forceName: selectedForce.name,
    roleId: selectedRole,
    roleName: selectedRoleName
  }
  const participationsForMyForce = v3Channel.participants.filter((p: ParticipantCollab) => p.force === role.forceName)
  // participations relate to me if they contain no roles, or if they contain my role
  const isParticipating = participationsForMyForce.filter((p: ParticipantCollab) => (p.roles.length === 0 || p.roles.includes(role.roleId)))
  // can I create messages in the channel?
  const canCreateMessages = isParticipating.filter((p: ParticipantCollab) => (p.canCreate)).length > 0

  const templates = channel.templates || []
  const allTemplates = state.allTemplatesByKey
  const newMessageTemplate = allTemplates[v3Channel.newMessageTemplate._id]
  // if this is a collab working channel, strip out any chat templates - since we only use structured messages
  // in collab working channels
 // const trimmedTemplates = isLegacyCollabWorking ? templates.filter((temp: TemplateBody) => temp.title !== 'Chat') : templates
  const trimmedTemplates = [newMessageTemplate]

  const observing = !!channel.observing

  const isCollabEdit = v3Channel.channelType === CHANNEL_COLLAB

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <div className='flexlayout__scrollbox' style={{ height: observing ? '100%' : 'calc(100% - 40px)' }}>
        { isCollabEdit && (
          <CoaStatusBoard2
            currentWargame={state.currentWargame}
            onMessageRead={handleOpenMessage}
            onMarkAllAsRead={markAllMsgAsRead}
            templates={state.allTemplatesByKey}
            messages={messages as MessageCustom[]}
            role={role}
            forces={state.allForces}
            isUmpire={!!isUmpire}
            isObserver={observing}
            channelColb={v3Channel as ChannelCollab}
            onChange={handleChange}
            gameDate={gameDate}
          />
        )}
      </div>
      {
        !observing && canCreateMessages && trimmedTemplates.length > 0 &&
        <NewMessage
          orderableChannel={true}
          curChannel={channelId}
          confirmCancel={isCollabEdit}
          privateMessage={!!selectedForce.umpire}
          templates={trimmedTemplates}
        />
      }
    </div>
  )
}

export default Channel2
