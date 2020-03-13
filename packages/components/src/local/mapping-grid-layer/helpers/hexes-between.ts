import { Grid, Hex } from 'honeycomb-grid'

/** get the cells on the path between these points */
const hexesBetween = (cells: Grid, startHex: Hex<number>, endHex: Hex<number>): any => {
  return cells.hexesBetween(startHex, endHex)
}

export default hexesBetween
