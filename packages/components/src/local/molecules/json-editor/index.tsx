import React, { useState, useRef, useEffect } from 'react'

/* Import Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css';

/* Import Types */
import Props from './types/props'
import { Editor } from '@serge/custom-types'

import setupEditor from './helpers/setupEditor'

/* Render component */
export const JsonEditor: React.FC<Props> = ({ message, messageTemplates, getJsonEditorValue, disabled }) => {
  const jsonEditorRef = useRef(null)
  const [editor, setEditor] = useState<Editor | null>(null)
  const schema = messageTemplates.find(msg => msg.title === message.details.messageType)
  if (!schema) return <p>Schema not found</p>

  const handleChange = (value: {[property: string]: any} ) => {
    getJsonEditorValue && getJsonEditorValue(value)
  }

  useEffect(() => {
    const nextEditor = setupEditor(editor, schema.details, jsonEditorRef, disabled)
    setEditor(nextEditor)

    if (nextEditor) {
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

  return(
    <div ref={jsonEditorRef} />
  )
}

export default JsonEditor
