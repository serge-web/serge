import { brgBetweenTwoHex } from '../../mapping/helpers/h3-helpers'
import { RouteTurn } from '@serge/custom-types'
import * as h3 from 'h3-js'

/** retrive the cell at the supplied human-readable coords ("A01")
 * @param {string} current - hex cell for current asset location
 * @param {Array<RouteTurn>} history - past cells for this asset
 * @param {Array<RouteTurn>} planned - planned steps for this asset
 * @param {OrientationMarker} orientation - the marker orientation details
 * @returns {number | undefined} - either the orientation to use, or undefined if there is no orientation
*/
const lastStepOrientationFor = (current: string, history: Array<RouteTurn>, planned: Array<RouteTurn>): number | undefined => {
  const cleanAngle = (angle: number): number => {
    let res = angle
    while (res < 0) {
      res += 360
    }
    while (res > 360) {
      res -= 360
    }
    return res
  }

  let dest
  let start
  if (planned && planned.length) {
    // direction to first step
    const turn = planned[0]
    if (turn.route && turn.route.length) {
      dest = turn.route[0]
      start = current
    }
  } else if (history && history.length) {
    // direction from last history step
    const turn = history[history.length - 1]
    if (turn && turn.route && turn.route.length) {
      const rLen = turn.route.length
      start = turn.route[rLen - 1]
      dest = current
    }
  }
  if (dest && start) {
    // special case. If start & end are same, return undefined
    if (start !== dest) {
      // find the points
      const route = h3.h3Line(start, dest)
      const rLen = route.length
      if(rLen > 2) {
        const angle = brgBetweenTwoHex(route[rLen-2], dest)
        return cleanAngle(angle)
      }
    }
  }
  return undefined
}

export default lastStepOrientationFor
