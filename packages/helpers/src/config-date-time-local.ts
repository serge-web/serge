import moment from 'moment'
import _ from 'lodash'
import deepCopy from './deep-copy'

/**
 * helper function to render default Datetime or Date or Time props of json
 */
const configCommonProps = (prop: any, gameDate: string) => {
  switch (prop.format) {
    case 'datetime-local':
      prop.default = moment(gameDate).format('DD/MM/YYYY HH:mm')
      prop.options = {
        flatpickr: {
          wrap: false,
          time_24hr: true,
          dateFormat: 'd/m/Y H:i'
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
const configDateTimeLocal = (nschema: any, gameDate: string) => {
  //debugger
  if (!nschema || !nschema.properties) {
    return nschema
  }
  // deep copy of schema
  const modSchema = deepCopy(nschema)
  modSchema.properties = {}

  Object.keys(nschema.properties).forEach(key => {
    let prop = nschema.properties[key]
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
  return modSchema
}

export default configDateTimeLocal
