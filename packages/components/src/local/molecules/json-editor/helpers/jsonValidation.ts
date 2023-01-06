import { JSONEditor } from '@json-editor/json-editor'
import _ from 'lodash'

const configCommonValidation = (
  schema: { format: string },
  value: string,
  path: any
): any => {
  let format = ''
  let defaultFieldName = ''
  switch (schema.format) {
    case 'datetime-local':
      if (
        value === '' ||
        !/^(\d{2}\D\d{2}\D\d{4} \d{2}:\d{2}(?::\d{2})?)?$/.test(value)
      ) {
        format = 'DD/MM/YYYY HH:MM'
        defaultFieldName = 'Datetime'
      }
      break
    case 'date':
      if (value === '' || !/^(\d{2}\D\d{2}\D\d{4})?$/.test(value)) {
        format = 'DD/MM/YYYY'
        defaultFieldName = 'Date'
      }
      break
    case 'time':
      if (value === '' || !/^(\d{2}:\d{2})?$/.test(value)) {
        format = 'HH:MM'
        defaultFieldName = 'Time'
      }
      break
    default:
      return {}
  }

  if (format !== '') {
    const listFieldName = path.split('.')
    const fieldName =
      listFieldName.length > 0
        ? listFieldName[listFieldName.length - 1]
        : defaultFieldName
    // Errors must be an object with `path`, `property`, and `message`
    const message = `${fieldName} must be in the format '${format}'`

    return {
      path: path,
      property: 'format',
      message: message
    }
  }
  return {}
}

export const configDateTimeCustomValidation = (): any => {
  // multiple message type will repeat custom validators, reinitialize it for every instance
  JSONEditor.defaults.custom_validators = []
  JSONEditor.defaults.custom_validators.push(function (
    schema: { format: string },
    value: string,
    path: any
  ) {
    const errors = []
    const customValidationErrors = configCommonValidation(
      schema,
      value,
      path
    )
    if (!_.isEmpty(customValidationErrors)) {
      errors.push(customValidationErrors)
    }
    return errors
  })
}
