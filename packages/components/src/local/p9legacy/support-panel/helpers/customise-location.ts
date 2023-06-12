import { MessageStructure } from '@serge/custom-types'

export const customiseLocation = (_document: MessageStructure | undefined, schema: Record<string, any>): Record<string, any> => {
  const res = { ...schema }
  if (schema) {
    const location = res.properties?.location
    if (location) {
      // ok, create a hidden-store entry that can store raw
      // location data while we mangle the data to make it easier to read
      schema.properties.hiddenStore = {
        type: 'string',
        readonly: 'readonly',
        options: {
          hidden: true
        },
        id: 'hiddenStore'
      }
    }
  }
  return res
}
