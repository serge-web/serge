import moment from 'moment'

const locationComponent = {
  format: 'textarea',
  title: 'Location',
  id: 'locationArea',
  type: 'string',
  readonly: 'readonly',
  propertyOrder: 55,
  options: {
    grid_columns: 6
  }
}

export const generateTemplate = (title: string, location: boolean, core: Record<string, any>, domain: Record<string, any>, specific: Record<string, any>): Record<string, any> => {
  const combinedTemplates = { ...core, ...domain, ...specific }
  if (location) {
    combinedTemplates.location = locationComponent
  }
  const fieldNames = Object.keys(combinedTemplates).map((name: string) => name)
  const wrappedDetails = {
    format: 'grid',
    required: fieldNames,
    properties: combinedTemplates,
    title: 'Land Activity',
    type: 'object'
  }

  const res = {
    lastUpdated: moment().toISOString(),
    title: title,
    details: wrappedDetails,
    completed: true,
    _id: title,
    _rev: moment().toISOString()
  }
  return res
}
