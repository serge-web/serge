// import { JSONEditor } from '@json-editor/json-editor'
// import _ from 'lodash'

// const DATE_FORMAT = 'DD/MM/YYYY'
// const DATE_TIME_FORMAT = 'DD/MM/YYYY HH:MM'
// const TIME_FORMAT = 'HH:MM'

// interface FormatInfo {
//   format: string
//   defaultFieldName: string
// }
// const isISOString = (value: string) => value.endsWith('Z') || value.endsWith('+00:00')

// const getFormatAndDefaultFieldName = (schema: { format: string }, value: string): FormatInfo => {
//   switch (schema.format) {
//     case 'datetime-local':
//       // don't bother with validation if it's na IZO string
//       if (isISOString(value)) {
//         // not validating ISO strings
//         // return { format: '', defaultFieldName: '' }
//       } else if (value === '' || !/^(\d{2}\D\d{2}\D\d{4} \d{2}:\d{2}(?::\d{2})?)?$/.test(value)) {
//         return { format: DATE_TIME_FORMAT, defaultFieldName: 'Datetime' }
//       }
//       break
//     case 'date':
//       if (value === '' || !/^(\d{2}\D\d{2}\D\d{4})?$/.test(value)) {
//         return { format: DATE_FORMAT, defaultFieldName: 'Date' }
//       }
//       break
//     case 'time':
//       if (value === '' || !/^(\d{2}:\d{2})?$/.test(value)) {
//         return { format: TIME_FORMAT, defaultFieldName: 'Time' }
//       }
//       break
//     default:
//       return { format: '', defaultFieldName: '' }
//   }
//   return { format: '', defaultFieldName: '' }
// }

// const extractFieldName = (path: string, defaultFieldName: string) => {
//   const listFieldName = path.split('.')
//   const fieldName =
//     listFieldName.length > 0
//       ? listFieldName[listFieldName.length - 1]
//       : defaultFieldName

//   return fieldName
// }

// const buildErrorMessage = (fieldName: string, format: string) => {
//   return `${fieldName} must be in the format '${format}'`
// }

// const configCommonValidation = (
//   schema: { format: string },
//   value: string,
//   path: string
// ) => {
//   const { format, defaultFieldName } = getFormatAndDefaultFieldName(schema, value)
//   if (format !== '') {
//     const fieldName = extractFieldName(path, defaultFieldName)
//     // Errors must be an object with `path`, `property`, and `message`
//     const message = buildErrorMessage(fieldName, format)

//     return {
//       path,
//       property: 'format',
//       message
//     }
//   }
//   return {}
// }

// export const configDateTimeCustomValidation = (): any => {
//   // multiple message type will repeat custom validators, reinitialize it for every instance
//   JSONEditor.defaults.custom_validators = []
//   JSONEditor.defaults.custom_validators.push(function (
//     schema: { format: string },
//     value: string,
//     path: any
//   ) {
//     const errors = []
//     const customValidationErrors = configCommonValidation(
//       schema,
//       value,
//       path
//     )
//     if (!_.isEmpty(customValidationErrors)) {
//       errors.push(customValidationErrors)
//     }
//     return errors
//   })
// }
