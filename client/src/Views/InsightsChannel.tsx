import { MessageFeedback } from 'src/custom-types'
import { setMessageState } from '@serge/helpers'
import React from 'react'
import { updateMessageState } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiDispatch, usePlayerUiState } from '../Store/PlayerUi'
import MessagesListInsightsChannel from './MessagesListInsightsChannel'
import MessagesListRenderProp from './MessagesListRenderProp'

const InsightsChannel = (): React.ReactElement => {
  const dispatch = usePlayerUiDispatch()
  const { currentWargame, selectedForce, selectedRole, feedbackMessages } = usePlayerUiState()
  const selectedForceId = selectedForce ? selectedForce.uniqid : ''

  const markAllAsRead = (): void => {
    feedbackMessages.forEach((message) => {
      setMessageState(currentWargame, selectedForceId, selectedRole, message._id)
    })
    dispatch(updateMessageState(true))
  }

  return (
    <div className='contain-game-insights'>
      <MessagesListRenderProp
        messages={feedbackMessages}
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
