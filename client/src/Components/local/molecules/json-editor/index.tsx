import { TemplateBody } from 'src/custom-types'
import { configDateTimeLocal, deepCopy, usePrevious } from 'src/Helpers'
import 'bootstrap/dist/css/bootstrap.min.css'
import { isEqual } from 'lodash'
import Form, { IChangeEvent } from '@rjsf/core'
import { customizeValidator } from '@rjsf/validator-ajv8'
import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { Button } from '../../atoms/button'
import { Confirm } from '../../atoms/confirm'
import Props from './types/props'

export interface FormData {
  foo?: string
  bar?: number
}

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
  // expandHeight = true,
  gameDate,
  // disableArrayToolsWithEditor = true,
  clearForm,
  saveMessage,
  onCancelEdit,
  modifyForSave,
  confirmCancel = false,
  viewSaveButton = false
}) => {
  const [beingEdited, setBeingEdited] = useState<boolean>(false)
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  const [schema, setSchema] = useState<Record<string, unknown>>()
  const [uischema, setUiSchema] = useState<string>('{}')
  const [originalMessage] = useState<string>(JSON.stringify(messageContent))
  const validator = customizeValidator<FormData>()
  const [formData, setFormData] = useState<Record<string, unknown>>({}) 
  
  const prevTemplates: TemplateBody = usePrevious(messageId)
  if (!template) {
    const styles = {
      color: '#f00',
      background: '#ff0',
      padding: '20px',
      fontSize: '16px'
    }
    return <span style={styles}>Schema not found for {template}</span>
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

  const setSelectOptionsHeaders = (): void => {
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
  }

  const handleChange = (newFormData: IChangeEvent<FormData>) => { 
    //   /** workaround. The FlatPickr control isn't returning ISO dates. If that happens
    //    * convert them
    //    */
    const fixedDate = fixDate(newFormData.formData as any)
    const newDoc = modifyForSave ? modifyForSave(fixedDate) : fixedDate
    if (!isEqual(JSON.stringify(newDoc), originalMessage)) {
      storeNewValue && storeNewValue(newDoc)
      setSelectOptionsHeaders()
      setFormData({})
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
    onCancelEdit && onCancelEdit()
    setConfirmIsOpen(false)
    setBeingEdited(false)
  }

  const openConfirmPopup = (): void => {
    if (confirmCancel) {
      setConfirmIsOpen(true)
    }
  }

  useEffect(() => {
    if (template.details && template.details.schema) {
      const { schema, uischema } = template.details
      const jsonSchema = JSON.parse(schema)
  
      // Initialize date editors if necessary
      if (gameDate) {
        console.log('Note: JSON Editor not pre-configuring game date. Do it via customiseTemplate helper', gameDate)
      }
  
      // Apply modifications to the schema
      const modSchema = gameDate ? configDateTimeLocal(jsonSchema, gameDate) : jsonSchema
      const customizedSchema = customiseTemplate ? customiseTemplate(messageContent, modSchema) : modSchema
      const schemaWithTitle = title ? { ...customizedSchema, title } : customizedSchema
  
      // Set state
      setFormData({})
      setSchema(schemaWithTitle as Record<string, unknown>) 
      setUiSchema(uischema)
    }
  }, [template, gameDate, messageContent, customiseTemplate, prevTemplates, title, clearForm])

  const SaveMessageButton = () => (
    schema && viewSaveButton ? (
      <div className='button-wrap'>
        {!disabled && beingEdited ? (
          <>
            <Button color='secondary' onClick={OnSave} icon='save'>
              Save
            </Button>
            {confirmCancel ? (
              <Button color='secondary' onClick={openConfirmPopup} icon='delete'>
                Cancel
              </Button>
            ) : null}
          </>
        ) : !disabled ? (
          <Button color='secondary' onClick={() => setBeingEdited(true)} icon='edit'>
            Edit
          </Button>
        ) : null}
      </div>
    ) : null
  )

  return (
    <>
      {viewSaveButton ? (
        <>
          <Confirm
            isOpen={confirmIsOpen}
            message="Are you sure you wish to cancel editing this message?"
            onCancel={onPopupCancel}
            onConfirm={onPopupConfirm}
          />
          <SaveMessageButton />
          {schema && (
            <Form<FormData>
              id={formId}
              schema={schema}
              uiSchema={JSON.parse(uischema)}
              onChange={handleChange}
              validator={validator}
              formData={formData}
              templates={{ ButtonTemplates: {} }}
              disabled={disabled}
            />
          )}
          <SaveMessageButton />
        </>
      ) : schema && (
        <Form<FormData>
          className={formClassName || (!disabled ? 'edt-disable' : 'edt-enable')}
          schema={schema}
          uiSchema={JSON.parse(uischema)}
          onChange={handleChange}
          validator={validator}
          formData={formData}
          disabled={disabled}
        />
      )}
    </>
  )
}

export default JsonEditor
