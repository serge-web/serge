import { brgBetweenTwoHex, cleanAngle } from '../../mapping/helpers/h3-helpers'
import { RouteTurn } from '@serge/custom-types'
import * as h3 from 'h3-js'

/** retrive the cell at the supplied human-readable coords ("A01")
 * @param {string} current - hex cell for current asset location (which may be end of planned route)
 * @param {string} realOrigin - hex cell for 'real' current location (required if only one step of planning)
 * @param {Array<RouteTurn>} history - past cells for this asset
 * @param {Array<RouteTurn>} planned - planned steps for this asset
 * @param {OrientationMarker} orientation - the marker orientation details
 * @returns {number | undefined} - either the orientation to use, or undefined if there is no orientation
*/
const lastStepOrientationFor = (current: string, realOrigin: string, history: Array<RouteTurn>, planned: Array<RouteTurn>): number | undefined => {
  const flattenLocations = (route: RouteTurn[]): string[] => {
    const steps: string[] = []
    route.forEach((pos: RouteTurn) => {
      if (pos.route) {
        steps.push(...pos.route)
      }
    })
    return steps
  }

  let dest
  let start
  if (planned && planned.length) {
    // direction to last step
    // put all routes into one list
    const steps = flattenLocations(planned)
    if (steps.length === 1) {
      // push the origin in at the start, in case there's just one planned step
      steps.unshift(realOrigin)
    }
    const sLen = steps.length
    if (sLen > 1) {
      start = steps[sLen - 2]
      dest = steps[sLen - 1]
    }
  } else if (history && history.length) {
    // direction from last history with location to current
    const steps = flattenLocations(history)
    const sLen = steps.length
    if (sLen >= 1) {
      start = steps[sLen - 1]
      dest = current
    }
  }
  if (dest && start) {
    // special case. If start & end are same, return undefined
    if (start !== dest) {
      // find the points
      const route = h3.h3Line(start, dest)
      const rLen = route.length
      if (rLen >= 2) {
        const angle = brgBetweenTwoHex(route[rLen - 2], dest)
        return cleanAngle(angle)
      }
    }
  }
  return undefined
}

export default lastStepOrientationFor
