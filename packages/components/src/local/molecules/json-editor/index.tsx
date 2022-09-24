import React, { useState, useRef, useLayoutEffect } from 'react'

/* Import Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Import Types */
import Props from './types/props'
import { Editor } from '@serge/custom-types'

import setupEditor from './helpers/setupEditor'
import { configDateTimeLocal } from '@serge/helpers'
import { expiredStorage } from '@serge/config'

// keydown listener should works only for defined tags
const keydowListenFor: string[] = ['TEXTAREA', 'INPUT']

/* Render component */
export const JsonEditor: React.FC<Props> = ({
  messageId, messageContent, title, template, storeNewValue,
  customiseTemplate, disabled = false, expandHeight = true, gameDate, disableArrayToolsWithEditor = true
}) => {
  const jsonEditorRef = useRef<HTMLDivElement>(null)
  const [editor, setEditor] = useState<Editor | null>(null)

  if (!template) {
    const styles = {
      color: '#f00',
      background: '#ff0',
      padding: '20px',
      fontSize: '16px'
    }
    return <span style={styles} >Schema not found for {template}</span>
  }

  const handleChange = (value: { [property: string]: any }): void => {
    storeNewValue && storeNewValue(value)
  }

  const genLocalStorageId = (): string => {
    if (!template._id) {
      console.warn('Warning - the unique id for the cached JSON editor relies on having both message and template ids')
    }
    return messageId + template._id
  }

  const initEditor = (): () => void => {
    const jsonEditorConfig = disabled
      ? { disableArrayReOrder: true, disableArrayAdd: true, disableArrayDelete: true }
      : { disableArrayReOrder: false, disableArrayAdd: false, disableArrayDelete: false }

    // initialise date editors
    const modSchema = configDateTimeLocal(template.details, gameDate)

    // apply any other template modifications
    const customizedSchema = customiseTemplate ? customiseTemplate(modSchema) : modSchema

    // if a title was supplied, replace the title in the schema
    const schemaWithTitle = title ? { ...customizedSchema, title: title } : customizedSchema
    const nextEditor = setupEditor(editor, schemaWithTitle, jsonEditorRef, jsonEditorConfig)

    const changeListenter = (): void => {
      if (nextEditor) {
        const nexValue = nextEditor.getValue()
        handleChange(nexValue)
        expiredStorage.setItem(genLocalStorageId(), JSON.stringify(nexValue))
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

    const handleClick = ({ target }: any): void => {
      // @ts-ignore
      const storageData = expiredStorage.getItem(genLocalStorageId()) ? JSON.parse(expiredStorage.getItem(genLocalStorageId())) : null
      const targetId = target.getAttribute('id')
      if (target.attributes['data-tag'] && storageData !== null && targetId !== null) {
        if (messageId.indexOf(storageData.Reference) && targetId.indexOf(storageData.Reference)) {
          expiredStorage.removeItem(genLocalStorageId())
          // remove click listener for unmounted component
          document.removeEventListener('click', handleClick)
        }
      }
    }

    // add click listener for remove item in local storage
    document.addEventListener('click', handleClick)

    // add keydown listener to be able to track input changes
    document.addEventListener('keydown', handleKeyDown)

    if (nextEditor) {
      const messageJson = expiredStorage.getItem(genLocalStorageId())
      nextEditor.setValue(typeof messageJson === 'string' ? JSON.parse(messageJson) : messageContent)
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
  }

  useLayoutEffect(() => {
    if (editor) editor.destroy()
    return initEditor()
  }, [disableArrayToolsWithEditor && disabled])

  useLayoutEffect(() => {
    if (editor) {
      if (disabled) {
        editor.disable()
      } else {
        editor.enable()
      }
    }
  }, [editor])

  return (
    <div className={disabled ? 'edt-disable' : 'edt-enable'} ref={jsonEditorRef} />
  )
}

export default JsonEditor
