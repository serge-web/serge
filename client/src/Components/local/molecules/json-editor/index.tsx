import { TemplateBody } from 'src/custom-types'
import {
  Alert
} from 'reactstrap'
import { configDateTimeLocal, deepCopy, usePrevious } from 'src/Helpers'
import 'bootstrap/dist/css/bootstrap.min.css'
import { isEqual } from 'lodash'
import { IChangeEvent, withTheme } from '@rjsf/core'
import { Theme as Bootstrap4Theme } from '@rjsf/bootstrap-4'
import { customizeValidator } from '@rjsf/validator-ajv8'
import moment from 'moment'
import React, { useEffect, useState, FunctionComponent } from 'react'
import { Button } from '../../atoms/button'
import { Confirm } from '../../atoms/confirm'
import { ErrorBoundary } from 'react-error-boundary'
import Props, { FormProps } from './types/props'

export interface FormData {
  foo?: string
  bar?: number
}

const Form = withTheme(
  Bootstrap4Theme
) as unknown as FunctionComponent<FormProps>

/* Render component */
export const JsonEditor: React.FC<Props> = ({
  messageId,
  messageContent,
  title,
  template,
  storeNewValue,
  submitNewValue,
  formClassName,
  formId,
  customiseTemplate,
  openCancelConfirmPopup,
  disabled = false,
  // expandHeight = true,
  gameDate,
  // disableArrayToolsWithEditor = true,
  clearForm,
  saveMessage,
  onCancelEdit,
  modifyForSave,
  confirmCancel = false,
  viewSaveButton = false,
  children
}) => {
  const [beingEdited, setBeingEdited] = useState<boolean>(false)
  const [confirmIsOpen, setConfirmIsOpen] = useState<boolean>(false)
  const [schema, setSchema] = useState<string>('') 
  const [uischema, setUiSchema] = useState<string>('{}')
  const [originalMessage] = useState<string>(JSON.stringify(messageContent))
  const [formData, setFormData] = useState<FormData>({})
  const validator = customizeValidator<FormData>()
  
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
    setFormData(newFormData.formData as any)
    const fixedDate = fixDate(newFormData.formData as any)
    const newDoc = modifyForSave ? modifyForSave(fixedDate) : fixedDate
    if (!isEqual(JSON.stringify(newDoc), originalMessage)) {
      storeNewValue && storeNewValue(newDoc)
      setSelectOptionsHeaders()
    }
  }

  const handleSubmit = (newFormData: IChangeEvent<FormData>, e: React.MouseEvent<HTMLButtonElement>) => {
    const fixedDate = fixDate(newFormData.formData as any)
    const newDoc = modifyForSave ? modifyForSave(fixedDate) : fixedDate
    if (!isEqual(JSON.stringify(newDoc), originalMessage)) {
      submitNewValue && submitNewValue(newDoc, e)
      setSelectOptionsHeaders()
    }
  }
    
  const OnSave = () => {
    saveMessage && saveMessage()
    setBeingEdited(false)
  }

  const onPopupCancel = (): void => {
    // removePlanning
    setConfirmIsOpen(false)
    setFormData({})
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
  
      setSchema(JSON.stringify(schemaWithTitle))
      setUiSchema(uischema)
    }
  }, [template, gameDate, messageContent, customiseTemplate, prevTemplates, title, clearForm])

  useEffect(() => {
    const clearFormData = () => {
      const newFormData = {}
      for (const key in formData) {
        newFormData[key] = ''
      }
      setFormData(newFormData)
    }

    if (clearForm || prevTemplates) {
      clearFormData()
    }
  }, [clearForm, prevTemplates])

  function checkError (text: string) {
    let data
    try {
      data = JSON.parse(text)
    } catch (e: any) {
      return e.toString()
    }
    // console.log('data', typeof data === 'string')
    if (typeof data === 'string') {
      return 'Received a string instead of object.'
    } 
    return ''
  }

  const SaveMessageButton = () => (
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
  )
  const schemaError = checkError(schema)
  const schemaUiError = checkError(uischema)
  return (
    <>
      <Alert
        style={{ display: schemaError === '' ? 'none' : 'block' }}
        color='danger'
      >
        <h5>Schema:</h5> {schemaError}
      </Alert>
      <Alert
        style={{ display: schemaUiError === '' ? 'none' : 'block' }}
        color='danger'
      >
        <h5>UI Schema:</h5> {schemaUiError}
      </Alert>
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
            {
              schema && <Form 
                id={formId}
                schema={
                  schemaError === '' ? JSON.parse(schema) : {}
                }
                uiSchema={JSON.parse(uischema)}
                onChange={handleChange}
                onSubmit={(formData: IChangeEvent<FormData>, e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(formData, e)}  
                formData={formData}
                validator={validator} 
                templates={{ ButtonTemplates: { } }}
                disabled={disabled}
              />
              
            }
            <SaveMessageButton />
          </>
          
          : schema &&
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div role="alert" className="error">
                <h2>{error.toString()}</h2>
                <button onClick={resetErrorBoundary}>Reset Error</button>
              </div>
            )}
          >
            <Form
              className={formClassName || (!disabled ? 'edt-disable' : 'edt-enable')}
              schema={
                schemaError === '' ? JSON.parse(schema) : ''
              }
              uiSchema={
                schemaUiError === ''
                  ? JSON.parse(uischema)
                  : ''
              }
              onChange={handleChange}
              validator={validator} 
              formData={formData}
              onSubmit={(formData: IChangeEvent<FormData>, e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(formData, e)}
              disabled={disabled}
            >
              <div className="form-group">
                <button
                  name="cancel"
                  className="btn btn-action btn-action--form btn-action--cancel"
                  type='button'
                  onClick={ openCancelConfirmPopup}
                >
                  <span>Cancel</span>
                </button>
                <button
                  name="send"
                  className="btn btn-action btn-action--form btn-action--send-message"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </Form> 
          </ErrorBoundary>
          
      }
      {children}
    </>
  )
}

export default JsonEditor
