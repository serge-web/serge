import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Polyline } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

import { MapContext } from '../mapping'
import RouteData from './types/route-data'

import createTurnMarkers from './helpers/create-turn-markers'
import { routesFor } from './helpers/routes-for'

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

  // show button
  const [historyButton, setHistoryButton] = useState<boolean>(false)
  const [plannedButton, setPlannedButton] = useState<boolean>(false)

  // set the routeData
  // Note : the planned and history data are often created in the same way,
  // maybe some refactoring would be necessary in this case
  useEffect(() => {
    if (gridCells) {
      setHistoryRoutes(routesFor(gridCells, location, history, trimmed))
      setPlannedRoutes(routesFor(gridCells, location, planned, trimmed))
    }
  }, [gridCells, location, history, trimmed])

  // create the markers and define the last turn value for each routes
  useEffect(() => {
    if (!plannedRoutes) return
    setPlannedTurnMarkers(createTurnMarkers(plannedRoutes, 'planned', color, setPlannedButton, selected, plannedButton))
  }, [plannedRoutes, selected])

  useEffect(() => {
    if (!historyRoutes) return
    setHistoryTurnMarkers(createTurnMarkers(historyRoutes, 'history', color, setHistoryButton, selected, historyButton))
  }, [historyRoutes, selected])

  return <>
    <LayerGroup key={'hex_route_layer_' + name}>
      {historyRoutes &&
        <LayerGroup>
          {historyTurnMarkers}
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
          {plannedTurnMarkers}
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
