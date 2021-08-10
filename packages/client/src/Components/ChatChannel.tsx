import React, { useEffect, useRef, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill';
import { ChatMessagesList, ChatEntryForm } from '@serge/components'
import { ChatMessage } from '@serge/custom-types'
import { saveMessage } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'

import {
  getAllWargameMessages
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import '@serge/themes/App.scss'

const ChatChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce } = state
  const chatMessageRef = useRef<any>(null);
  const resizeObserverRef = useRef<any>(null);
  const [chatContainerHeight, setChatContainerHeight] = useState(0);
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  useEffect(() => {
    const channelClassName = state.channels[channelId].name.toLowerCase().replace(/ /g, '-')
    if (state.channels[channelId].messages!.length === 0) {
      getAllWargameMessages(state.currentWargame)(dispatch)
    }
    setChannelTabClass(`tab-content-${channelClassName}`)
  }, [])

  const messageHandler = (post: ChatMessage): void => {
    saveMessage(state.currentWargame, post.details, post.message)()
  }

  useEffect(() => {
    resizeObserverRef.current = new ResizeObserver((entries: any) => {
      entries.forEach((entry: any) => {
        const { height } = entry.contentRect;
        const tabHeight = 46;
        const forcesInChannelHeight = 25;
        const margins = 15;
        setChatContainerHeight(
          parseInt(height) + 
          tabHeight + 
          forcesInChannelHeight + 
          margins
        );
      });
    });
    if (chatMessageRef.current) resizeObserverRef.current.observe(chatMessageRef.current);
    return () => {
      if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
    };
  }, [chatMessageRef]);

  const icons = state.channels[channelId].forceIcons || []
  const colors = state.channels[channelId].forceColors || []
  const isUmpire = state.selectedForce && state.selectedForce.umpire

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChatMessagesList
        messages={state.channels[channelId].messages}
        turnPresentation={state.turnPresentation}
        playerForce={selectedForce.name}
        isUmpire={!!isUmpire}
        icons={icons}
        colors={colors}
        chatContainerHeight={chatContainerHeight}
      />
      {
        state.channels[channelId].observing === false &&
        <div className="new-message-creator wrap new-message-orderable" ref={chatMessageRef}>
          <div className="chat-message-container">
            <ChatEntryForm from={selectedForce} isUmpire={!!isUmpire} channel={channelId} role={state.selectedRole} postBack={messageHandler} />
          </div>
        </div>
      }
    </div>
  )
}

export default ChatChannel
