import React, { useState, createRef, useEffect } from 'react'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { Editor, MessageDetails } from '@serge/custom-types'
import Props from './types'

// @ts-ignore
import JSONEditor from '@json-editor/json-editor'

import '@serge/themes/App.scss'

const MessageCreator: React.FC<Props> = (props) => {

  const [editor, setEditor] = useState<Editor | null>(null)
  const editorPreviewRef = createRef<HTMLDivElement>()
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [selectedSchema, setSelectedSchema] = useState<any>(props.schema)
  const state = usePlayerUiState()

  const sendMessage = (): void => {
    const curForce = state.allForces.find((force) => force.uniqid === state.selectedForce)
    if (!curForce) return

    const details: MessageDetails = {
      channel: props.curChannel,
      from: {
        force: curForce.name,
        forceColor: state.forceColor,
        role: state.selectedRole,
        icon: curForce.icon,
      },
      messageType: selectedSchema.title,
      timestamp: new Date().toISOString(),
    }

    if (props.privateMessage && privateMessageRef.current) {
      details.privateMessage = privateMessageRef.current.value
      privateMessageRef.current.value = ''
    }

    if (!editor || editor.getValue().content === '') return

    saveMessage(state.currentWargame, details, editor.getValue())()
    editor.destroy()
    setEditor(null)
    createEditor(selectedSchema)
  }

  useEffect(() => {
    if (props.schema && (!selectedSchema || selectedSchema.title !== props.schema.title)) {
      if(editor) editor.destroy()
      setEditor(null)
      console.log(props.schema, 'props.schema');
      setSelectedSchema(props.schema)
    }

    if (props.schema && props.schema.type) {
      if (editor) return
      createEditor(props.schema)
    }
  }, [props])

  const createEditor = (schema: any) => {
    setEditor(new JSONEditor(editorPreviewRef.current, {
      schema,
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
    }))
  }

  return (
    <>
      <div className='form-group message-creator' ref={editorPreviewRef}/>
      {props.privateMessage && <div className='flex-content form-group'>
        <label htmlFor='' className='material-label' id='private-message-input-label'>
          <FontAwesomeIcon size='2x' icon={faUserSecret}/>Private message
        </label>
        <textarea id='private-message-input' className='form-control' ref={privateMessageRef} />
      </div>}
      <div className='form-group'>
        <button name='send' className='btn btn-action btn-action--form' onClick={sendMessage}>
          <span>Send Message</span>
        </button>
      </div>
    </>
  )
}

export default MessageCreator
