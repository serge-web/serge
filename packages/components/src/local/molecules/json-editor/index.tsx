import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

/* Import Stylesheet */
import 'bootstrap/dist/css/bootstrap.min.css'

/* Import Types */
import { Editor, TemplateBody } from '@serge/custom-types'
import { configDateTimeLocal, usePrevious } from '@serge/helpers'
import { Confirm } from '../../atoms/confirm'
import Props from './types/props'

import { expiredStorage } from '@serge/config'
import { Button } from '../../atoms/button'
import setupEditor from './helpers/setupEditor'

// keydown listener should works only for defined tags
const keydowListenFor: string[] = ['TEXTAREA', 'INPUT']
const EDIT_BUTTON = 'edit'
/* Render component */
export const JsonEditor: React.FC<Props> = ({
  messageId,
  messageContent,
  title,
  template,
  storeNewValue,
  formClassName,
  formId,
  customiseTemplate,
  disabled = false,
  expandHeight = true,
  gameDate,
  disableArrayToolsWithEditor = true,
  cachedName,
  clearCachedName,
  saveMessage,
  modifyForEdit,
  modifyForSave,
  confirmCancel = false,
  viewSaveButton = false,
  editCallback
}) => {
  const jsonEditorRef = useRef<HTMLDivElement>(null)
  const [editor, setEditor] = useState<Editor | null>(null)
  const [beingEdited, setBeingEdited] = useState<boolean>(false)
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)

  const prevTemplates: TemplateBody = usePrevious(messageId)
  if (!template) {
    const styles = {
      color: '#f00',
      background: '#ff0',
      padding: '20px',
      fontSize: '16px'
    }
    return <span style={styles} >Schema not found for {template}</span>
  }

  const memoryName = `${messageId}-${template._id}`
  const destroyEditor = (editorObject: Editor | null): void => {
    if (editorObject && (editorObject.ready || !editorObject.destroyed)) { editorObject.destroy() }
  }

  const handleChange = (value: { [property: string]: any }): void => {
    const newDoc = modifyForSave ? modifyForSave(value) : value
    storeNewValue && storeNewValue(newDoc)
  }

  const genLocalStorageId = (edit?: string): string => {
    if (!template._id) {
      console.warn('Warning - the unique id for the cached JSON editor relies on having both message and template ids')
    }

    if (edit) {
      // get the key
      // get more information about the status of an edited but unsent message
      return `${edit}-${genLocalStorageId()}`
    } else {
      return memoryName
    }
  }

  const OnSave = () => {
    saveMessage && saveMessage()
    setBeingEdited(false)
    const data: string[] = [genLocalStorageId(), genLocalStorageId(EDIT_BUTTON)]
    data.forEach((removeType) => {
      return expiredStorage.removeItem(removeType)
    })
  }

  const onPopupCancel = (): void => {
    // removePlanning
    setConfirmIsOpen(false)
  }

  const onPopupConfirm = (): void => {
    if (!viewSaveButton) {
      expiredStorage.removeItem(genLocalStorageId())
      initEditor()
    }
    expiredStorage.removeItem(genLocalStorageId(EDIT_BUTTON))
    setConfirmIsOpen(false)
    setBeingEdited(false)
  }

  const openConfirmPopup = (): void => {
    if (confirmCancel) {
      setConfirmIsOpen(true)
    }
  }

  const localEditCallback = (): void => {
    // TODO: we should only call the `editCallback` if this document
    // is being edited.  The `beingEdited` flag should specify this,
    // but it is always false
    editCallback && editCallback()
  }

  const initEditor = (): () => void => {
    const hideArrayButtons = disabled
    const jsonEditorConfig = hideArrayButtons
      ? { disableArrayReOrder: true, disableArrayAdd: true, disableArrayDelete: true }
      : { disableArrayReOrder: false, disableArrayAdd: false, disableArrayDelete: false }

    // initialise date editors
    const modSchema = configDateTimeLocal(template.details, gameDate)

    // apply any other template modifications
    const customizedSchema = customiseTemplate ? customiseTemplate(messageContent, modSchema) : modSchema

    // if a title was supplied, replace the title in the schema
    const schemaWithTitle = title ? { ...customizedSchema, title: title } : customizedSchema
    const nextEditor = setupEditor(editor, schemaWithTitle, jsonEditorRef, jsonEditorConfig, localEditCallback)

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
      const storageData = expiredStorage.getItem(genLocalStorageId()) ? JSON.parse(expiredStorage.getItem(genLocalStorageId()) || '{}') : null
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
      // only retrieve from expired content if we haven't been provided with message content
      const messageJson = messageContent ? undefined : expiredStorage.getItem(genLocalStorageId())
      if (messageJson && !messageContent) {
        nextEditor.setValue(JSON.parse(messageJson))
        nextEditor.on('change', changeListenter)
      } else if (messageContent) {
        const contentAsJSON = typeof messageJson === 'string' ? JSON.parse(messageJson) : messageContent
        const modified = modifyForEdit ? modifyForEdit(contentAsJSON) : contentAsJSON
        nextEditor.setValue(modified)
        nextEditor.on('change', changeListenter)
      } else {
        nextEditor.on('change', changeListenter)
      }
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

  useEffect(() => {
    //    if (!messageContent && template.details && template.details.type) {
    if (template.details && template.details.type) {
      if (cachedName === messageId) {
        expiredStorage.removeItem(genLocalStorageId())
        clearCachedName('')
        initEditor()
        setBeingEdited(false)
      } else {
        setBeingEdited(false)
        initEditor()
      }
    }

    return (): void => destroyEditor(editor)
  }, [template.details, messageId, cachedName, messageContent, prevTemplates])

  useLayoutEffect(() => {
    if (editor) editor.destroy()
    // NOTE: commented out next line, since we were getting two editor instances
    //    return initEditor()
  }, [disableArrayToolsWithEditor && disabled])

  useLayoutEffect(() => {
    if (editor) {
      if (viewSaveButton && !beingEdited) {
        editor.disable()
      } else if (disabled && !viewSaveButton) {
        editor.disable()
      } else {
        editor.enable()
      }
      setTimeout(() => {
        const editInLocationBtns = document.querySelectorAll('button[name="editInLocation"]')
        Array.from(editInLocationBtns).forEach(btn => {
          // if (beingEdited) {
          btn.classList.remove('btn-hide')
          // } else {
          //   btn.classList.add('btn-hide')
          // }
        })
      }, 10)
    }
  }, [editor, beingEdited])

  const SaveMessageButton = () => (
    editor && viewSaveButton ? (
      <div className='button-wrap' >
        {!disabled && beingEdited
          ? <>
            <Button color='secondary' onClick={OnSave} icon='save'>Save</Button>
            {
              confirmCancel
                ? <Button color='secondary' onClick={openConfirmPopup} icon='delete'>Cancel</Button>
                : null
            }
          </>
          : !disabled ? <Button color='secondary' onClick={() => {
            setBeingEdited(true)
          }} icon='edit'>Edit</Button>
            : null
        }
      </div>
    ) : null
  )

  return (
    <>
      {
        viewSaveButton
          ? <>
            <Confirm
              isOpen={confirmIsOpen}
              message="Are you sure you wish to cancel editing this message?"
              onCancel={onPopupCancel}
              onConfirm={onPopupConfirm}
            />
            <SaveMessageButton />
            <div id={formId} ref={jsonEditorRef} />
            <SaveMessageButton />
          </>
          : <div className={formClassName || (!disabled ? 'edt-disable' : 'edt-enable')} ref={jsonEditorRef} />
      }
    </>
  )
}

export default JsonEditor
