import { MessageCustom } from "@serge/custom-types"
import { SpecialChannelColumns } from "../../../../../config/build/enums"

const compressData = (message: any): string => {
  console.log('msg', message)
  return message
}

/** get a list of the roles in this participant group, if it is
 * tagged with `can collaborate`.
 * If no roles are specified, include all roles
 */
const getColumns = (message: MessageCustom, columns: SpecialChannelColumns[]): string[] => {
  const res = columns.map((column: SpecialChannelColumns): string => {
    switch(column) {
      case SpecialChannelColumns.LOCATION: {
        return compressData(message.message.LOCATION)
      }
    }
    return 'pending'
  })
  return res
}

export default getColumns
