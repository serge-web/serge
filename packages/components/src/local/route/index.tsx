import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Polyline } from 'react-leaflet'
import { Button } from '@material-ui/core'

/* Import Types */
import PropTypes from './types/props'
import { MapContext } from '../mapping'
import RouteData from './types/route-data'

import createTurnMarkers from './helpers/create-turn-markers'
import { routesFor } from './helpers/routes-for'
import getTurnNumber from './helpers/get-turn-number'

/* Render component */
export const Route: React.FC<PropTypes> = ({ name, location, history, planned, trimmed, color, selected }: PropTypes) => {
  const { gridCells } = useContext(MapContext).props

  const plainDots = [1, 7]
  const selectedDots = [4, 8]

  // allow the destination end point to be changed
  const [historyRoutes, setHistoryRoutes] = useState<RouteData | undefined>(undefined)
  const [plannedRoutes, setPlannedRoutes] = useState<RouteData | undefined>(undefined)
  const [historyTurnMarkers, setHistoryTurnMarkers] = useState<JSX.Element[]>([])
  const [plannedTurnMarkers, setPlannedTurnMarkers] = useState<JSX.Element[]>([])

  // last turn
  const [historyLastTurn, setHistoryLastTurn] = useState<number>()
  const [plannedLastTurn, setPlannedLastTurn] = useState<number>()

  useEffect(() => {
    if (gridCells) {
      setHistoryRoutes(routesFor(gridCells, location, history, trimmed))
      setPlannedRoutes(routesFor(gridCells, location, planned, trimmed))
    }
  }, [gridCells, location, history, trimmed])

  useEffect(() => {
    if (!plannedRoutes) return
    setPlannedTurnMarkers(createTurnMarkers(plannedRoutes, 'planned', color, showButton))
    setPlannedLastTurn(plannedRoutes.turnEnds.length)
  }, [plannedRoutes])

  useEffect(() => {
    if (!historyRoutes) return
    setHistoryTurnMarkers(createTurnMarkers(historyRoutes, 'history', color, showButton))
    setHistoryLastTurn(historyRoutes.turnEnds.length)
  }, [historyRoutes])

  const removeLastTurn = (routes: RouteData) => {
    routes!.steps.pop()
    routes!.turnEnds.pop()
    const steps = routes!.steps
    if (steps && steps.length !== 0) {
      const newLastStep = routes!.steps![routes!.steps.length - 1]
      const newLastStepPositionIndex = routes!.polyline!.findIndex(poly => poly === newLastStep.position)
      routes!.polyline.splice(newLastStepPositionIndex! + 1, routes!.polyline.length - 1)
      return routes
    } else return
  }

  const showButton = (type: string) => {
    const button = document.getElementById(`button_turnEnd_${type}`)
    button!.style.display = 'block'
  }

  return <>
    <LayerGroup key={'hex_route_layer_' + name} >
      {historyRoutes &&
        <LayerGroup>
          <Button id={'button_turnEnd_history'} style={{ display: 'none' }} onClick={() => setHistoryRoutes(removeLastTurn(historyRoutes))}>{`Clear from T${getTurnNumber(historyLastTurn!)}`}</Button>
          {selected ? historyTurnMarkers : null}
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key={'hex_history_' + name}
            positions={historyRoutes.polyline}
            color={color}
            weight={selected ? 3 : 2}
          />
        </LayerGroup>
      }
      {plannedRoutes &&
        <LayerGroup>
          <Button id={'button_turnEnd_planned'} style={{ display: 'none' }} onClick={() => setPlannedRoutes(removeLastTurn(plannedRoutes!))}>{`Clear from T${getTurnNumber(plannedLastTurn!)}`}</Button>
          {selected ? plannedTurnMarkers : null}
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key={'hex_planned_' + name}
            positions={plannedRoutes.polyline}
            color={color}
            weight={selected ? 3 : 2}
            dashArray={selected ? selectedDots : plainDots}
          />
        </LayerGroup>
      }
    </LayerGroup>
  </>
}

export default Route
