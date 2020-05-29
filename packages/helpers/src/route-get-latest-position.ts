import { RouteStep } from '@serge/custom-types'

/** set the new selected route, clear others
 * @param {string} currentLocation uniqid route to be selected (use '' empty string to clear selection)
 * @param {Array<RouteStep>} planned wargame data object
 * @returns {string} latest location
 */
const routeGetLatestPosition = (currentLocation: string, planned: Array<RouteStep> | undefined): string => {
  if(!planned || planned.length === 0) {
    return currentLocation
  } else {
    let lastLocation:string = ''
    planned.forEach((step: RouteStep) => {
      if(step.coords && step.coords.length > 0) {
        lastLocation = step.coords[step.coords.length-1]
      }
    })
    if(lastLocation !== '') {
      return lastLocation
    } else {
      return currentLocation
    }
  }
}

export default routeGetLatestPosition
