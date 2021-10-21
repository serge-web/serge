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

const Channel: React.FC<{ channelId: string, onMessageRead?: (c: number) => void }> = ({ channelId, onMessageRead }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const [needUpdateMsg, setUpdateMsgFlag] = useState<boolean>(false)

  const { selectedForce, selectedRole, selectedRoleName, gameDate } = state
  const isUmpire = selectedForce && selectedForce.umpire
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const channel = state.channels[channelId]

  useEffect(() => {
    const channelClassName = channel.name.toLowerCase().replace(/ /g, '-')
    if (channel.messages!.length === 0) {
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

  const icons = channel.forceIcons
  const colors = channel.forceColors
  const channelFormat = channel.format
  const channelMessages = channel.messages
  const messages = channelMessages ? channelMessages as MessageChannel[] : []
  const isCollabWorking = channelFormat === SpecialChannelTypes.CHANNEL_COLLAB_EDIT || channelFormat === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE

  const templates = channel.templates || []
  // if this is a collab working channel, strip out any chat templates - since we only use structured messages
  // in collab working channels
  const trimmedTemplates = isCollabWorking ? templates.filter((temp: TemplateBody) => temp.title !== 'Chat') : templates
  const observing = !!channel.observing

  // determine if this is a collaborative editing channel, since we require the user
  // to confirm cancelling a new message
  const isCollabEdit = isCollabWorking && channel.format && (channel.format === SpecialChannelTypes.CHANNEL_COLLAB_EDIT)

  const [filteredMsg, setFilteredMsg] = useState<MessageCustom[]>(messages as MessageCustom[])

  if (needUpdateMsg && filteredMsg.length !== messages.length) {
    setUpdateMsgFlag(false)
    setFilteredMsg(messages as MessageCustom[])
  }

  const onAddNewMsg = (): void => {
    setUpdateMsgFlag(true)
  }

  const displayArchiveDoc = (show: boolean): void => {
    const allMsg = messages as MessageCustom[]
    if (!show) {
      const activeMsg = allMsg.filter(msg => !msg.details.archive)
      setFilteredMsg(activeMsg)
    } else {
      setFilteredMsg(allMsg)
    }
  }

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <div className='flexlayout__scrollbox' style={{ height: observing ? '100%' : 'calc(100% - 40px)' }}>
        {isCollabWorking ? (
          <CoaStatusBoard
            currentWargame={state.currentWargame}
            onMessageRead={onMessageRead}
            templates={state.allTemplatesByKey}
            messages={filteredMsg}
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
            displayArchiveDoc={displayArchiveDoc}
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
          onMessageAdded={onAddNewMsg}
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

export default Channel
