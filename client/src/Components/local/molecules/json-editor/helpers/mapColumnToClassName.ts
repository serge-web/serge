const mapColumnToClassName = (uiSchema: object): object => {
  const newUiSchema: any = {}

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
