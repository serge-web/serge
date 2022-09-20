import { ChannelMessagesList, ChatEntryForm, ChatMessagesList } from '@serge/components'
import { ChannelChat, ChatMessage, MessageChannel, MessageCustom } from '@serge/custom-types'
import { getUnsentMessage, saveUnsentMessage, clearUnsentMessage } from '@serge/helpers'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import ResizeObserver from 'resize-observer-polyfill'
import {
  getAllWargameMessages, markAllAsRead, markUnread, openMessage, saveMessage
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { saveNewActivityTimeMessage } from '../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'

import '@serge/themes/App.scss'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'
import NewMessage from './NewMessage'
import { MessageReadInteraction, MessageSentInteraction, MessageUnReadInteraction, PlainInteraction } from '@serge/custom-types/player-log'
import { CoreMessage } from '@serge/custom-types/message'
import { MESSAGE_UNREAD_INTERACTION, MESSAGE_SENT_INTERACTION, MESSAGE_READ_INTERACTION } from '@serge/config'

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
  
  const chatDefinition = channelUI.cData as ChannelChat
  const [hideAuthor] = useState<boolean>(!!chatDefinition.hideMessageAuthor)
  const selectedForceId = state.selectedForce ? state.selectedForce.uniqid : ''
  
  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(playerUiDispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const messageHandler = (post: ChatMessage): void => {   
    const { details } = post
    
    const sendMessage: MessageSentInteraction = {
      aType: MESSAGE_SENT_INTERACTION,
      _id: post._id
    }
    saveNewActivityTimeMessage(details.from.roleId, sendMessage, state.currentWargame)(dispatch)
    saveMessage(state.currentWargame, post.details, post.message)()
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
  const messages = state.channels[channelId].messages as MessageChannel[]

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
    // since this is a message, we know it must come from CoreMessage
    const coreMessage = message as any as CoreMessage
    const unreadMessage: MessageUnReadInteraction = {
      aType: MESSAGE_UNREAD_INTERACTION,
      _id: message._id || 'na'
    }
    saveNewActivityTimeMessage(coreMessage.details.from.roleId, unreadMessage, state.currentWargame)(dispatch)

    playerUiDispatch(markUnread(channelId, message))
  }
  const newActiveMessage = (roleId: string, activityMessage: string) => {
    // we don't have a message id at this point, player has only opened empty template
    const newMessage: PlainInteraction = {
      aType: activityMessage
    }
    saveNewActivityTimeMessage(roleId, newMessage, state.currentWargame)(dispatch)
  }

  const svaeMessage = (value: string, messageType: string): void | string => {
    return value && saveUnsentMessage(value, state.currentWargame, selectedForceId, state.selectedRole, channelId, messageType)
  }

  const getMessageValue = (chatType: string): string => {
    return chatType && getUnsentMessage(state.currentWargame, selectedForceId, state.selectedRole, channelId, chatType)
  }

  const removeSendMessage = (data: string[]): void => {
    data && data.forEach((removeType) => {
      return clearUnsentMessage(state.currentWargame, selectedForceId, state.selectedRole, channelId, removeType)
    })
  }

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      {
        typeof isCustomChannel === 'boolean' && isCustomChannel
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
            messages={messages || []}
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
              typeof isCustomChannel === 'boolean' && isCustomChannel
                ? <NewMessage
                  activityTimeChanel={newActiveMessage}
                  orderableChannel={true}
                  curChannel={channelId}
                  privateMessage={!!selectedForce.umpire}
                  templates={channelUI.templates as any}
                />
                : <ChatEntryForm
                  onChangePrivateStorage={svaeMessage}
                  privatMessageValue={getMessageValue}
                  removeChatEntryMessage={removeSendMessage}
                  chatEntryFormValue={getMessageValue}
                  onchangeCheatInputMessage={svaeMessage}
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
