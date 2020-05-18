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
  const [historyTurnMarkers, setHistoryTurnMarkers] = useState<JSX.Element[]>([]);
  const [plannedTurnMarkers, setPlannedTurnMarkers] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (gridCells) {
      setHistoryRoutes(routesFor(gridCells, location, history, trimmed))
      setPlannedRoutes(routesFor(gridCells, location, planned, trimmed))
    }
  }, [gridCells, location, history, trimmed])

  useEffect(() => {
    if (plannedRoutes) {
      setPlannedTurnMarkers(createTurnMarkers(plannedRoutes, 'planned', color));
    }
    if (historyRoutes) {
      setHistoryTurnMarkers(createTurnMarkers(historyRoutes, 'history', color));
    }
  }, [historyRoutes, plannedRoutes])

  return <>
    <LayerGroup key={'hex_route_layer_' + name} >
      {historyRoutes &&
        <LayerGroup>
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
