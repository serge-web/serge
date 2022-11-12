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
    type: 'number',
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
    title: description,
    format: 'textarea',
    propertyOrder: order,
    options: {
      grid_columns: cols
    }
  }
}
