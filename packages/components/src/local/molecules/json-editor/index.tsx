import React, { useState, useRef, useEffect, memo } from 'react'

/* Import Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Import Types */
import Props from './types/props'
import { Editor, TemplateBody } from '@serge/custom-types'

import setupEditor from './helpers/setupEditor'
import { expiredStorage } from '@serge/config'
import { configDateTimeLocal } from '@serge/helpers'

// keydown listener should works only for defined tags
const keydowListenFor: string[] = ['TEXTAREA', 'INPUT']

/* Render component */
export const JsonEditor: React.FC<Props> = ({ message, messageTemplates, getJsonEditorValue, disabled = false, saveEditedMessage = false, expandHeight = true, gameDate }) => {
  const jsonEditorRef = useRef<HTMLDivElement>(null)
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

  const handleChange = (value: { [property: string]: any }): void => {
    getJsonEditorValue && getJsonEditorValue(value)
  }

  const genLocalStorageId = (): string => {
    return `${message._id}_${message.message.Reference}`
  }

  useEffect(() => {
    const jsonEditorConfig = disabled ? { disableArrayReOrder: true, disableArrayAdd: true, disableArrayDelete: true } : { disableArrayReOrder: false, disableArrayAdd: false, disableArrayDelete: false }
    const modSchema = configDateTimeLocal(schema.details, gameDate)
    const nextEditor = setupEditor(editor, modSchema, jsonEditorRef, jsonEditorConfig)

    const changeListenter = (): void => {
      if (nextEditor) {
        const nexValue = nextEditor.getValue()
        handleChange(nexValue)
        if (saveEditedMessage) expiredStorage.setItem(genLocalStorageId(), JSON.stringify(nexValue))
      }
    }

    // Timer it foo throttle
    let timerId: ReturnType<typeof setTimeout>

    // Keydown litener
    const handleKeyDown = ({ target }: KeyboardEvent): void => {
      // if target not null
      if (target) {
        // convert targetElement to HTMLElement
        const targetElement = target as HTMLElement
        // if target valid input tag
        if (keydowListenFor.includes(targetElement.tagName)) {
          // remove old onChange waiting timers
          if (timerId) clearTimeout(timerId)
          // create new timer
          timerId = setTimeout((): void => {
            // trigger changes listener after 128ms
            targetElement.dispatchEvent(new Event('change'))
          }, 128)
        }
      }
    }

    // add keydown listener to be able to track input changes
    document.addEventListener('keydown', handleKeyDown)

    if (nextEditor) {
      const messageJson = saveEditedMessage ? expiredStorage.getItem(genLocalStorageId()) : null
      nextEditor.setValue(typeof messageJson === 'string' ? JSON.parse(messageJson) : message.message)
      nextEditor.on('change', changeListenter)
    }

    setEditor(nextEditor)

    // handle textarea height to fit its content
    if (expandHeight && jsonEditorRef.current) {
      const textareaElms = jsonEditorRef.current.querySelectorAll<HTMLTextAreaElement>('[data-schemaformat="textarea"]')
      for (const textareaElm of Array.from(textareaElms)) {
        textareaElm.style.height = `${textareaElm.scrollHeight + 5}px`
      }
    }

    return (): void => {
      // remove timer for unmounted component
      if (timerId) clearTimeout(timerId)
      // remove keydown listener for unmounted component
      document.removeEventListener('keydown', handleKeyDown)
      if (nextEditor) {
        // remove change listener for unmounted component
        nextEditor.off('change', changeListenter)
      }
    }
  }, [])

  useEffect(() => {
    if (editor) {
      if (disabled) {
        editor.disable()
      } else {
        editor.enable()
      }
    }
  }, [disabled, editor])

  return (
    <div className={disabled ? 'edt-disable' : 'edt-enable'} ref={jsonEditorRef} />
  )
}

// we don't need to re render it as all logick based on JsonEditor plugin and all changes applaying inside useEffect's
export default memo(JsonEditor, () => {
  return false
})
