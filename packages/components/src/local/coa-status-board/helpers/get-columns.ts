import { MessageCustom } from '@serge/custom-types'
import { SpecialChannelColumns } from '../../../../../config/build/enums'

const compressData = (message: any): string => {
  const listed = Object.keys(message).map((prop) => {
    const items = message[prop]
    const matches = items.map((item: any) => {
      return Object.keys(item).map((prop2) => {
        return '' + prop + ' - ' + item[prop2]
      })
    })
    // introduce space separator, to let them flow to newline
    return matches.join(', ')
  })
  // introduce space separator, to let them flow to newline
  return '' + listed.join(', ')
}

/** get a list of the roles in this participant group, if it is
 * tagged with `can collaborate`.
 * If no roles are specified, include all roles
 */
const getColumns = (message: MessageCustom, columns: SpecialChannelColumns[]): string[] => {
  const msg = message.message
  const res = columns.map((column: SpecialChannelColumns): string => {
    switch (column) {
      case SpecialChannelColumns.LOCATION: {
        if (msg.LOCATION && msg.LOCATION.LOCATION) {
          return compressData(msg.LOCATION.LOCATION)
        } else {
          return 'Note: LOCATION field not found'
        }
      }
    }
    return 'pending'
  })
  return res
}

export default getColumns
