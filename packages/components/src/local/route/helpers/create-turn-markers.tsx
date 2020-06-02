import React, { Fragment } from 'react'
import { Marker, Popup } from 'react-leaflet'
import RouteData, { RouteStep } from '../types/route-data'
import L, { LatLng } from 'leaflet'
import { simpleIcon, svgIcon } from './create-marker'
import calculatePolylineAngle from './calculate-polyline-angle'
import getTurnNumber from './get-turn-number'
import Button from '@material-ui/core/Button'

const createTurnMarkers = (routes: RouteData, type: string, color: string, selected: boolean): JSX.Element[] => {
  return routes.steps.map((rte: RouteStep, index: number) => {
    let angle

    if (selected) {
      angle = calculateTurnAngle(routes, index, rte)
    }

    const markers = (color: string, angle?: number): JSX.Element => {
      const turn = getTurnNumber(index)
      if (selected === true) {
        return (
          <>
            <Marker key={`${type}_text_turns_${index}`} position={rte.position} width="2" icon={L.divIcon({
              html: `<text>T${turn}: ${rte.status.state} @ ${rte.status.speedKts}kts</text>`,
              iconSize: [300, 20]
            })}>
            </Marker>
            <Marker key={`${type}_turns_${index}`} position={rte.position} width="2" icon={L.divIcon({
              html: svgIcon(color, angle || 0),
              iconSize: [20, 20]
            })}>
              <Popup open={false}>
                <Button
                // Note: here we have available handlers to activate the removeLastTurn function
                // onClick={(): void => removeLastTurn(historyRoutes)}
                >{`Clear route from Turn ${turn}`}</Button>
              </Popup>
            </Marker>
          </>
        )
      } else {
        return (
          <Marker key={`${type}_turns_${index}_unselected`} position={rte.position} icon={L.divIcon({
            html: simpleIcon(color),
            iconSize: [10, 10]
          })} />
        )
      }
    }

    return (
      <Fragment key={index}>
        {markers(color, angle)}
      </Fragment>
    )
  })
}

export default createTurnMarkers

function calculateTurnAngle (routes: RouteData, stepIndex: number, step: RouteStep) {
  let angle = 0; let previousAngle = 0; let nextAngle = 0

  // avoid duplication of point in polyline
  const polyline = [...new Set(routes.polyline)]

  // extract current position in polyline
  const currentStepIndexInPolyline: number = polyline.findIndex(point => point === step.position)

  // extract previous polyline for the refered step
  const previousPolyline: LatLng[] = [polyline[currentStepIndexInPolyline - 1], polyline[currentStepIndexInPolyline]]

  // extract the next polyline
  const nextPolyline: LatLng[] = [polyline[currentStepIndexInPolyline], polyline[currentStepIndexInPolyline + 1]]

  if (stepIndex === routes.steps.length - 1) {
    // calculate the previous leg angle
    angle = calculatePolylineAngle(previousPolyline)
  } else {
    // calculate the previous leg angle
    previousAngle = calculatePolylineAngle(previousPolyline)

    // calculate the next leg angle
    nextAngle = calculatePolylineAngle(nextPolyline)

    // return the mean of both
    angle = (previousAngle + nextAngle) / 2
  }

  // add 90 to get the perpendicular angle
  const perp: number = (angle + 90)

  return perp
}
