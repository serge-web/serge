import { SergeHex, SergeGrid } from '@serge/custom-types'

/**
 *  create series of hex cells between two points
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid grid of hex cells
 * @param {SergeHex<{}>[] | undefined} allowableCells list of cells where platform could travel to
 * @param {SergeHex<{}>} originHex start of this route
 * @param {SergeHex<{}>} destinationHex end of this route
 * @returns {SergeHex<{}>[] | undefined} List of allowable cells between origin and destination
 */
const plannedRouteFor = (grid: SergeGrid<SergeHex<{}>> | undefined,
  allowableCells: SergeHex<{}>[],
  originHex: SergeHex<{}>,
  destinationHex: SergeHex<{}>): SergeHex<{}>[] => {
  if (grid) {
    if (originHex && destinationHex) {
      const route = grid.hexesBetween(originHex, destinationHex)
      if (allowableCells.length) {
        // sort out overlap with allowable cells
        return route.filter(cell => allowableCells.includes(cell))
      } else {
        return route
      }
    } else {
      return []
    }
  } else {
    return []
  }
}

export default plannedRouteFor
