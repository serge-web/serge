import { Editor, PlannedActivityGeometry, TemplateBody } from '@serge/custom-types'
import { configDateTimeLocal, deepCopy, usePrevious } from '@serge/helpers'
import 'bootstrap/dist/css/bootstrap.min.css'
import { isEqual } from 'lodash'
import moment from 'moment'
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Button } from '../../atoms/button'
import { Confirm } from '../../atoms/confirm'
import setupEditor from './helpers/setupEditor'
import Props from './types/props'

const alwaysShowEditorErrors = 'always'

// keydown listener should works only for defined tags
const keydowListenFor: string[] = ['TEXTAREA', 'INPUT']
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
  clearForm,
  saveMessage,
  modifyForSave,
  confirmCancel = false,
  viewSaveButton = false,
  editCallback,
  onLocationEditorLoaded
}) => {
  const jsonEditorRef = useRef<HTMLDivElement>(null)
  const [editor, setEditor] = useState<Editor | null>(null)
  const [beingEdited, setBeingEdited] = useState<boolean>(false)
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  const [originalMessage] = useState<string>(JSON.stringify(messageContent))

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

  const destroyEditor = (editorObject: Editor | null): void => {
    if (editorObject && (editorObject.ready || !editorObject.destroyed)) { editorObject.destroy() }
  }

  const fixDate = (value: { [property: string]: any }): { [property: string]: any } => {
    const cleanDate = (date: string): string => {
      if (!date.includes('Z')) {
        // convert to ISO
        const res = moment(date, 'DD/MM/YYYY HH:mm').toISOString()
        return res
      } else {
        return date
      }
    }

    const res = deepCopy(value) as { [property: string]: any }
    if (res.startDate) {
      res.startDate = cleanDate(res.startDate)
    }
    if (res.endDate) {
      res.endDate = cleanDate(res.endDate)
    }
    return res
  }

  const handleChange = (value: { [property: string]: any }): void => {
    /** workaround. The FlatPickr control isn't returning ISO dates. If that happens
     * convert them
     */
    const fixedDate = fixDate(value)
    const newDoc = modifyForSave ? modifyForSave(fixedDate) : fixedDate
    if (!isEqual(JSON.stringify(newDoc), originalMessage)) {
      storeNewValue && storeNewValue(newDoc)
    }
  }

  const OnSave = () => {
    saveMessage && saveMessage()
    setBeingEdited(false)
  }

  const onPopupCancel = (): void => {
    // removePlanning
    setConfirmIsOpen(false)
  }

  const onPopupConfirm = (): void => {
    if (!viewSaveButton) {
      initEditor()
    }
    setConfirmIsOpen(false)
    setBeingEdited(false)
  }

  const openConfirmPopup = (): void => {
    if (confirmCancel) {
      setConfirmIsOpen(true)
    }
  }

  const localEditCallback = (locations: PlannedActivityGeometry[]): void => {
    // TODO: we should only call the `editCallback` if this document
    // is being edited.  The `beingEdited` flag should specify this,
    // but it is always false
    editCallback && editCallback(locations)
  }

  const onEditorLoaded = (editorElm: HTMLDivElement) => {
    onLocationEditorLoaded && onLocationEditorLoaded(editorElm)
  }

  const initEditor = (): () => void => {
    const hideArrayButtons = disabled
    const jsonEditorConfig = hideArrayButtons
      ? { disableArrayReOrder: true, disableArrayAdd: true, disableArrayDelete: true }
      : { disableArrayReOrder: false, disableArrayAdd: false, disableArrayDelete: false }

    // initialise date editors
    gameDate && console.warn('Note: JSON Editor not pre-configuring game date. Do it via customiseTemplate helper', gameDate)
    const modSchema = gameDate ? configDateTimeLocal(template.details, gameDate) : template.details

    // apply any other template modifications
    const customizedSchema = customiseTemplate ? customiseTemplate(messageContent, modSchema) : modSchema

    // if a title was supplied, replace the title in the schema
    const schemaWithTitle = title ? { ...customizedSchema, title: title } : customizedSchema
    const nextEditor = setupEditor(editor, schemaWithTitle, jsonEditorRef, jsonEditorConfig, localEditCallback, onEditorLoaded, alwaysShowEditorErrors)

    const changeListenter = (): void => {
      if (nextEditor) {
        const nexValue = nextEditor.getValue()
        handleChange(nexValue)
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

    setTimeout(() => {
      try {
        if (nextEditor) {
          // only retrieve from expired content if we haven't been provided with message content
          if (messageContent) {
            nextEditor.setValue(messageContent)
            nextEditor.on('change', changeListenter)
          } else {
            nextEditor.on('change', changeListenter)
          }
        }
      } catch (err) {
        console.warn('JSONEditor error 2:', err)
      }
      // update time input for flatpickr
      const flatPickrElm = document.querySelectorAll('div[class*="flatpickr-calendar"]')
      Array.from(flatPickrElm).forEach(elm => elm.classList.add('showTimeInput'))
    })

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
    if (template.details && editor) {
      return initEditor()
    }

    return (): void => destroyEditor(editor)
  }, [template.details, clearForm])

  useEffect(() => {
    if (editor) {
      setTimeout(() => {
        try {
          if (viewSaveButton && !beingEdited) {
            editor.disable()
          } else if (disabled && !viewSaveButton) {
            editor.disable()
          } else {
            editor.enable()
          }
        } catch (err) {
          console.warn('JSONEditor error 1', err)
        }
        const editInLocationBtns = document.querySelectorAll('button[name="editInLocation"]')
        Array.from(editInLocationBtns).forEach(btn => {
          btn.classList.remove('btn-hide')
        })

        /**
         * heading option should have pattern: ###<heading>
         */
        const selectElms = Array.from(document.querySelectorAll('select'))
        for (const select of selectElms) {
          const options = Array.from(select.querySelectorAll('option')).filter((option: any) => {
            return /^###/.test(option.value)
          })
          options.forEach((option: any) => {
            const oGroup = document.createElement('optgroup')
            oGroup.label = option.value.replace(/^###/g, '')
            option.parentNode.insertBefore(oGroup, option.nextSibling)
            option.parentNode.removeChild(option)
            option.style.display = 'none'
          })
        }
      }, 50)
      return
    }

    if (template.details && template.details.type) {
      setBeingEdited(false)
      initEditor()
    }

    return (): void => destroyEditor(editor)
  }, [template.details, messageId, messageContent, prevTemplates, beingEdited, editor])

  useLayoutEffect(() => {
    if (editor) editor.destroy()
  }, [disableArrayToolsWithEditor && disabled])

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
