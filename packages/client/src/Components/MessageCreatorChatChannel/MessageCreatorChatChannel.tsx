import React, { createRef, useEffect, useState } from 'react'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { Editor } from '@serge/custom-types'
import setupEditor from './helpers/setupEditor'
import Props from './types'

const MessageCreatorChatChannel = ({ schema }: Props): React.ReactElement => {
  const editorPreviewRef = createRef<HTMLDivElement>()
  const [editor, setEditor] = useState<Editor | null>(null)
  const state = usePlayerUiState()

  useEffect(() => {
    setEditor(setupEditor(editor, schema, editorPreviewRef))
  }, [])

  const sendMessage = (): void => {
    const curForce = state.allForces.find(({ uniqid }) => uniqid === state.selectedForce)
    if (curForce !== undefined && editor !== null) {
      let messageDetails = {
        channel: state.chatChannel.name,
        from: {
          force: curForce.name,
          forceColor: state.forceColor,
          role: state.selectedRole,
          icon: curForce.icon,
        },
        messageType: schema.title,
        timestamp: new Date().toISOString(),
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
