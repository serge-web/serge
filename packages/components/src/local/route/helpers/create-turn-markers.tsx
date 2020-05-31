import React, { Fragment } from 'react'
import { Marker, Popup } from 'react-leaflet'
import RouteData, { RouteStep } from '../types/route-data'
import L from 'leaflet'
import svgIcon, { simpleIcon } from './create-marker'
import calculatePolylineAngle from './calculate-polyline-angle'
import getTurnNumber from './get-turn-number'
import Button from '@material-ui/core/Button'

const createTurnMarkers = (routes: RouteData, type: string, color: string, showButton: Function, selected: boolean, open: boolean): JSX.Element[] => {
  return routes.steps.map((rte: RouteStep, index: number) => {
    let angle

    if (index > 0 && selected) {
      const segment = [routes.steps[index - 1].position, rte.position]
      angle = Math.abs(calculatePolylineAngle(segment)) + 90
    }

    const markers = (color: string, angle?: number) => {
      const turn = getTurnNumber(index + 1)
      if (selected === true) {
        return (
          <>
            <Marker key={`${type}_text_turns_${index}`} position={rte.position} width="2" icon={L.divIcon({
              html: `<text>T${turn}: ${rte.status.state} @ ${rte.status.speedKts}kts</text>`,
              iconSize: [300, 20]
            })}
            onClick={(): Function => showButton('block')}>
            </Marker>
            <Marker key={`${type}_turns_${index}`} position={rte.position} width="2" icon={L.divIcon({
              html: svgIcon(color, angle || 0),
              iconSize: [20, 20]
            })}
            onClick={(): Function => showButton('block')}>
              <Popup open={open} onClose={() => showButton(false)}>
                <Button
                // Note: here we have available handlers to activate the removeLastTurn function
                // onClick={(): void => removeLastTurn(historyRoutes)}
                >{`Remove leg T${turn} from route for ${name}`}</Button>
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
