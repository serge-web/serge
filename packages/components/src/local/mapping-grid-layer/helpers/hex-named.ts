import { Grid, Hex } from 'honeycomb-grid'

/** retrive the cell at the supplied human-readable coords ("A01") */
const hexNamed = (cells: Grid, name: string): any => {
  return cells.find(cell => cell.name === name)
}

export default hexNamed
