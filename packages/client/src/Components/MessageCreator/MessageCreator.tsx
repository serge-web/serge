import React, { useState, createRef, useEffect } from 'react'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { Editor, MessageDetails } from '@serge/custom-types'
import Props from './types'

// @ts-ignore
import { JSONEditor } from '@json-editor/json-editor'

import '@serge/themes/App.scss'

const MessageCreator: React.FC<Props> = (props) => {

  const [editor, setEditor] = useState<Editor | null>(null)
  const editorPreviewRef = createRef<HTMLDivElement>()
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [selectedSchema, setSelectedSchema] = useState<any>(props.schema)
  const state = usePlayerUiState()
  const { selectedForce } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const sendMessage = (): void => {
    const details: MessageDetails = {
      channel: props.curChannel,
      from: {
        force: selectedForce.name,
        forceColor: selectedForce.color,
        role: state.selectedRole,
        icon: selectedForce.icon,
      },
      messageType: selectedSchema.title,
      timestamp: new Date().toISOString(),
    }

    if (props.privateMessage && privateMessageRef.current) {
      details.privateMessage = privateMessageRef.current.value
      privateMessageRef.current.value = ''
    }

    if (!editor || editor.getValue().content === '') return

    // retrieve the formatted message
    const message = editor.getValue()

    // check if we're missing a reference, and we have a reference provider
    if(message && props.generateNextReference && message.Reference !== undefined && message.Reference === '') {
      // need to fill in the reference
      const newRef = props.generateNextReference(selectedForce.name)

      // store the new message reference
      message.Reference = selectedForce.name + '-' + newRef
    }

    saveMessage(state.currentWargame, details, message)()
    editor.destroy()
    setEditor(null)
    createEditor(selectedSchema)
  }

  useEffect(() => {
    if (props.schema && (!selectedSchema || selectedSchema.title !== props.schema.title)) {
      if(editor) editor.destroy()
      setEditor(null)
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
