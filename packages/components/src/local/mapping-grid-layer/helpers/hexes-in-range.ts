import { Grid, Hex } from 'honeycomb-grid'

/** get the cells at the indicated distance from the origin */
const hexesInRange = (cells: Grid, startHex: Hex<number>, range: number): any => {
  return cells.hexesInRange(startHex, range, true)
}

export default hexesInRange
