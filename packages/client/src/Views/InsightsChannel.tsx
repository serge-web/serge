import { MessageFeedback } from '@serge/custom-types'
import React from 'react'
import { useDispatch } from 'react-redux'
import { updateFeedbackMessages } from '../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../Store/PlayerUi'
import MessagesListInsightsChannel from './MessagesListInsightsChannel'
import MessagesListRenderProp from './MessagesListRenderProp'

const InsightsChannel = (): React.ReactElement => {
  const dispatch = useDispatch()
  const {currentWargame, feedbackMessages, wargameTitle, selectedForce, selectedRole} = usePlayerUiState()

  const markAllAsRead = (): void => {
    const unreadMessageList: MessageFeedback[] = []
    feedbackMessages.forEach((message) => {
      if (!Array.isArray(message.hasBeenRead)) {
        message.hasBeenRead = []
      }
      if (!message.hasBeenRead.includes(selectedRole)) {
        message.hasBeenRead = [...message.hasBeenRead, selectedRole]
        unreadMessageList.push(message)
      }
    })
    // update feedback message read status
    if (unreadMessageList.length) {
      dispatch(updateFeedbackMessages(currentWargame, unreadMessageList))
    }
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
        messages={feedbackMessages}
        userId={`${wargameTitle}-${selectedForce}-${selectedRole}`}
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
