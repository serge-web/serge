export const booleanObject = (description: string, cols: number, order: number): Record<string, any> => {
  return {
    type: 'boolean',
    title: description,
    format: 'checkbox',
    propertyOrder: order,
    options: {
      grid_columns: cols
    }
  }
}

export const numberObject = (description: string, cols: number, order: number): Record<string, any> => {
  return {
    type: 'integer',
    title: description,
    propertyOrder: order,
    options: {
      grid_columns: cols
    }
  }
}

export const textObject = (description: string, cols: number, order: number): Record<string, any> => {
  return {
    type: 'string',
    title: description,
    propertyOrder: order,
    options: {
      grid_columns: cols
    }
  }
}

export const textAreaObject = (description: string, cols: number, order: number): Record<string, any> => {
  return {
    type: 'string',
    format: 'textarea',
    title: description,
    propertyOrder: order,
    options: {
      grid_columns: cols
    }
  }
}

export const dropDownObject = (description: string, items: string[], cols: number, order: number): Record<string, any> => {
  return {
    enum: items,
    title: description,
    type: 'string',
    propertyOrder: order,
    options: {
      grid_columns: cols
    }
  }
}

export const multiSelectDropDownObject = (description: string, items: string[], cols: number, order: number): Record<string, any> => {
  return {
    type: "array",
    uniqueItems: true,
    title: description,
    propertyOrder: order,
    options: {
      grid_columns: cols
    },
    items: {
      type: "string",
      enum: items
    }
  }
}
