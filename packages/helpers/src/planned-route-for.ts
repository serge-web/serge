import { SergeHex, SergeGrid } from '@serge/custom-types'

/**
 *  create series of hex cells between two points
 * @param {SergeGrid<SergeHex<unknown>> | undefined} grid grid of hex cells
 * @param {SergeHex<unknown>[] | undefined} allowableCells list of cells where platform could travel to
 * @param {SergeHex<unknown>} originHex start of this route
 * @param {SergeHex<unknown>} destinationHex end of this route
 * @returns {SergeHex<unknown>[] | undefined} List of allowable cells between origin and destination
 */
const plannedRouteFor = (grid: SergeGrid<SergeHex<unknown>> | undefined,
  allowableCells: SergeHex<unknown>[],
  originHex: SergeHex<unknown>,
  destinationHex: SergeHex<unknown>): SergeHex<unknown>[] => {
  if (grid) {
    if (originHex && destinationHex) {
      let route = grid.hexesBetween(originHex, destinationHex)
      // see if there are any undefined cells in route. This happens
      // if route between start/end goes beyond region for
      // which we have hex cells.
      // Note: I was using route.find() to check for undefined cells,
      // but when successful it return undefined, which equated to
      // false.  Instead we check if filter is a non-zero value
      // as a test
      if (route.filter(cell => cell === undefined)) {
        // route contains at least one undefined cell. Trim list
        // until we get to undefined
        let noNullsFound = true
        const res: SergeHex<unknown>[] = route.filter(cell => {
          if (noNullsFound) {
            noNullsFound = cell !== undefined
            return noNullsFound
          }
          return false
        })
        route = res
      }
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
