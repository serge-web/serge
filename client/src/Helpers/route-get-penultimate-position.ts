import { RouteTurn } from '@serge/custom-types'

/** set the new selected route, clear others
 * @param {Array<RouteTurn>} planned planned route
 * @returns {string} last but one location
 */
const routeGetPenultimatePosition = (planned: Array<RouteTurn> | undefined): string | undefined => {
  if (!planned || planned.length === 0) {
    return undefined
  } else {
    let final: string | undefined
    let penultimate: string | undefined
    planned.forEach((step: RouteTurn) => {
      if (step.route && step.route.length > 0) {
        step.route.forEach((val: string) => {
          if (final === undefined) {
            final = val
          } else {
            penultimate = final
            final = val
          }
        })
      }
    })
    return penultimate
  }
}

export default routeGetPenultimatePosition
