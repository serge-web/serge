import React, { useState, createRef, useEffect } from 'react'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { ChannelCollab, ChannelUI, Editor, MessageDetails } from '@serge/custom-types'
import { SpecialChannelTypes, CollaborativeMessageStates, CHANNEL_COLLAB, InitialStates, CollaborativeMessageStates2 } from "@serge/config";
import { Confirm } from '@serge/components'
import Props from './types'

// @ts-ignore
import JSONEditor from '@json-editor/json-editor'
import { configDateTimeLocal } from '@serge/helpers'
import '@serge/themes/App.scss'
import moment from 'moment'
import flatpickr from 'flatpickr'
import _ from 'lodash'
flatpickr(".calendar")

const MessageCreator: React.FC<Props> = ({ schema, curChannel, privateMessage, onMessageSend, onCancel, confirmCancel }) => {

  const [editor, setEditor] = useState<Editor | null>(null)
  const editorPreviewRef = createRef<HTMLDivElement>()
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [selectedSchema, setSelectedSchema] = useState<any>(schema)
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  const state = usePlayerUiState()
  const { selectedForce, gameDate } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')

  const sendMessage = (e: any): void => {
    const details: MessageDetails = {
      channel: curChannel,
      from: {
        force: selectedForce.name,
        forceColor: selectedForce.color,
        roleName: state.selectedRoleName,
        roleId: state.selectedRole,
        iconURL: selectedForce.iconURL || (selectedForce.icon || ''),
      },
      messageType: selectedSchema.title,
      timestamp: new Date().toISOString(),
      turnNumber: state.currentTurn
    }
    const currentChannelFormat = state.channels[curChannel].format || null

    if (currentChannelFormat === SpecialChannelTypes.CHANNEL_COLLAB_EDIT) {
      details.collaboration = {
        status: CollaborativeMessageStates.PendingReview,
        lastUpdated: moment(new Date(), moment.ISO_8601).format()
      }
    } else if (currentChannelFormat === SpecialChannelTypes.CHANNEL_COLLAB_RESPONSE) {
      details.collaboration = {
        status: CollaborativeMessageStates.Pending,
        lastUpdated: moment(new Date(), moment.ISO_8601).format()
      }
    }

    // see if it's v3 collab
    const channelUI = state.channels[curChannel] as ChannelUI
    if(channelUI.v3Channel) {
      const channelTypes = channelUI.v3Channel
      if(channelTypes.channelType === CHANNEL_COLLAB) {
        // populate the metadata
        const channelCollab = channelTypes as ChannelCollab
        
        // ok, brand new message
        const initial = channelCollab.initialState === InitialStates.PENDING_REVIEW ? CollaborativeMessageStates.PendingReview : CollaborativeMessageStates.Unallocated
        const initial2 = channelCollab.initialState === InitialStates.PENDING_REVIEW ? CollaborativeMessageStates2.PendingReview : CollaborativeMessageStates2.Unallocated
        details.collaboration = {
          status: initial,
          status2: initial2,
          lastUpdated: details.timestamp
        }
      }
    }


    if (privateMessage && privateMessageRef.current) {
      details.privateMessage = privateMessageRef.current.value
      privateMessageRef.current.value = ''
    }

    if (!editor || editor.getValue().content === '') return

    // retrieve the formatted message
    const message = editor.getValue()

    saveMessage(state.currentWargame, details, message)()
    editor.destroy()
    createEditor(selectedSchema)
    onMessageSend && onMessageSend(e)
  }

  const openConfirmPopup = (e: any): void => {
    if(confirmCancel) {
      setConfirmIsOpen(true)
    } else {
      onCancel && onCancel(e)
    }
  }

  const onPopupCancel = (): void => {
    setConfirmIsOpen(false)
  }

  const onPopupConfirm = (e: any): void => {
    setConfirmIsOpen(false)
    onCancel && onCancel(e)
  }

  const destroyEditor = (editorObject: Editor | null): void => {
    if (editorObject && (editorObject.ready || !editorObject.destroyed)) editorObject.destroy()
  }

  useEffect(() => {
    if (!schema) {
      destroyEditor(editor)
    }
    if (schema && (!selectedSchema || selectedSchema.title !== schema.title)) {
      destroyEditor(editor)
      setSelectedSchema(schema)
    }

    if (schema && schema.type) {
      if (editor && (editor.ready || !editor.destroyed)) return
      createEditor(schema)
    }

    return (): void => {
      destroyEditor(editor)
    }
  }, [schema])

  /**
   * helper function to for validation Datetime or Date or Time props of json
   */
  const configCommonValidation = (schema: { format: string }, value: string, path: any) => {
    let format = ''
    let defaultFieldName = ''
    switch (schema.format) {
      case "datetime-local":
        if (value == "" || !/^(\d{2}\D\d{2}\D\d{4} \d{2}:\d{2}(?::\d{2})?)?$/.test(value)) {
          format = "DD/MM/YYYY HH:MM"
          defaultFieldName = "Datetime"
        }
        break
      case "date":
        if (value == "" || !/^(\d{2}\D\d{2}\D\d{4})?$/.test(value)) {
          format = "DD/MM/YYYY"
          defaultFieldName = "Date"
        }
        break
      case "time":
        if (value == "" || !/^(\d{2}:\d{2})?$/.test(value)) {
          format = "HH:MM"
          defaultFieldName = "Time"
        }
        break
      default:
        return {}
    }

    if (format !== "") {
      let listFieldName = path.split('.')
      let fieldName = listFieldName.length > 0 ? listFieldName[listFieldName.length - 1] : defaultFieldName
      // Errors must be an object with `path`, `property`, and `message`
      let message = `${fieldName} must be in the format "${format}"`
      return {
        path: path,
        property: 'format',
        message: message
      }
    }
    return {}
  }

  /**
   * custom validation set for type datetime-local, date, time
   */
  const configDateTimeCustomValidation = () => {
    // multiple message type will repeat custom validators, reinitialize it for every instance
    JSONEditor.defaults.custom_validators = []
    JSONEditor.defaults.custom_validators.push(function (schema: { format: string }, value: string, path: any) {
      let errors = []
      let customValidationErrors = configCommonValidation(schema, value, path)
      if (!_.isEmpty(customValidationErrors)) {
        errors.push(customValidationErrors)
      }
      return errors
    })
  }

  const createEditor = (schema: any) => {
    configDateTimeCustomValidation()
    schema = configDateTimeLocal(schema, gameDate)

    setEditor(new JSONEditor(editorPreviewRef.current, {
      schema,
      theme: 'bootstrap4',
      disable_collapse: true,
      disable_edit_json: true,
      disable_properties: true,
      prompt_before_delete: false
    }))
  }

  return (
    <>
      <Confirm
        isOpen={confirmIsOpen}
        message="Are you sure you wish to cancel this message?"
        onCancel={onPopupCancel}
        onConfirm={onPopupConfirm}
      />
      <div className='form-group message-creator' ref={editorPreviewRef} />
      {privateMessage && <div className='flex-content form-group'>
        <label htmlFor='' className='material-label' id='private-message-input-label'>
          <FontAwesomeIcon size='2x' icon={faUserSecret} />Private message
        </label>
        <textarea id='private-message-input' className='form-control' ref={privateMessageRef} />
      </div>}
      <div className='form-group'>
        <button name='cancel' className='btn btn-action btn-action--form btn-action--cancel' onClick={openConfirmPopup}>
          <span>Cancel</span>
        </button>
        <button name='send' className='btn btn-action btn-action--form btn-action--send-message' onClick={sendMessage}>
          <span>Send Message</span>
        </button>
      </div>

    </>
  )
}

export default MessageCreator
