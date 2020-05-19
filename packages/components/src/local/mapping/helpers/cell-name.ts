import { padInteger } from '@serge/helpers'
import { SergeHex } from '@serge/custom-types'

/** Generate the Serge name for the supplied cell (1,3) == "B03" */
const cellName = (cell: SergeHex<{}>): string => {
  return String.fromCharCode(65 + cell.x) + padInteger(cell.y)
}

export default cellName
