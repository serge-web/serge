import { MessageDetails } from 'src/custom-types'
import { CUSTOM_MESSAGE } from 'src/config'
import React, { ChangeEvent, CSSProperties, useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveNewActivityTimeMessage } from '../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import Props from './types'

// eslint-disable-next-line @typescript-eslint/ban-types
const styles: { [x: string]: CSSProperties | {} } = {
  messageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  messageBox: {
    marginRight: '2px',
    padding: '5px'
  }
}

const MessageCreatorChatChannel = React.memo(({ schema }: Props): React.ReactElement => {
  const [message, setMessage] = useState<{ content: string }>({ content: '' })
  const state = usePlayerUiState()
  const dispatch = useDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const sendMessage = (): void => {
    if (!message.content) {
      return
    }
    const messageDetails: MessageDetails = {
      channel: state.chatChannel.name,
      from: {
        force: selectedForce.name,
        forceColor: selectedForce.color,
        forceId: selectedForce.uniqid,
        roleId: state.selectedRole,
        roleName: state.selectedRoleName,
        iconURL: selectedForce.iconURL 
      },
      timestamp: new Date().toISOString(),
      turnNumber: state.currentTurn
    }
    saveMessage(state.currentWargame, messageDetails, message, schema.title, CUSTOM_MESSAGE)()
    saveNewActivityTimeMessage(state.selectedRole, { aType: 'send message' }, state.currentWargame)(dispatch)
    setMessage({
      content: ''
    })
  }

  const getMessageValue = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setMessage({
      content: e.target.value
    })
  }

  return <div style={styles.messageContainer}>
    <textarea style={styles.messageBox} onChange={getMessageValue} value={message.content} />
    <button className='btn btn-action btn-action--complimentary' onClick={sendMessage} />
  </div>
})

export default MessageCreatorChatChannel
