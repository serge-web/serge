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
  const transformObject = (obj: any): any => {
    const newObj: any = {}
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === 'ui:column') {
          newObj['ui:classNames'] = `col-${obj[key]}`
        } else if (typeof obj[key] === 'object') {
          newObj[key] = transformObject(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }

  const newUiSchema = transformObject(uiSchema)
  return newUiSchema
}

export default mapColumnToClassName
