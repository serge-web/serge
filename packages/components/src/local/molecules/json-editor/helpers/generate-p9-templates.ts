import moment from 'moment'

export const generateTemplate = (title: string, dataStruct: Record<string, any>): Record<string, any> => {
  const wrappedDetails = {
    format: 'grid',
    required: [
      'title',
      'description',
      'startDate',
      'endDate',
      'ownAssets',
      'otherAssets'
    ],
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
