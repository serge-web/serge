import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Polyline } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

import { MapContext } from '../mapping'
import RouteData from './types/route-data'

import createTurnMarkers from './helpers/create-turn-markers'
import { historicRoutesFor } from './helpers/historic-routes-for'
import { plannedRoutesFor } from './helpers/planned-routes-for'

/* Render component */
export const Route: React.FC<PropTypes> = ({ name, route, trimmed, color, selected, clearRouteHandler }: PropTypes) => {
  const { gridCells, turnNumber } = useContext(MapContext).props

  const plainDots = [1, 7]
  const selectedDots = [4, 8]

  // allow the destination end point to be changed
  const [historyRoutes, setHistoryRoutes] = useState<RouteData | undefined>(undefined)
  const [plannedRoutes, setPlannedRoutes] = useState<RouteData | undefined>(undefined)
  const [historyTurnMarkers, setHistoryTurnMarkers] = useState<JSX.Element[]>([])
  const [plannedTurnMarkers, setPlannedTurnMarkers] = useState<JSX.Element[]>([])

  // set the routeData
  // Note : the planned and history data are often created in the same way,
  // maybe some refactoring would be necessary in this case
  useEffect(() => {
    if (gridCells && route && route.currentLocation) {
      // start with historic
      const historyRoute: RouteData = historicRoutesFor(route.currentLocation, route.history)
      setHistoryRoutes(historyRoute)
      const historyMarkers: JSX.Element[] = createTurnMarkers(historyRoute, 'history', color, selected, clearRouteHandler)
      setHistoryTurnMarkers(historyMarkers)

      // and now planned routes
      const plannedRoute: RouteData = plannedRoutesFor(route.currentLocation, route.plannedTrimmed)
      setPlannedRoutes(plannedRoute)
      const plannedMarkers: JSX.Element[] = createTurnMarkers(plannedRoute, 'planned', color, selected, clearRouteHandler)
      setPlannedTurnMarkers(plannedMarkers)
    }
  }, [gridCells, route, trimmed, selected, turnNumber])

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
