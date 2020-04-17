import { Hex } from 'honeycomb-grid'
import padInt from '@serge/helpers/padInteger'


/** retrive the cell at the supplied human-readable coords ("A01") */
const cellName = (cell:Hex<{}>) => {
  return String.fromCharCode(65 + cell.y) + padInt(cell.x)
}

export default cellName;


