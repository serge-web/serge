import React, { useState } from 'react'
import { LOCAL_STORAGE_TIMEOUT, expiredStorage } from '../consts'
import { usePlayerUiState } from '../Store/PlayerUi'
import MessagesListInsightsChannel from './MessagesListInsightsChannel'
import MessagesListRenderProp from './MessagesListRenderProp'
import { MessageFeedback } from '@serge/custom-types'

const InsightsChannel = (): React.ReactElement => {
  const [allMarkedRead, setAllMarkedRead] = useState(false)
  const state = usePlayerUiState()

  const markAllAsRead = (): void => {
    state.feedbackMessages.forEach((message) => {
      expiredStorage.setItem(state.currentWargame + message._id, 'read', LOCAL_STORAGE_TIMEOUT)
    })
    setAllMarkedRead(true)
  }

  // TODO: maybe some other check here bcos it's already defined as false
  // componentDidMount() {
  //   const [ state ] = this.context;
  //   let channelLength = Object.keys(state.feedbackMessages).length;
  //
  //   if (channelLength) {
  //     this.setState({allMarkedRead: false});
  //   }
  // }

  return (
    <div className='contain-game-insights'>
      <MessagesListRenderProp
        curChannel={'feedback_messages'}
        messages={state.feedbackMessages}
        userId={`${state.wargameTitle}-${state.selectedForce}-${state.selectedRole}`}
        allMarkedRead={allMarkedRead}
        render={(messages: MessageFeedback[]) => (
          <MessagesListInsightsChannel
            messages={messages}
            markAllAsRead={markAllAsRead}
          />
        )}
      />
    </div>
  )
}

export default InsightsChannel
