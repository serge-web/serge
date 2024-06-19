type UiSchema = Record<string, any>;

/**
 * Transforms the uiSchema by mapping 'ui:column' to 'ui:className' for each field.
 * 
 * Before:
 * {
 *   newInput1: {
 *     'ui:column': '6'
 *   },
 *   anotherInput: {
 *     'ui:column': '4'
 *   }
 * }
 * 
 * After:
 * {
 *   newInput1: {
 *     'ui:className': 'col-6'
 *   },
 *   anotherInput: {
 *     'ui:className': 'col-4'
 *   }
 * }
 * 
 * @param uiSchema - The original uiSchema object
 * @returns The transformed uiSchema with 'ui:column' replaced by 'ui:className'
 */

const mapColumnToClassName = (uiSchema: UiSchema): UiSchema => {
  const newUiSchema: UiSchema = {}

  for (const key in uiSchema) {
    if (Object.prototype.hasOwnProperty.call(uiSchema, key)) {
      const field = uiSchema[key]
      const columnSize = field['ui:column']
        
      if (columnSize) {
        newUiSchema[key] = {
          ...field,
          'ui:classNames': `col-${columnSize}`
        }
        delete newUiSchema[key]['ui:column']
      } else {
        newUiSchema[key] = field
      }
    }
  }

  return newUiSchema
}

export default mapColumnToClassName 
