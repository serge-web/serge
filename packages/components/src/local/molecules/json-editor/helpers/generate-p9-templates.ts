import moment from 'moment'

export const generateTemplate = (title: string, core: Record<string, any>, domain: Record<string, any>): Record<string, any> => {
  const combinedTemlates = { ...core, ...domain }

  const fieldNames = Object.keys(combinedTemlates).map((name: string) => name)
  const wrappedDetails = {
    format: 'grid',
    required: fieldNames,
    properties: combinedTemlates,
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
