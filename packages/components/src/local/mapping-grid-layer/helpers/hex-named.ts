import { Grid, Hex } from 'honeycomb-grid'

interface NewHex extends Hex<any> {
  name: string
}

/** retrive the cell at the supplied human-readable coords ("A01") */
const hexNamed = (cells: Grid<NewHex>, name: string): any => {
  return cells.find(cell => cell.name === name)
}

export default hexNamed
