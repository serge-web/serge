import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { umpireForceTemplate } from '../consts'
import NewMessage from './NewMessage'
import { ChatMessagesList } from '@serge/components'

import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { MessageChannel, MessageCustom } from '@serge/custom-types'
import '@serge/themes/App.scss'
import { INFO_MESSAGE_CLIPPED } from '@serge/config'

const ChatChannel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
  const { selectedForce } = state
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

  const messages = (state.channels[channelId].messages || []).map(item => {
    if (item.messageType === INFO_MESSAGE_CLIPPED) {
      // this is a turn marker, we return it unchanged
      return item
    } else {
      const messageItem: MessageCustom = item
      const {
        details,
        message,
        isOpen,
        hasBeenRead,
        infoType,
        gameTurn
      } = messageItem
      const { role, forceColor } = details.from || {}
      const { messageType, privateMessage } = details
      const dynamicBorderColor = `${forceColor}${hasBeenRead ? 'B3' : ''}`
      const timestamp = moment(details.timestamp)
      const isUmpire = selectedForce.uniqid === umpireForceTemplate.uniqid
      const detail = message || {}
      const onRead = handleOpenMessage
      let title
      if (detail.title) {
        title = detail.title
      } else if (detail.content) {
        // yes, we have content (probably chat) use it
        title = detail.content
      } else {
        // no content, just use message-type
        title = detail.messageType
      }
      return {
        ...item,
        borderColor: dynamicBorderColor,
        infoType,
        gameTurn,
        isOpen,
        title,
        timestamp,
        role,
        forceColor,
        messageType,
        hasBeenRead,
        privateMessage,
        isUmpire,
        detail,
        onRead,
      }
    }
  })
  const icons = state.channels[channelId].forceIcons
  const colors = state.channels[channelId].forceColors

  console.log('state.channels', state.channels);

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChatMessagesList
        messages={[
          {
            _id: '2020-03-25T15:08:47.510Z',
            details: {
              channel: 'game-admin',
              from: {
                force: 'White',
                forceColor: '#FCFBEE',
                icon: 'default_img/umpireDefault.png',
                role: 'Game Control'
              },
              messageType: 'Chat',
              privateMessage: 'Private message here',
              timestamp: '2020-03-25T15:08:47.510Z'
            },
            message: {
              content: 'test\n'
            },
            messageType: 'ChatMessage'
          },
          {
            _id: '2020-03-25T15:08:47.520Z',
            details: {
              channel: 'game-admin',
              from: {
                force: 'Blue',
                forceColor: '#1989dc',
                icon: 'default_img/umpireDefault.png',
                name: 'Blue',
                role: 'CO'
              },
              messageType: 'Chat',
              timestamp: '2020-03-25T15:08:47.510Z'
            },
            message: {
              content: 'Lorem ipsum do lor sit amet adipiscius elit\n'
            },
            messageType: 'ChatMessage'
          }
        ]}
        playerForce="White"
        isUmpire
      />
      {
        state.channels[channelId].observing === false &&
        <NewMessage
          orderableChannel={true}
          curChannel={channelId}
          privateMessage={selectedForce.uniqid === umpireForceTemplate.uniqid}
          templates={state.channels[channelId].templates || []}
        />
      }
    </div>
  )
}

export default ChatChannel
