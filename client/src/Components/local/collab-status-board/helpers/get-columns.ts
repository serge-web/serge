import { MessageCustom } from 'src/custom-types'
import { SpecialChannelColumns } from 'src/config'

const compressData = (message: any): string[] => {
  const listed = Object.keys(message).map((prop) => {
    const items = message[prop]
    const matches = items.map((item: any) => {
      return Object.keys(item).map((prop2) => {
        return '' + prop + '-' + item[prop2]
      })
    })
    return matches
  })
  return listed.flat(2)
}

/** get a list of the roles in this participant group, if it is
 * tagged with `can collaborate`.
 * If no roles are specified, include all roles
 */
const getColumns = (message: MessageCustom, columns: SpecialChannelColumns[]): string[][] => {
  const msg = message.message
  const res = columns.map((column: SpecialChannelColumns): string[] => {
    switch (column) {
      case SpecialChannelColumns.LOCATION: {
        if (msg.LOCATION) {
          return compressData(msg.LOCATION)
        } else {
          return ['Note: LOCATION field not found']
        }
      }
      default: {
        return ['Column handler not provided for' + column]
      }
    }
  })
  return res
}

export default getColumns
