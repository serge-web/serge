import moment from 'moment'
import deepCopy from './deep-copy'

/**
 * helper function to render default Datetime or Date or Time props of json
 */
const configCommonProps = (propIn: Record<string, unknown>, gameDate: string): Record<string, unknown> => {
  const prop = deepCopy(propIn)
  switch (prop.format) {
    case 'datetime-local':
      prop.defaultDate = moment(gameDate).toISOString()
      prop.options = {
        flatpickr: {
          time_24hr: true,
          dateFormat: 'Z'
        }
      }
      return prop
    case 'date':
      prop.default = moment(gameDate).format('DD/MM/YYYY')
      prop.options = {
        flatpickr: {
          wrap: false,
          dateFormat: 'd/m/Y'
        }
      }
      return prop
    case 'time':
      prop.default = moment(gameDate).format('HH:mm')
      prop.options = {
        flatpickr: {
          wrap: false,
          time_24hr: true,
          dateFormat: 'H:i'
        }
      }
      return prop
    default:
      return prop
  }
}

/**
 * Render Default datetime entries in template of json for type datetime-local
 */
const configDateTimeLocal = (schema: Record<string, any>, gameDate: string): Record<string, any> => {
  // debugger
  if (!schema || !schema.properties) {
    return schema
  }
  // deep copy of schema
  const modSchema = deepCopy(schema)
  modSchema.properties = {}

  if (schema.properties) {
    Object.keys(schema.properties).forEach(key => {
      let prop = schema.properties[key]
      prop = configCommonProps(prop, gameDate)
      // recursive check on props
      const recProp = configDateTimeLocal(prop.items || prop, gameDate)
      if (prop.items) {
        prop.items = recProp
        modSchema.properties[key] = prop
      } else {
        modSchema.properties[key] = recProp
      }
    })
  }
  return modSchema
}

export default configDateTimeLocal
