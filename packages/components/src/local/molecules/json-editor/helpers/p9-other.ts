
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

let order = 200
export const otherTemplate = {
  discussedWithSMEs: booleanObject('Has this been discussed with SMEs?', 3, order++),
  isPreadjudicated: booleanObject('Is this pre-adjudicated?', 3, order++),
  standaloneActivity: booleanObject('Stand-Alone Activity?', 3, order++),
  requiresAS: booleanObject('Does this require AS Discussion?', 3, order++),
  supportsOther: textObject('Supporting Another Activity?', 3, order++),
  activityDesc: textAreaObject('Activity Description', 6, order++),
  effectDesc: textAreaObject('Effect Description', 6, order++)
}
