import ChannelMessagesList from './local/organisms/channel-messages-list'
import ChatEntryForm from './local/form-elements/chat-entry-form'
import ChatMessagesList from './local/organisms/chat-messages-list'
import NewMessage from './local/form-elements/new-message'
import { ChannelChat, ChatMessage, CoreMessage, MessageChannel, MessageCustom, MessageDetails, MessageInfoTypeClipped, TypeOfCustomMessage } from 'src/custom-types'
import { getUnsentMessage, saveUnsentMessage, clearUnsentMessage } from 'src/Helpers'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import ResizeObserver from 'resize-observer-polyfill'
import {
  getAllWargameMessages, markAllAsRead, markUnread, openMessage, saveMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { saveNewActivityTimeMessage } from '../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'

import 'src/themes/App.scss'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'

import { MessageReadInteraction, MessageSentInteraction, MessageUnReadInteraction } from 'src/custom-types/player-log'
import { MESSAGE_UNREAD_INTERACTION, MESSAGE_SENT_INTERACTION, MESSAGE_READ_INTERACTION, CUSTOM_MESSAGE } from 'src/config'

const ChatChannel: React.FC<{ channelId: string, isCustomChannel?: boolean }> = ({ channelId, isCustomChannel }) => {
  const state = usePlayerUiState()
  const playerUiDispatch = usePlayerUiDispatch()
  const dispatch = useDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedRole, selectedForce } = state
  const chatMessageRef = useRef<any>(null)
  const resizeObserverRef = useRef<any>(null)
  const [chatContainerHeight, setChatContainerHeight] = useState(0)
  const channelUI = state.channels[channelId]
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  
  const channel = channelUI.cData as ChannelChat
  const [hideAuthor] = useState<boolean>(!!channel.hideMessageAuthor)
  const selectedForceId = state.selectedForce ? state.selectedForce.uniqid : ''

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(playerUiDispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const messageHandler = (details: MessageDetails, message: any, templateId: string, messageType: TypeOfCustomMessage): void => {
    const sendMessage: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION
    }
    saveNewActivityTimeMessage(details.from.roleId, sendMessage, state.currentWargame)(dispatch)
    saveMessage(state.currentWargame, details, message, templateId, messageType)()
  }

  const markAllAsReadLocal = (): void => {
    playerUiDispatch(markAllAsRead(channelId))
  }
  
  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries: any) => {
      entries.forEach((entry: any) => {
        const { height } = entry.contentRect
        const tabHeight = 46
        const forcesInChannelHeight = 25
        const margins = 15
        setChatContainerHeight(
          parseInt(height) +
          tabHeight +
          forcesInChannelHeight +
          margins
        )
      })
    })
    if (chatMessageRef.current) resizeObserverRef.current.observe(chatMessageRef.current)
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect()
    }
  }, [chatMessageRef])

  const icons = state.channels[channelId].forceIcons || []
  const colors = state.channels[channelId].forceColors || []
  const names = state.channels[channelId].forceNames || []
  const isUmpire = state.selectedForce && state.selectedForce.umpire
  const observing = !!state.channels[channelId].observing
  const hideForcesInChannel = !!state.hideForcesInChannels

  // TODO: we have some wrong typing here.  The messages for this channel
  // will all be chat messages plus turn markers.  But, that doesn't match
  // what data is stored in the the channels dictionary
  const messages = state.channels[channelId].messages as Array<MessageChannel>

  const onRead = (detail: MessageCustom): void => {
    // since this is a message, we know it must come from CoreMessage
    const coreMessage = detail as any as CoreMessage

    // store the activity
    const readMessage: MessageReadInteraction = {
      aType: MESSAGE_READ_INTERACTION,
      _id: detail._id || 'na'
    }
    saveNewActivityTimeMessage(coreMessage.details.from.roleId, readMessage, state.currentWargame)(dispatch)
   
    playerUiDispatch(openMessage(channelId, detail))
  }

  const handleUnreadMessage = (message: MessageChannel | ChatMessage): void => {
    if (message._id) {
      message.hasBeenRead = false
    }
    if (message.messageType === CUSTOM_MESSAGE) {
      message.isOpen = false
    }
    // since this is a message, we know it must come from CoreMessage
    const coreMessage = message as any as CoreMessage
    const unreadMessage: MessageUnReadInteraction = {
      aType: MESSAGE_UNREAD_INTERACTION,
      _id: message._id || 'na'
    }
    saveNewActivityTimeMessage(coreMessage.details.from.roleId, unreadMessage, state.currentWargame)(dispatch)

    playerUiDispatch(markUnread(channelId, message))
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
  console.log('isCustomChannel', isCustomChannel)
  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      {
        isCustomChannel
          ? <ChannelMessagesList
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
          : <ChatMessagesList
            messages={messages as unknown as Array<ChatMessage | MessageInfoTypeClipped> || []}
            onMarkAllAsRead={markAllAsReadLocal}
            turnPresentation={state.turnPresentation}
            playerRole={selectedRole}
            playerForce={selectedForce.name}
            isUmpire={!!isUmpire}
            icons={icons}
            colors={colors}
            names={names}
            chatContainerHeight={chatContainerHeight}
            observing={observing}
            markUnread={handleUnreadMessage}
            hideForcesInChannel={hideForcesInChannel}
            hideAuthor={hideAuthor}
          />
      }
      {
        !observing &&
        <div className='new-message-creator wrap new-message-orderable' ref={chatMessageRef}>
          <div className='chat-message-container'>
            {
              isCustomChannel
                ? <NewMessage
                  channel={channel}
                  channelId={channelId}
                  saveCachedNewMessageValue={cacheMessage}
                  getCachedNewMessagevalue={getCachedMessage}
                  clearCachedNewMessage={clearCachedMessage}
                  orderableChannel={true}
                  confirmCancel={true}
                  privateMessage={!!selectedForce.umpire}
                  templates={channelUI.templates as any}
                  currentTurn={state.currentTurn}
                  gameDate={state.gameDate}
                  selectedRole={state.selectedRole}
                  selectedForce={state.selectedForce}
                  selectedRoleName={state.selectedRoleName}
                  postBack={messageHandler}
                />
                : <ChatEntryForm
                  turnNumber={state.currentTurn}
                  from={selectedForce}
                  isUmpire={!!isUmpire}
                  channel={channelId}
                  role={state.selectedRole}
                  roleName={state.selectedRoleName}
                  postBack={messageHandler} />
            }
          </div>
        </div>
      }
    </div>
  )
}

export default ChatChannel
