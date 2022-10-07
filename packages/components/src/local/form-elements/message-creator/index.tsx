import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Confirm } from '@serge/components'
import {
  CHANNEL_COLLAB,
  CollaborativeMessageStates,
  InitialStates,
  UNSENT_PRIVATE_MESSAGE_TYPE,
  UNSENT_SELECT_BY_DEFAULT_VALUE
} from '@serge/config'
import {
  ChannelCollab,
  Editor,
  MessageDetails
} from '@serge/custom-types'
import React, { createRef, MouseEvent, useEffect, useState } from 'react'

// @ts-ignore
import JSONEditor from '@json-editor/json-editor'
import { configDateTimeLocal } from '@serge/helpers'
import flatpickr from 'flatpickr'
import _ from 'lodash'
import PropTypes from './types/props'
flatpickr('.calendar')

const MessageCreator: React.FC<PropTypes> = ({
  schema,
  privateMessage,
  onMessageSend,
  onCancel,
  confirmCancel,
  selectedForce,
  selectedRole,
  selectedRoleName,
  currentTurn,
  channel,
  gameDate,
  postBack,
  messageOption,
  createCachedCreatorMessage,
  getcachedCreatorMessageValue,
  clearCachedCreatorMessage
}) => {
  const [editor, setEditor] = useState<Editor | null>(null)
  const editorPreviewRef = createRef<HTMLDivElement>()
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [selectedSchema, setSelectedSchema] = useState<any>(schema)
  const [privateValue, setPrivateValue] = useState<string | undefined>('')
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  if (selectedForce === undefined) { throw new Error('selectedForce is undefined') }
  const privatMessageOption = `${messageOption}-${UNSENT_PRIVATE_MESSAGE_TYPE}`
  const sendMessage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.persist()
    const details: MessageDetails = {
      channel: channel.uniqid,
      from: {
        force: selectedForce.name,
        forceColor: selectedForce.color,
        roleName: selectedRoleName,
        roleId: selectedRole,
        iconURL: selectedForce.iconURL || selectedForce.icon || ''
      },
      messageType: selectedSchema.title,
      timestamp: new Date().toISOString(),
      turnNumber: currentTurn
    }

    // special handling if this is a collab-channel
    if (channel.channelType === CHANNEL_COLLAB) {
      // populate the metadata
      const channelCollab = channel as ChannelCollab

      // ok, brand new message
      const initial =
        channelCollab.initialState === InitialStates.PENDING_REVIEW
          ? CollaborativeMessageStates.PendingReview
          : CollaborativeMessageStates.Unallocated
      details.collaboration = {
        status: initial,
        lastUpdated: details.timestamp
      }
    }

    if (privateMessage && privateMessageRef.current) {
      details.privateMessage = privateMessageRef.current.value
      privateMessageRef.current.value = ''
    }

    if (!editor || editor.getValue().content === '') return

    // retrieve the formatted message
    const message = editor.getValue()

    // send the data
    postBack && postBack(details, message)

    editor.destroy()
    createEditor(selectedSchema)
    clearCachedCreatorMessage && clearCachedCreatorMessage([privatMessageOption, messageOption])
    onMessageSend && onMessageSend(e)
  }

  const openConfirmPopup = (event: MouseEvent<HTMLButtonElement>): void => {
    if (confirmCancel) {
      setConfirmIsOpen(true)
    } else {
      onCancel && onCancel(event)
    }
  }

  const onPopupCancel = (): void => {
    setConfirmIsOpen(false)
  }

  const onPopupConfirm = (event: MouseEvent<HTMLButtonElement>): void => {
    setConfirmIsOpen(false)
    clearCachedCreatorMessage && clearCachedCreatorMessage([privatMessageOption, messageOption, UNSENT_SELECT_BY_DEFAULT_VALUE])
    editor && editor.destroy()
    onCancel && onCancel(event)
  }

  const destroyEditor = (editorObject: Editor | null): void => {
    if (editorObject && (editorObject.ready || !editorObject.destroyed)) { editorObject.destroy() }
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
  }, [schema, messageOption, confirmIsOpen])

  useEffect(() => {
    const formValue = getcachedCreatorMessageValue && getcachedCreatorMessageValue(messageOption)
    const privateValue = getcachedCreatorMessageValue && getcachedCreatorMessageValue(privatMessageOption)
    setPrivateValue(privateValue)

    const valueTimer = setTimeout(() => {
      if (formValue) return editor && editor.setValue(formValue)
    }, 10)

    return (): void => clearTimeout(valueTimer)
  }, [editor])

  /**
   * helper function to for validation Datetime or Date or Time props of json
   */
  const configCommonValidation = (
    schema: { format: string },
    value: string,
    path: any
  ): any => {
    let format = ''
    let defaultFieldName = ''
    switch (schema.format) {
      case 'datetime-local':
        if (
          value === '' ||
          !/^(\d{2}\D\d{2}\D\d{4} \d{2}:\d{2}(?::\d{2})?)?$/.test(value)
        ) {
          format = 'DD/MM/YYYY HH:MM'
          defaultFieldName = 'Datetime'
        }
        break
      case 'date':
        if (value === '' || !/^(\d{2}\D\d{2}\D\d{4})?$/.test(value)) {
          format = 'DD/MM/YYYY'
          defaultFieldName = 'Date'
        }
        break
      case 'time':
        if (value === '' || !/^(\d{2}:\d{2})?$/.test(value)) {
          format = 'HH:MM'
          defaultFieldName = 'Time'
        }
        break
      default:
        return {}
    }

    if (format !== '') {
      const listFieldName = path.split('.')
      const fieldName =
        listFieldName.length > 0
          ? listFieldName[listFieldName.length - 1]
          : defaultFieldName
      // Errors must be an object with `path`, `property`, and `message`
      const message = `${fieldName} must be in the format '${format}'`
      return {
        path: path,
        property: 'format',
        message: message
      }
    }
    return {}
  }

  /**
   * custom validation set foWr type datetime-local, date, time
   */
  const configDateTimeCustomValidation = (): any => {
    // multiple message type will repeat custom validators, reinitialize it for every instance

    JSONEditor.defaults.custom_validators = [] // eslint-disable-line @typescript-eslint/camelcase
    JSONEditor.defaults.custom_validators.push(function (
      schema: { format: string },
      value: string,
      path: any
    ) {
      const errors = []
      const customValidationErrors = configCommonValidation(
        schema,
        value,
        path
      )
      if (!_.isEmpty(customValidationErrors)) {
        errors.push(customValidationErrors)
      }
      return errors
    })
  }

  const createEditor = (schema: any): void => {
    configDateTimeCustomValidation()
    schema = configDateTimeLocal(schema, gameDate)

    setEditor(
      new JSONEditor(editorPreviewRef.current, {
        schema,
        theme: 'bootstrap4',
        disable_collapse: true, // eslint-disable-line @typescript-eslint/camelcase
        disable_edit_json: true, // eslint-disable-line @typescript-eslint/camelcase
        disable_array_reorder: true, // eslint-disable-line @typescript-eslint/camelcase
        disable_array_delete_last_row: true, // eslint-disable-line @typescript-eslint/camelcase
        disable_properties: true, // eslint-disable-line @typescript-eslint/camelcase
        prompt_before_delete: false, // eslint-disable-line @typescript-eslint/camelcase
        array_controls_top: false // eslint-disable-line @typescript-eslint/camelcase
      })
    )
  }

  const transferChangeValue = (): void => {
    const message = editor?.getValue()
    createCachedCreatorMessage && createCachedCreatorMessage(message, messageOption)
  }

  const onChangePrivate = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPrivateValue(e.target.value)
    createCachedCreatorMessage && createCachedCreatorMessage(e.target.value, privatMessageOption)
  }

  return (
    <>
      <Confirm
        isOpen={confirmIsOpen}
        message="Are you sure you wish to cancel this message?"
        onCancel={onPopupCancel}
        onConfirm={onPopupConfirm}
      />
      <div className="form-group message-creator" ref={editorPreviewRef} onBlur={transferChangeValue} />
      {privateMessage && (
        <div className="flex-content form-group">
          <label
            htmlFor=""
            className="material-label"
            id="private-message-input-label"
          >
            <FontAwesomeIcon size="2x" icon={faUserSecret} />
            Private message
          </label>
          <textarea
            onChange={onChangePrivate}
            id="private-message-input"
            className="form-control"
            ref={privateMessageRef}
            value={privateValue}
          />
        </div>
      )}
      <div className="form-group">
        <button
          name="cancel"
          className="btn btn-action btn-action--form btn-action--cancel"
          onClick={openConfirmPopup}
        >
          <span>Cancel</span>
        </button>
        <button
          name="send"
          className="btn btn-action btn-action--form btn-action--send-message"
          onClick={sendMessage}
        >
          <span>Send Message</span>
        </button>
      </div>
    </>
  )
}

export default MessageCreator
