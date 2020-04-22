import padInt from '@serge/helpers/padInteger'
import SergeHex from '../../mapping/types/serge-hex'

/** Generate the Serge name for the supplied cell (1,3) == "B03" */
const cellName = (cell: SergeHex<{}>): string => {
  return String.fromCharCode(65 + cell.x) + padInt(cell.y)
}

export default cellName
