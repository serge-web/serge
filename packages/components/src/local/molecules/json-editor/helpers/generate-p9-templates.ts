import moment from 'moment'

export const generateTemplate = (title: string, dataStruct: Record<string, any>): Record<string, any> => {
  const fieldNames = Object.keys(dataStruct).map((name: string) => name)
  const wrappedDetails = {
    format: 'grid',
    required: fieldNames,
    properties: dataStruct,
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
