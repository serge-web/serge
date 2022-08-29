import React, { createRef, useEffect, useState } from 'react'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { saveNewActivityTimeMessage } from '../../ActionsAndReducers/PlayerLog/PlayerLog_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { useDispatch } from 'react-redux'
import { Editor, MessageDetails } from '@serge/custom-types'
import setupEditor from './helpers/setupEditor'
import Props from './types'

const MessageCreatorChatChannel = React.memo(({ schema }: Props): React.ReactElement => {
  const editorPreviewRef = createRef<HTMLDivElement>()
  const [editor, setEditor] = useState<Editor | null>(null)
  const state = usePlayerUiState()
  const dispatch = useDispatch()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  useEffect(() => {
    setEditor(setupEditor(editor, schema, editorPreviewRef))
  }, [])

  const sendMessage = (): void => {
    if (editor !== null) {
      const messageDetails: MessageDetails = {
        channel: state.chatChannel.name,
        from: {
          force: selectedForce.name,
          forceColor: selectedForce.color,
          roleId: state.selectedRole,
          roleName: state.selectedRoleName,
          iconURL: selectedForce.iconURL || (selectedForce.icon || '')
        },
        messageType: schema.title,
        timestamp: new Date().toISOString(),
        turnNumber: state.currentTurn
      }

      if (editor.getValue().content === '') return

      saveMessage(state.currentWargame, messageDetails, editor.getValue())()
      saveNewActivityTimeMessage(state.selectedRole, 'send message ' + schema.title, state.currentWargame)(dispatch)
      setEditor(setupEditor(editor, schema, editorPreviewRef))
    }
  }

  return <div className='media'>
    <div className='media-body message-creator' ref={editorPreviewRef}/>
    <div className='align-self-center'>
      <button name='send' className='btn btn-action btn-action--complimentary' onClick={sendMessage} >
        <span className='sr-only'>Send test</span>
      </button>
    </div>
  </div>
})

export default MessageCreatorChatChannel
