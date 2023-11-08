import L from 'leaflet'
import React, { useContext, useEffect, useState } from 'react'
import { LayerGroup, Polyline } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

import { MapContext } from '../mapping'
import RouteData from './types/route-data'

import createTurnMarkers, { HISTORY_MARKER, PLANNED_MARKER } from './helpers/create-turn-markers'
import { historicRoutesFor } from './helpers/historic-routes-for'
import { plannedRoutesFor } from './helpers/planned-routes-for'
import { LaydownPhases } from 'src/config'

/* Render component */
export const Route: React.FC<PropTypes> = ({ name, route, trimmed, color, selected, clearRouteHandler }: PropTypes) => {
  const props = useContext(MapContext).props
  if (typeof props === 'undefined') return null
  const { turnNumber } = props
  const plainDots = [1, 7]
  const selectedDots = [3, 8]
  const oneStepDots = [3, 5]

  // allow the destination end point to be changed
  const [historyRoutes, setHistoryRoutes] = useState<RouteData | undefined>(undefined)
  const [plannedRoutes, setPlannedRoutes] = useState<RouteData | undefined>(undefined)
  const [oneStepPlannedRoutes, setOneStepPlannedRoutes] = useState<L.LatLng[]>([])
  const [historyTurnMarkers, setHistoryTurnMarkers] = useState<React.ReactElement[]>([])
  const [plannedTurnMarkers, setPlannedTurnMarkers] = useState<React.ReactElement[]>([])

  // set the routeData
  // Note : the planned and history data are often created in the same way,
  // maybe some refactoring would be necessary in this case
  useEffect(() => {
    if (route && route.currentLocation2) {
      // see if we're in laydown mode
      if (!route.laydownPhase || route.laydownPhase === LaydownPhases.NotInLaydown || route.laydownPhase === LaydownPhases.Immobile || route.selected) {
        // start with historic
        const historyRoute: RouteData = historicRoutesFor(route.currentLocation2, route.history)
        setHistoryRoutes(historyRoute)
        setHistoryTurnMarkers(createTurnMarkers(historyRoute, HISTORY_MARKER, color, selected, clearRouteHandler))

        // now planned
        const plannedRoute: RouteData = plannedRoutesFor(route.currentLocation2, route.plannedTrimmed)
        const turns = plannedRoute.turnEnds
        if (turns.length > 0) {
          // find the marker for the first planned turn. We want to render points
          // before this in a different way - to help with adjudication/planning
          const finishPoint = turns[0].current.pos
          const oneStep = plannedRoute.polyline.findIndex((value: L.LatLng) => value === finishPoint)
          // do we plot ahead more than one turn?
          if (oneStep > -1) {
            // ok, split into `one step` and `remaining` legs
            const oneStepPoints = plannedRoute.polyline.slice(0, oneStep + 1)
            const remainingPoints = plannedRoute.polyline.slice(oneStep)
            const shortRoute: RouteData = { polyline: remainingPoints, turnEnds: [] }
            setOneStepPlannedRoutes(oneStepPoints)
            setPlannedRoutes(shortRoute)
          } else {
            setPlannedRoutes(plannedRoute)
            setOneStepPlannedRoutes([])
          }
        } else {
          setPlannedRoutes(plannedRoute)
        }
        setPlannedTurnMarkers(createTurnMarkers(plannedRoute, PLANNED_MARKER, color, selected, clearRouteHandler))
      } else {
        setHistoryRoutes(undefined)
        setHistoryTurnMarkers([])
        setPlannedRoutes(undefined)
        setPlannedTurnMarkers([])
      }
    }
  }, [route, trimmed, selected, turnNumber])

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
      {oneStepPlannedRoutes &&
        <LayerGroup>
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key={'hex_one_step_planned_' + name}
            positions={oneStepPlannedRoutes}
            color={color}
            weight={selected ? 4 : 3}
            dashArray={oneStepDots}
          />
        </LayerGroup>
      }
    </LayerGroup>
  </>
}

export default Route
