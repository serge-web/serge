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

  // last turn of the route
  const [historyLastTurn, setHistoryLastTurn] = useState<number>()
  const [plannedLastTurn, setPlannedLastTurn] = useState<number>()

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
    setPlannedTurnMarkers(createTurnMarkers(plannedRoutes, 'planned', color, showButton))
    setPlannedLastTurn(plannedRoutes.turnEnds.length)
  }, [plannedRoutes])

  useEffect(() => {
    if (!historyRoutes) return
    setHistoryTurnMarkers(createTurnMarkers(historyRoutes, 'history', color, showButton))
    setHistoryLastTurn(historyRoutes.turnEnds.length)
  }, [historyRoutes])

  // activate the button to remove the last turn
  const showButton = (type: string): void => {
    const button = document.getElementById(`button_turnEnd_${type}`)
    if (button) {
      // the button is shown while clicking on the turn markers,
      // Note : while the button should be able to be masked while clicking elsewhere, 
      // I could not do it while working inside of the component, maybe the context could be used for that
      const visible = button.style.display
      button.style.display = defineVisibility(visible)
    }
  }

  const defineVisibility = (visible: string): string => {
    if (visible === 'none') return 'block'
    else return 'none'
  }

  return <>
    <LayerGroup key={'hex_route_layer_' + name} >
      {historyRoutes &&
        <LayerGroup>
          <Button id={'button_turnEnd_history'} style={{ display: 'none' }}
          // Note: here we have available handlers to activate the removeLastTurn function
          // onClick={(): void => removeLastTurn(historyRoutes)}
          >
            {historyLastTurn ? `Remove leg ${getTurnNumber(historyLastTurn)} from route for ${name}` : null}
          </Button>
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
          <Button id={'button_turnEnd_planned'} style={{ display: 'none' }}
          // Note: here we have available handlers to activate the removeLastTurn function
          // onClick={(): void => removeLastTurn(plannedRoutes)}
          >
            {plannedLastTurn ? `Remove leg ${getTurnNumber(plannedLastTurn)} from route for ${name}` : null}
          </Button>
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
