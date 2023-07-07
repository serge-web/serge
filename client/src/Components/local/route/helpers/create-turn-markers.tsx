import React, { Fragment } from 'react'
import { Marker, Popup } from 'react-leaflet'
import RouteData from '../types/route-data'
import { RouteMarker, RouteMarkerStatus } from 'src/custom-types'
import L from 'leaflet'
import { simpleIcon, svgIcon } from './create-marker'
import calculatePolylineAngle from './calculate-polyline-angle'
import { padInteger } from '@serge/helpers'
import Button from '@material-ui/core/Button'

/** provided formatted speed label, if
 * as speed is present
 */
const speedLabel = (status: RouteMarkerStatus): string => {
  return status.speedKts ? '@ ' + status.speedKts + 'kts' : ''
}

/** control how wide the text label is. If there is a speed
 * we allow a wider label
 */
const labelLength = (status: RouteMarkerStatus): number => {
  return status.speedKts ? 300 : 180
}

const calculateTurnAngle = (thisStep: RouteMarker): number => {
  let angle = 0
  if (!thisStep.previous && thisStep.next) {
    // first marker
    angle = calculatePolylineAngle([thisStep.current.pos, thisStep.next.pos])
  } else if (thisStep.previous && !thisStep.next) {
    // last marker
    angle = calculatePolylineAngle([thisStep.previous.pos, thisStep.current.pos])
  } else if (thisStep.previous && thisStep.next) {
    const previousAngle = calculatePolylineAngle([thisStep.previous.pos, thisStep.current.pos])
    const nextAngle = calculatePolylineAngle([thisStep.current.pos, thisStep.next.pos])
    // return the mean of both
    angle = (previousAngle + nextAngle) / 2
  } else {
    console.warn('inconsistent turn data in create-turn-markers, ' +
      'we`re missing prev and next locations')
    angle = 0
  }

  // add 90 to get the perpendicular angle
  return (angle + 90)
}

export const PLANNED_MARKER = 'planned-marker'
export const HISTORY_MARKER = 'history-marker'

const createTurnMarkers = (routes: RouteData,
  type: typeof PLANNED_MARKER | typeof HISTORY_MARKER,
  color: string,
  selected: boolean,
  removeLastTurn: { (turnNumber: number): void }): React.ReactElement[] => {
  return routes.turnEnds.map((step: RouteMarker, index: number) => {
    const markers = (color: string, routeTurn: RouteMarker): React.ReactElement => {
      // start from the current game turn, increment by 0-based offset
      const currentTurn: number = step.turn
      const turn: string = padInteger(currentTurn)
      // note: check for presence of routeTurn - there may be no planned steps
      if (routeTurn && selected === true) {
        // see if it's a marker for a mobile state
        if (routeTurn.previous || routeTurn.next) {
          const angle = calculateTurnAngle(routeTurn)
          return (
            <>
              <Marker key={`${type}_text_turns_${index}`} position={step.current.pos} width="2" icon={L.divIcon({
                html: `<text>T${turn}: ${step.status.state} ${speedLabel(step.status)}</text>`,
                iconSize: [labelLength(step.status), 20]
              })}>
              </Marker>
              <Marker key={`${type}_turns_${index}`} position={step.current.pos} width="2" icon={L.divIcon({
                html: svgIcon(color, angle || 0),
                iconSize: [20, 20]
              })}>
                {
                  type === PLANNED_MARKER &&
                  <Popup open={false} closeButton={false}>
                    <Button
                      // Note: here we have available handlers to activate the removeLastTurn function
                      onClick={(): void => removeLastTurn(currentTurn)}
                    >{`Clear route from Turn ${turn}`}</Button>
                  </Popup>
                }
              </Marker>
            </>
          )
        } else {
          // ok, just return dumb stationery turn marker
          return (
            <>
              <Marker key={`${type}_text_turns_${index}`} position={step.current.pos} width="2" icon={L.divIcon({
                html: `<text>T${turn}: ${step.status.state}</text>`,
                iconSize: [labelLength(step.status), 20]
              })} />
              <Marker key={`${type}_turns_${index}_unselected`} position={step.current.pos} icon={L.divIcon({
                html: simpleIcon(color),
                iconSize: [10, 10]
              })} />
            </>
          )
        }
      } else {
        return (
          <Marker key={`${type}_turns_${index}_unselected`} interactive={false} position={step.current.pos} icon={L.divIcon({
            html: simpleIcon(color),
            iconSize: [10, 10]
          })} />
        )
      }
    }

    return (
      <Fragment key={index}>
        {markers(color, routes.turnEnds[index])}
      </Fragment>
    )
  })
}

export default createTurnMarkers
