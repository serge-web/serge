import { RouteTurn } from 'src/custom-types'

/** set the new selected route, clear others
 * @param {string} currentLocation uniqid route to be selected (use '' empty string to clear selection)
 * @param {Array<RouteTurn>} planned wargame data object
 * @returns {string} latest location
 */
const routeGetLatestPosition = (currentLocation: string, planned: Array<RouteTurn> | undefined): string => {
  if (!planned || planned.length === 0) {
    return currentLocation
  } else {
    let lastLocation = ''
    planned.forEach((step: RouteTurn) => {
      if (step.route && step.route.length > 0) {
        lastLocation = step.route[step.route.length - 1]
      }
    })
    if (lastLocation !== '') {
      return lastLocation
    } else {
      return currentLocation
    }
  }
}

export default routeGetLatestPosition
