import React, { useState, useRef, useEffect } from 'react'

/* Import Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Import Types */
import Props from './types/props'
import { Editor, TemplateBody } from '@serge/custom-types'

import setupEditor from './helpers/setupEditor'

/* Render component */
export const JsonEditor: React.FC<Props> = ({ message, messageTemplates, getJsonEditorValue, disabled }) => {
  const jsonEditorRef = useRef(null)
  const [editor, setEditor] = useState<Editor | null>(null)
  const schema = Object.keys(messageTemplates).map(
    // TODO: Switch this part to use id instead of messageType find, currently we have no messageTypeId inside of message
    (key): TemplateBody => messageTemplates[key]
  ).find(msg => msg.title === message.details.messageType)

  if (!schema) {
    const styles = {
      color: '#f00',
      background: '#ff0',
      padding: '20px',
      fontSize: '16px'
    }
    return <span style={styles} >Schema not found for {message.details.messageType}</span>
  }

  const handleChange = (value: {[property: string]: any}) => {
    getJsonEditorValue && getJsonEditorValue(value)
  }

  useEffect(() => {
    const nextEditor = setupEditor(editor, schema.details, jsonEditorRef, disabled)
    setEditor(nextEditor)

    if (nextEditor) {
      nextEditor.setValue(message.message)
      nextEditor.on('change', () => {
        handleChange(nextEditor.getValue())
      })
    }

    return () => {
      if (nextEditor) {
        nextEditor.off('change', () => {
          handleChange(nextEditor.getValue())
        })
        nextEditor.destroy()
      }
    }
  }, [])

  return (
    <div ref={jsonEditorRef} />
  )
}

export default JsonEditor
