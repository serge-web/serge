import { MessageCustom } from "@serge/custom-types"
import { SpecialChannelColumns } from "../../../../../config/build/enums"

const compressData = (message: any): string => {
  if(message) {
    const listed = Object.keys(message).map((prop) => {
      const items = message[prop]      
      return items.map((item: any) => {
        return (item.Country) ? prop + '-' + item.Country : 'Country missing'
      })
    })
    // introduce space separator, to let them flow to newline
    return '' + listed.join(', ')  
  } else {
    return '[Loc not found]'
  }
}

/** get a list of the roles in this participant group, if it is
 * tagged with `can collaborate`.
 * If no roles are specified, include all roles
 */
const getColumns = (message: MessageCustom, columns: SpecialChannelColumns[]): string[] => {
  console.log('msg', message)
  const msg = message.message
  const res = columns.map((column: SpecialChannelColumns): string => {
    switch(column) {
      case SpecialChannelColumns.LOCATION: {
        if(msg.LOCATION && msg.LOCATION.LOCATION) {
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
