import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { umpireForceTemplate } from '../consts'
import NewMessage from './NewMessage'
import {ChannelMessagesList} from '@serge/components'
import {
  getAllWargameMessages,
  openMessage,
  markAllAsRead,
} from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState, usePlayerUiDispatch } from '../Store/PlayerUi'
import { MessageChannel } from '@serge/custom-types'
import '@serge/themes/App.scss'

const Channel: React.FC<{ channelId: string }> = ({ channelId }) => {
  const state = usePlayerUiState()
  const dispatch = usePlayerUiDispatch()
  const [channelTabClass, setChannelTabClass] = useState<string>('')
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
    const {
      details,
      // @ts-ignore
      message,
      isOpen,
      hasBeenRead,
      infoType,
      gameTurn
    } = item
    // @ts-ignore
    const { role, forceColor } = details.from || {}
    // @ts-ignore
    const { messageType, privateMessage } = details
    const dynamicBorderColor = `${forceColor}${hasBeenRead ? 'B3':''}`
    // @ts-ignore
    const timestamp = moment(details.timestamp)
    const isUmpire = state.selectedForce === umpireForceTemplate.uniqid
    const detail = message || {}
    const onRead = handleOpenMessage
    let title
    if (detail.title) {
      title = detail.title
    } else if(detail.content) {
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
  })
  const icons = state.channels[channelId].forceIcons
  const colors = state.channels[channelId].forceColors

  return (
    <div className={channelTabClass} data-channel-id={channelId}>
      <ChannelMessagesList
        messages={messages}
        icons={icons}
        colors={colors}
        onMarkAllAsRead={(): void => dispatch(markAllAsRead(channelId))}
      />
      {
        state.channels[channelId].observing === false &&
        <NewMessage
          orderableChannel={true}
          curChannel={channelId}
          privateMessage={state.selectedForce === umpireForceTemplate.uniqid}
          templates={state.channels[channelId].templates || []}
        />
      }
    </div>
  )
}

export default Channel
