import React, { useState, createRef, useEffect } from 'react'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { saveMessage } from '../../ActionsAndReducers/playerUi/playerUi_ActionCreators'
import { usePlayerUiState } from '../../Store/PlayerUi'
import { Editor, MessageDetails } from '@serge/custom-types'
import { SpecialChannelTypes, CollaborativeMessageStates } from "@serge/config";
import Props from './types'

// @ts-ignore
import { JSONEditor } from '@json-editor/json-editor'

import '@serge/themes/App.scss'
import moment from 'moment'
import flatpickr from 'flatpickr'
import _ from 'lodash'
flatpickr(".calendar")

const MessageCreator: React.FC<Props> = (props) => {

  const [editor, setEditor] = useState<Editor | null>(null)
  const editorPreviewRef = createRef<HTMLDivElement>()
  const privateMessageRef = createRef<HTMLTextAreaElement>()
  const [selectedSchema, setSelectedSchema] = useState<any>(props.schema)
  const state = usePlayerUiState()
  const { selectedForce, gameDate } = state
  if (selectedForce === undefined) throw new Error('selectedForce is undefined')
  
  const sendMessage = (e: any): void => {
    const details: MessageDetails = {
      channel: props.curChannel,
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
    const currentChannelFormat = state.channels[props.curChannel].format || null

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
    createEditor(selectedSchema)
    props.onMessageSend && props.onMessageSend(e)
  }

  const destroyEditor = (editorObject: Editor | null): void => {
    if (editorObject && (editorObject.ready || !editorObject.destroyed)) editorObject.destroy()
  }

  useEffect(() => {
    if (!props.schema) {
      destroyEditor(editor)
    }
    if (props.schema && (!selectedSchema || selectedSchema.title !== props.schema.title)) {
      destroyEditor(editor)
      setSelectedSchema(props.schema)
    }

    if (props.schema && props.schema.type) {
      if (editor && (editor.ready || !editor.destroyed)) return
      createEditor(props.schema)
    }

    return (): void => {
      destroyEditor(editor)
    }
  }, [props])

  /**
   * helper function to render default Datetime or Date or Time props of json
   */
  const configCommonProps = (prop: any) => {
    switch (prop.format) {
      case "datetime-local":
        prop.default = moment(gameDate).format("DD/MM/YYYY HH:mm")
        prop.options = {"flatpickr": {
          "wrap":false,
          "time_24hr": true,
          "dateFormat":"d/m/Y H:i",
        }}
        return prop
      case "date":
        prop.default = moment(gameDate).format("DD/MM/YYYY")
        prop.options = {"flatpickr": {
          "wrap":false,
          "dateFormat":"d/m/Y",
        }}
        return prop
      case "time":
        prop.default = moment(gameDate).format("HH:mm")
        prop.options = {"flatpickr": {
          "wrap":false,
          "time_24hr": true,
          "dateFormat":"H:i",
        }}
        return prop
      default:
        return prop
    }
  }

  /**
   * Render Default datetime entries in template of json for type datetime-local
   */
  const configDateTimeLocal = (schema: any) => {
    if(!schema || !schema.properties){
      return
    }
    Object.keys(schema.properties).forEach(key => {
      let prop = schema.properties[key]
      prop = configCommonProps(prop)
      configDateTimeLocal(prop.items || prop)
    });
  }

  /**
   * helper function to for validation Datetime or Date or Time props of json
   */
  const configCommonValidation = (schema: { format: string }, value: string, path: any) => {
    let format = ''
    let defaultFieldName = ''
    switch (schema.format) {
      case "datetime-local":
        if(value == "" || !/^(\d{2}\D\d{2}\D\d{4} \d{2}:\d{2}(?::\d{2})?)?$/.test(value)) {
          format = "DD/MM/YYYY HH:MM"
          defaultFieldName = "Datetime"
        }
        break
      case "date":
        if(value == "" || !/^(\d{2}\D\d{2}\D\d{4})?$/.test(value)) {
          format = "DD/MM/YYYY"
          defaultFieldName = "Date"
        }
        break
      case "time":
        if(value == "" || !/^(\d{2}:\d{2})?$/.test(value)) {
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
    JSONEditor.defaults.custom_validators.push(function(schema: { format: string }, value: string, path: any) {
      let errors = []
      let customValidationErrors = configCommonValidation(schema, value, path)
      if(!_.isEmpty(customValidationErrors)) {
        errors.push(customValidationErrors)
      }
      return errors
    })
  }


  const createEditor = (schema: any) => {
    configDateTimeLocal(schema)
    configDateTimeCustomValidation()
    
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
        <button name='cancel' className='btn btn-action btn-action--form btn-action--cancel' onClick={props.onCancel}>
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
