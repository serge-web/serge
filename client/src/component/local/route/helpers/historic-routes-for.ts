import L, { LatLng } from 'leaflet'

/* Impot types */
import { RouteMarker, RouteMarkerDuo, RouteMarkerStatus, RouteTurn as RouteTurnType } from '@serge/custom-types'
import RouteData from '../types/route-data'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/** convenience method to find the first known location in a series of steps */
const firstLocation = (turns: RouteTurnType[], currentLocation: LatLng): LatLng => {
  if (turns) {
    let firstLoc: LatLng | undefined
    turns.forEach((turn: RouteTurnType) => {
      if (turn.locations) {
        if (!firstLoc) {
          firstLoc = turn.locations[0]
        }
      }
    })
    if (firstLoc) return firstLoc
  }
  return currentLocation
}

/**
 *  generate the planned routes for this asset
 * @param {LatLng} currentLocation location where the asset currently is
 * @param {any} turns series of planned steps for asset
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const historicRoutesFor = (currentLocation: LatLng, turns: RouteTurnType[]): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: Array<RouteMarker> = []
  let lastLocation: RouteMarkerDuo = { pos: firstLocation(turns, currentLocation), name: 'step_0' }
  let lastButOneLocation: RouteMarkerDuo | undefined
  let lastStatus: RouteMarkerStatus | undefined
  // track the lenth of the previous turn. We use special processing
  // if it was only one step in length
  let lastTurnLength = 0
  let turnCtr = 0
  let pendingMobile = false
  // start with current position
  if (currentLocation) {
    if (turns) {
      turns.forEach((turn: RouteTurnType) => {
        turnCtr++
        // first, does it contain a plain position, and is it within
        // the required length?
        if (turn.locations) {
          const thisTurnLength: number = turn.locations.length
          let stepsThisTurn = 0 // how many steps have been recorded for this route
          turn.locations.forEach((step: L.LatLng) => {
            const currentLocation: RouteMarkerDuo = { pos: step, name: 'step_' + stepsThisTurn }
            const status: RouteMarkerStatus = turn.status.speedKts
              ? {
                speedKts: turn.status.speedKts,
                state: turn.status.state
              } : { state: turn.status.state }

            // is this the first cell?
            const firstStepAfterSingleLegTurn = stepsThisTurn === 0 && lastTurnLength === 1
            if (stepsThisTurn === 1 || firstStepAfterSingleLegTurn) {
              // do we have a previous step?
              if (lastLocation && lastStatus && pendingMobile) {
                // ok, we have enough for a turn
                const newTurn: RouteMarker = {
                  current: lastLocation,
                  previous: lastButOneLocation,
                  turn: turnCtr - 1,
                  next: currentLocation,
                  status: lastStatus
                }
                turnEnds.push(newTurn)
                pendingMobile = false
              }
            }
            lastButOneLocation = lastLocation
            lastLocation = currentLocation
            lastStatus = status
            polyline.push(step)
            stepsThisTurn++
          })
          pendingMobile = true
          lastTurnLength = thisTurnLength
        } else {
          if (lastLocation && lastStatus && pendingMobile) {
            // store the previous data
            const newTurn: RouteMarker = {
              current: lastLocation,
              previous: lastButOneLocation,
              turn: turnCtr - 1,
              next: undefined,
              status: lastStatus
            }
            turnEnds.push(newTurn)
          }
          pendingMobile = false
          // now create the static marker
          const currentLocation: RouteMarkerDuo = { pos: lastLocation.pos, name: 'step_' + turnCtr }
          const status: RouteMarkerStatus = turn.status.speedKts
            ? { speedKts: turn.status.speedKts, state: turn.status.state }
            : { state: turn.status.state }

          // ok, we have enough for a turn
          const newTurn: RouteMarker = {
            current: currentLocation,
            turn: turnCtr,
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
      // store the line end if it's history
      polyline.push(currentLocation)
    }

    if (lastLocation && lastStatus && pendingMobile) {
      const turn: number = turnEnds.length ? turnEnds[turnEnds.length - 1].turn + 1 : 1
      const nextLocation: RouteMarkerDuo = { pos: currentLocation, name: 'step_0' }
      const lastTurn: RouteMarker = {
        current: lastLocation,
        next: nextLocation,
        turn: turn,
        status: lastStatus
      }
      turnEnds.push(lastTurn)
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds }
  return res
}
