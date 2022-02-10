import React, { createRef, useEffect, useState } from 'react'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { Editor, MessageDetails } from '@serge/custom-types'
import setupEditor from './helpers/setupEditor'
import Props from './types'
import { expiredStorage } from '@serge/config'

const MessageCreatorChatChannel = ({ schema }: Props): React.ReactElement => {
  const editorPreviewRef = createRef<HTMLDivElement>()
  const [editor, setEditor] = useState<Editor | null>(null)
  const state = usePlayerUiState()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  useEffect(() => {
    setEditor(setupEditor(editor, schema, editorPreviewRef))
  }, [])

  const sendMessage = (): void => {

    expiredStorage.setItem('activityTime', `${new Date().getTime()}`)

    if (editor !== null) {
      let messageDetails: MessageDetails = {
        channel: state.chatChannel.name,
        from: {
          force: selectedForce.name,
          forceColor: selectedForce.color,
          roleId: state.selectedRole,
          roleName: state.selectedRoleName,
          iconURL: selectedForce.iconURL || (selectedForce.icon || ''),
        },
        messageType: schema.title,
        timestamp: new Date().toISOString(),
        turnNumber: state.currentTurn
      }

      if (editor.getValue().content === '') return

      saveMessage(state.currentWargame, messageDetails, editor.getValue())()
      setEditor(setupEditor(editor, schema, editorPreviewRef))
    }
  }

  return <div className='media'>
    <div className='media-body message-creator' ref={editorPreviewRef}/>
    <div className='align-self-center'>
      <button name='send' className='btn btn-action btn-action--complimentary' onClick={sendMessage}>
        <span className='sr-only'>Send test</span>
      </button>
    </div>
  </div>
}

export default MessageCreatorChatChannel
