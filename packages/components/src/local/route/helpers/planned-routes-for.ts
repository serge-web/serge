import L, { LatLng } from 'leaflet'

/* Impot types */
import { RouteMarker, RouteMarkerDuo, RouteMarkerStatus, RouteTurn as RouteTurnType } from '@serge/custom-types'
import RouteData from '../types/route-data'

/**
 *  generate the planned routes for this asset
 * @param {LatLng} startLocation location where the asset currently is
 * @param {any} turns series of planned steps for asset
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const plannedRoutesFor = (startLocation: LatLng, turns: RouteTurnType[]): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: Array<RouteMarker> = []
  let lastLocation: RouteMarkerDuo = { pos: startLocation, name: 'step_0' }
  let lastButOneLocation: RouteMarkerDuo | undefined
  let lastStatus: RouteMarkerStatus | undefined
  let pendingMobile = false
  // start with current position
  if (startLocation) {
    if (turns) {
      // store the line start if it's planned routes
      polyline.push(startLocation)
      turns.forEach((turn: RouteTurnType) => {
        // first, does it contain a plain position, and is it within
        // the required length?
        if (turn.locations) {
          let stepsThisTurn = 0 // how many steps have been recorded for this route. We let
          // this mobile-specific variable "leak" out of the step handling, since we use
          // it as a flag to show there are pending steps from the previous turn
          turn.locations.forEach((step: L.LatLng) => {
            const currentLocation: RouteMarkerDuo = { pos: step, name: 'step_' + stepsThisTurn }
            const status: RouteMarkerStatus = turn.status.speedKts
              ? { speedKts: turn.status.speedKts, state: turn.status.state }
              : { state: turn.status.state }

            // is this the first cell?
            if (stepsThisTurn === 0) {
              // do we have a previous step?
              if (lastLocation && lastStatus && pendingMobile) {
                // ok, we have enough for a turn
                const newTurn: RouteMarker = {
                  current: lastLocation,
                  previous: lastButOneLocation,
                  turn: turn.turn - 1,
                  next: currentLocation,
                  status: lastStatus
                }
                turnEnds.push(newTurn)
                pendingMobile = false
              }
            }
            polyline.push(step)
            stepsThisTurn++
            pendingMobile = true

            // store the values
            lastButOneLocation = lastLocation
            lastLocation = currentLocation
            lastStatus = status
          })
        } else {
          if (lastLocation && lastStatus && pendingMobile) {
            // store the previous data
            const newTurn: RouteMarker = {
              current: lastLocation,
              previous: lastButOneLocation,
              turn: turn.turn - 1,
              next: undefined,
              status: lastStatus
            }
            turnEnds.push(newTurn)
            pendingMobile = false
          }
          // now create the static marker
          const currentLocation: RouteMarkerDuo = { pos: lastLocation.pos, name: 'step_' + turn.turn }
          const status: RouteMarkerStatus = turn.status.speedKts
            ? { speedKts: turn.status.speedKts, state: turn.status.state }
            : { state: turn.status.state }

          // ok, we have enough for a turn
          const newTurn: RouteMarker = {
            current: currentLocation,
            turn: turn.turn,
            status: status
          }
          turnEnds.push(newTurn)

          // store these values
          lastButOneLocation = lastLocation
          lastLocation = currentLocation

          // clear lastStatus, so mobile doesn't try to re-store this turn
          lastStatus = undefined
        }
      })
    }

    // see if we need to put in a trailing step
    if (lastLocation && lastStatus && pendingMobile) {
      const turn: number = turnEnds.length ? turnEnds[turnEnds.length - 1].turn + 1 : 1
      const lastTurn: RouteMarker = {
        current: lastLocation,
        previous: lastButOneLocation,
        turn: turn,
        status: lastStatus
      }
      turnEnds.push(lastTurn)
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds }
  return res
}
