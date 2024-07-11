import CollabStatusBoard from './local/collab-status-board'
import NewMessage from './local/form-elements/new-message'
import { CHANNEL_COLLAB, MESSAGE_SENT_INTERACTION, PLAIN_INTERACTION } from 'src/config'
import { ChannelCollab, MessageChannel, MessageCustom, MessageDetails, ParticipantCollab, TypeOfCustomMessage } from 'src/custom-types'
import { getUnsentMessage, saveUnsentMessage, clearUnsentMessage } from 'src/Helpers'
import { MessageSentInteraction, PlainInteraction } from 'src/custom-types/player-log'
import 'src/themes/App.scss'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewActivityTimeMessage } from '../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import {
  getAllWargameMessages, markAllAsRead,
  markAllAsUnread, openMessage, saveMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'

const CollabChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const playerUiDispatch = usePlayerUiDispatch()
  const dispatch = useDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [expandedRowId, setExpandedRowId] = useState('')

  const { selectedForce, selectedRole, selectedRoleName, gameDate } = state
  const isUmpire = selectedForce && selectedForce.umpire
  const selectedForceId = state.selectedForce ? state.selectedForce.uniqid : ''
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
  
  // deepScan: This prop requires a new object on every render for some reason,
  // so we cannot use useCallback or useMemo without breaking functionality.
  // The prop should be optimized in the future.
  const handleOpenMessage = (message: MessageChannel): void => {
    playerUiDispatch(openMessage(channelId, message))
  }
  
  // deepScan: This prop requires a new object on every render for some reason,
  // so we cannot use useCallback or useMemo without breaking functionality.
  // The prop should be optimized in the future.
  const markAllMsgAsRead = (): void => {
    playerUiDispatch(markAllAsRead(channelId))
  }
  
  // deepScan: This prop requires a new object on every render for some reason,
  // so we cannot use useCallback or useMemo without breaking functionality.
  // The prop should be optimized in the future.
  const handleUnreadAllMessage = (): void => {
    playerUiDispatch(markAllAsUnread(channelId))
  }

  // deepScan: This prop requires a new object on every render for some reason,
  // so we cannot use useCallback or useMemo without breaking functionality.
  // The prop should be optimized in the future.
  const handleChange = (nextMsg: MessageCustom, messageType: TypeOfCustomMessage): void => {
    const { details } = nextMsg
    setExpandedRowId(nextMsg._id)
    saveMessage(state.currentWargame, details, nextMsg.message, nextMsg.templateId, messageType)()
    const saveMessageInt: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION
    }
   
    saveNewActivityTimeMessage(details.from.roleId, saveMessageInt, state.currentWargame)(dispatch)
  }

  const messageHandler = (details: MessageDetails, message: any, templeteId: string, messageType: TypeOfCustomMessage): void => {
    const sendMessage: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION
    }
    saveNewActivityTimeMessage(details.from.roleId, sendMessage, state.currentWargame)(dispatch)
    saveMessage(state.currentWargame, details, message, templeteId, messageType)()
  }

  // deepScan: This prop requires a new object on every render for some reason,
  // so we cannot use useCallback or useMemo without breaking functionality.
  // The prop should be optimized in the future.
  const collabActivityMessage = (getRoleId: string, _activityType: string) => {
    const collab: PlainInteraction = {
      aType: PLAIN_INTERACTION
    }
    getRoleId && saveNewActivityTimeMessage(getRoleId, collab, state.currentWargame)(dispatch)
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
  const participationsForMyForce = channel.participants.filter((p: ParticipantCollab) => p.forceUniqid === role.forceId)
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

  const newActiveMessage = (roleId: string, activityMessage: string) => {
    // we don't have a message id at this point, player has only opened empty template
    const newMessage: PlainInteraction = {
      aType: activityMessage
    }
    saveNewActivityTimeMessage(roleId, newMessage, state.currentWargame)(dispatch)
  }

  const cacheMessage = (value: string | any, messageType: string): void | string => {
    return value && saveUnsentMessage(value, state.currentWargame, selectedForceId, state.selectedRole, channelId, messageType)
  }

  const getCachedMessage = (chatType: string): string => {
    return chatType && getUnsentMessage(state.currentWargame, selectedForceId, state.selectedRole, channelId, chatType)
  }

  const clearCachedMessage = (data: string[]): void => {
    data && data.forEach((removeType) => {
      return clearUnsentMessage(state.currentWargame, selectedForceId, state.selectedRole, channelId, removeType)
    })
  }
  
  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <div className='flexlayout__scrollbox' style={{ height: observing ? '100%' : 'calc(100% - 40px)' }}>
        {isCollabEdit && (
          <CollabStatusBoard
          /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
            collabActivity={collabActivityMessage}
            currentWargame={state.currentWargame}
            /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
            onMessageRead={handleOpenMessage}
            /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
            onMarkAllAsRead={markAllMsgAsRead}
            /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
            onMarkAllAsUnRead={handleUnreadAllMessage}
            expandedRowId={expandedRowId}
            templates={state.allTemplatesByKey}
            messages={messages as MessageCustom[]}
            role={role}
            forces={state.allForces}
            phase={state.phase}
            isUmpire={!!isUmpire}
            isObserver={observing}
            channelColb={channel as ChannelCollab}
            /* deepscan-disable REACT_INEFFICIENT_PURE_COMPONENT_PROP */
            onChange={handleChange}
            gameDate={gameDate}
          />
        )}
      </div>
      {
        canCreateMessages &&
        <NewMessage
          activityTimeChanel={newActiveMessage}
          saveCachedNewMessageValue={cacheMessage}
          getCachedNewMessagevalue={getCachedMessage}
          channel={channel}
          clearCachedNewMessage={clearCachedMessage}
          orderableChannel={true}
          curChannel={channelId}
          confirmCancel={isCollabEdit}
          privateMessage={!!selectedForce.umpire}
          templates={trimmedTemplates}
          // @ts-ignore
          selectedRole={role}
          channels={state.channels}
          currentTurn={state.currentTurn}
          currentWargame={state.currentWargame}
          gameDate={state.gameDate}
          cacheMessage={saveMessage}
          saveNewActivityTimeMessage={saveNewActivityTimeMessage}
          selectedForce={state.selectedForce}
          selectedRoleName={state.selectedRoleName}
          dispatch={dispatch}
          postBack={messageHandler}
        />
      }
    </div>
  )
}

export default CollabChannel
