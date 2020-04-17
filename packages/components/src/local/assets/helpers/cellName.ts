import padInt from '@serge/helpers/padInteger'
import SergeHex from '../../mapping/types/serge-hex'

/** retrive the cell at the supplied human-readable coords ("A01") */
const cellName = (cell:SergeHex<{}>) => {
  return String.fromCharCode(65 + cell.y) + padInt(cell.x)
}

export default cellName;


