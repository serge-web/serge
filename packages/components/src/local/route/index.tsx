import React, { ReactNode } from 'react'
import { LayerGroup, Polyline } from 'react-leaflet'

import { routesFor} from './helpers/routes-for'

/* Import Types */
import PropTypes from './types/props'
import { MapContext } from '../mapping'
import RouteData from './types/route-data'

/* Render component */
export const Route: React.FC<PropTypes> = ({ name, location, history, planned, trimmed, color, selected }: PropTypes) =>
  <MapContext.Consumer>
    { (context): ReactNode => {
      const gridCells = context.props.gridCells
      const plainDots = [1, 7] 
      const selectedDots = [4, 8]

      // loop through historic steps
      const historyRoutes: RouteData = routesFor(gridCells, location, history, trimmed)
      const plannedRoutes: RouteData = routesFor(gridCells, location, planned, trimmed)

      // TODO: introduce turn markers. The following code introduces markers,
      // but the "real" ones will be the images like '../images/turn120deg.png'
      // {historyRoutes.turnEnds.forEach((k:L.LatLng) => (
      //   <Marker
      //     key = {'history_turns_' + k}
      //     position={k}
      //     width="2"
      //     icon={L.divIcon({
      //       html: 'A',
      //       iconSize: [30, 20]
      //     })}
      //   />
      // ))}
           
      return <>
        <LayerGroup key={'hex_route_layer_' + name} >
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key = {'hex_history_' + name}
            positions={historyRoutes.polyline}
            color={color}
            weight={selected ? 3 : 2}
          />
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key = {'hex_planned_' + name}
            positions={plannedRoutes.polyline}
            color={color}
            weight={selected ? 3 : 2}
            dashArray={selected ? selectedDots : plainDots}
          />
        </LayerGroup>
      </>
    }}
  </MapContext.Consumer>

export default Route
