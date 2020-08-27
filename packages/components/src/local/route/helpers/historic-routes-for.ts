import { LatLng } from 'leaflet'

/* Impot types */
import { RouteTurn, RouteTurnDuo, RouteTurnStatus, RouteStep as RouteStepType } from '@serge/custom-types'
import RouteData from '../types/route-data'

/** the number of legs to display if the user wants trimmed data */
export const lengthOfTrimmedLine = 2

/**
 *  generate the planned routes for this asset
 * @param {LatLng} startLocation location where the asset currently is
 * @param {any} turns series of planned steps for asset
 * @param {boolean} trimmed whether to only show trimmed portion of data
 * @returns {RouteData} composite object containing route lines & end of turn marker locations
 */
export const historicRoutesFor = (name: string, startLocation: LatLng | undefined, turns: RouteStepType[]): RouteData => {
  const polyline: LatLng[] = []
  const turnEnds: Array<RouteTurn> = []
  let lastLocation: RouteTurnDuo | undefined
  let lastButOneLocation: RouteTurnDuo | undefined
  let lastStatus: RouteTurnStatus | undefined
  // track the lenth of the previous turn. We use special processing
  // if it was only one step in length
  let lastTurnLength = 0
  let turnCtr = 0
  // TODO: next couple of lines are just to avoid compiler warning from parameter unused
  let scrapName = name
  scrapName = scrapName
  // start with current position
  if (startLocation) {
    if (turns) {
      turns.forEach((turn: RouteStepType) => {
        turnCtr++
        // first, does it contain a plain position, and is it within
        // the required length?
        if (turn.locations) {
          const thisTurnLength: number = turn.locations.length
          let stepsThisTurn = 0 // how many steps have been recorded for this route
          turn.locations.forEach((step: L.LatLng) => {
            const currentLocation: RouteTurnDuo = { pos: step, name: 'step_' + stepsThisTurn }
            const status: RouteTurnStatus = turn.status.speedKts
              ? {
                speedKts: turn.status.speedKts,
                state: turn.status.state
              } : { state: turn.status.state }

            // is this the first cell?
            const firstStepAfterSingleLegTurn = stepsThisTurn === 0 && lastTurnLength === 1
            if (stepsThisTurn === 1 || firstStepAfterSingleLegTurn) {
              // do we have a previous step?
              if (lastLocation && lastStatus) {
                // ok, we have enough for a turn
                const newTurn: RouteTurn = {
                  current: lastLocation,
                  previous: lastButOneLocation,
                  turn: turnCtr,
                  next: currentLocation,
                  status: lastStatus
                }
                turnEnds.push(newTurn)
              }
            }
            lastButOneLocation = lastLocation
            lastLocation = currentLocation
            lastStatus = status
            polyline.push(step)
            stepsThisTurn++
          })

          lastTurnLength = thisTurnLength
        }
      })
      // store the line end if it's history
      polyline.push(startLocation)
    }

  if (turnEnds.length == 0) {
      // there was only a single point in the history, so
      // we weren't able to loop around, then "look back" on the previous
      // step
      if (lastLocation && lastStatus) {
        const nextLocation: RouteTurnDuo = { pos: startLocation, name: 'step_0' }
        const lastTurn: RouteTurn = {
          current: lastLocation,
          next: nextLocation,
          turn: 1,
          status: lastStatus
        }
        turnEnds.push(lastTurn)
      }
    }
  }
  const res: RouteData = { polyline: polyline, turnEnds: turnEnds }
  return res
}
