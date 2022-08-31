import React, { useEffect, useState } from 'react'

import NewMessage from './NewMessage'
import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
  markAllAsUnread,
  saveMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { saveNewActivityTimeMessage2 } from '../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { useDispatch } from 'react-redux'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { ChannelCollab, MessageChannel, MessageCustom, ParticipantCollab } from '@serge/custom-types'
import { CollabStatusBoard } from '@serge/components'
import { CHANNEL_COLLAB, MESSAGE_SENT_INTERACTION, PLAIN_INTERACTION } from '@serge/config'
import '@serge/themes/App.scss'
import { MessageSentInteraction, PlainInteraction } from '@serge/custom-types/player-log'

const CollabChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const playerUiDispatch = usePlayerUiDispatch()
  const dispatch = useDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce, selectedRole, selectedRoleName, gameDate } = state
  const isUmpire = selectedForce && selectedForce.umpire
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const channelUI = state.channels[channelId]
  const channel = channelUI.cData as ChannelCollab
  if (!channel) {
    console.warn('failed to receive v3 data')
    return (
      <div />
    )
  }

  useEffect(() => {
    const channelClassName = channel.name.toLowerCase().replace(/ /g, '-')
    if (channelUI.messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(playerUiDispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const handleOpenMessage = (message: MessageChannel): void => {
    playerUiDispatch(openMessage(channelId, message))
  }

  const markAllMsgAsRead = (): void => {
    playerUiDispatch(markAllAsRead(channelId))
  }

  const handleUnreadAllMessage = (): void => {
    playerUiDispatch(markAllAsUnread(channelId))
  }

  const handleChange = (nextMsg: MessageCustom): void => {
    const { details } = nextMsg
    saveMessage(state.currentWargame, details, nextMsg.message)()
    const saveMessageInt: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION,
      _id: nextMsg._id
    }
    saveNewActivityTimeMessage2(details.from.roleId, saveMessageInt, state.currentWargame)(dispatch)
  }
  const collabActivityMessage = (getRoleId: string, activityType: string) => {
    const collab: PlainInteraction = {
      aType: PLAIN_INTERACTION
    }
    getRoleId && saveNewActivityTimeMessage2(getRoleId, collab, state.currentWargame)(dispatch)
  }
  const channelMessages = channelUI.messages
  const messages = channelMessages ? channelMessages as MessageChannel[] : []

  //
  const role = {
    forceId: selectedForce.uniqid,
    forceName: selectedForce.name,
    roleId: selectedRole,
    roleName: selectedRoleName
  }
  const participationsForMyForce = channel.participants.filter((p: ParticipantCollab) => p.force === role.forceName)
  // participations relate to me if they contain no roles, or if they contain my role
  const isParticipating = participationsForMyForce.filter((p: ParticipantCollab) => (p.roles.length === 0 || p.roles.includes(role.roleId)))
  // can I create messages in the channel?
  const canCreateMessages = isParticipating.filter((p: ParticipantCollab) => (p.canCreate)).length > 0

  const allTemplates = state.allTemplatesByKey
  if (channel.newMessageTemplate === undefined) {
    console.warn('Problem - new message template not specified')
  }
  const trimmedTemplates = channel.newMessageTemplate ? [allTemplates[channel.newMessageTemplate._id]] : []

  const observing = !!channelUI.observing

  const isCollabEdit = channel.channelType === CHANNEL_COLLAB 

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <div className='flexlayout__scrollbox' style={{ height: observing ? '100%' : 'calc(100% - 40px)' }}>
        {isCollabEdit && (
          <CollabStatusBoard
            collabActivity={collabActivityMessage}
            currentWargame={state.currentWargame}
            onMessageRead={handleOpenMessage}
            onMarkAllAsRead={markAllMsgAsRead}
            onMarkAllAsUnRead={handleUnreadAllMessage}
            templates={state.allTemplatesByKey}
            messages={messages as MessageCustom[]}
            role={role}
            forces={state.allForces}
            isUmpire={!!isUmpire}
            isObserver={observing}
            channelColb={channel as ChannelCollab}
            onChange={handleChange}
            gameDate={gameDate}
          />
        )}
      </div>
      {
        canCreateMessages &&
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

export default CollabChannel
