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
import './bioworks.css'
import React, { useEffect, useState, FunctionComponent } from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import Props, { FormProps } from './types/props'
import widgets from './helpers/customCheckbox'

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
  openCancelConfirmPopup,
  disabled = false,
  gameDate,
  clearForm,
  modifyForSave,
  children
}) => {
  const [schema, setSchema] = useState({}) 
  const [uischema, setUiSchema] = useState({})
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
    
  useEffect(() => {
    if (template.details && template.details.schema) {
      const { schema, uischema } = template.details
      const jsonSchema = schema
  
      // Initialize date editors if necessary
      if (gameDate) {
        console.log('Note: JSON Editor not pre-configuring game date. Do it via customiseTemplate helper', gameDate)
      }

      // Apply modifications to the schema
      const modSchema = gameDate ? configDateTimeLocal(jsonSchema, gameDate) : jsonSchema
      const customizedSchema = modSchema
      const schemaWithTitle = title ? { ...customizedSchema, title } : customizedSchema
      
      setSchema(schemaWithTitle)
      setUiSchema(uischema)
    }
  }, [template, gameDate, messageContent, prevTemplates, title, clearForm])

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

  function checkError (text: any) {
    let data
    try {
      data = text
    } catch (e: any) {
      return e.toString()
    }
    // console.log('data', typeof data === 'string')
    if (typeof data === 'string') {
      return 'Received a string instead of object.'
    } 
    return ''
  }

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
        schema &&
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
                schemaError === '' ? schema : ''
              }
              uiSchema={
                schemaUiError === ''
                  ? uischema
                  : ''
              }
              onChange={handleChange}
              validator={validator}
              widgets={widgets}
              formData={formData}
              onSubmit={(formData: IChangeEvent<FormData>, e: React.MouseEvent<HTMLButtonElement>) => handleSubmit(formData, e)}
              disabled={disabled}
            >
              <div className="form-group">
                <button
                  name="cancel"
                  className="btn btn-action btn-action--form btn-action--cancel"
                  type='button'
                  onClick={openCancelConfirmPopup}
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
