import { JsonEditor } from '@serge/components'
import { MessageDetails } from '@serge/custom-types'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewActivityTimeMessage } from '../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import Props from './types'

const MessageCreatorChatChannel = React.memo(({ schema }: Props): React.ReactElement => {
  const [message, setMessage] = useState<any>({})
  const state = usePlayerUiState()
  const dispatch = useDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const sendMessage = (): void => {
    if (message) {
      const messageDetails: MessageDetails = {
        channel: state.chatChannel.name,
        from: {
          force: selectedForce.name,
          forceColor: selectedForce.color,
          forceId: selectedForce.uniqid,
          roleId: state.selectedRole,
          roleName: state.selectedRoleName,
          iconURL: selectedForce.iconURL || (selectedForce.icon || '')
        },
        messageType: schema.title,
        timestamp: new Date().toISOString(),
        turnNumber: state.currentTurn
      }

      if (message.content === '') return
      setMessage({})
      saveMessage(state.currentWargame, messageDetails, message)()
      saveNewActivityTimeMessage(state.selectedRole, { aType: 'send message' }, state.currentWargame)(dispatch)
    }
  }
  
  const getMessageValue = (val: { [property: string]: any }): void => {
    setMessage(val)
  }
  
  return <div className='media'>
    <JsonEditor
      template={{
        details: schema,
        _id: state.selectedRole
      }}
      messageId={state.chatChannel.name}
      formClassName={'form-group message-creator'}
      title={'Response'}
      storeNewValue={getMessageValue}
      disabled={false}
      gameDate={state.gameDate}
    />
    <div className='align-self-center'>
      <button name='send' className='btn btn-action btn-action--complimentary' onClick={sendMessage} >
        <span className='sr-only'>Send test</span>
      </button>
    </div>
  </div>
})

export default MessageCreatorChatChannel
