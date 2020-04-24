import React, { ReactNode } from 'react'
import L from 'leaflet'
import { LayerGroup, Polyline } from 'react-leaflet'

import routesFor from './helpers/routes-for'
import {RouteData} from './helpers/routes-for'

/* Import Stylesheet */


/* Import Types */
import PropTypes from './types/props'
import { MapContext } from '../mapping'

/* Render component */
export const Route: React.FC<PropTypes> = ({ name, location, history, planned, trimmed, color, selected }: PropTypes) =>
  <MapContext.Consumer>
    { (context): ReactNode => {
      // collate list of named polygons
      const plannedPoly: L.LatLng[] = []

      const gridCells = context.props.gridCells


      // loop through historic steps
      const historyRoutes: RouteData = routesFor(gridCells, location, planned, trimmed)
      console.log(location, history, planned, trimmed, color, historyRoutes, plannedPoly, gridCells, context)

      console.log('ends',historyRoutes.turnEnds)


      // {Object.keys(historyRoutes.turnEnds).forEach((k:L.LatLng) => (
      //   <Marker
      //     key = {'hex_label_'}
      //     position={k}
      //     width="120"
      //     icon={L.divIcon({
      //       html: k,
      //       className: styles['default-coords'],
      //       iconSize: [30, 20]
      //     })}
      //   />
      // ))}

      return <>
        <LayerGroup key={'hex_route_layer_' + name} >
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key = {'hex_poly_' + name}
            positions={historyRoutes.polyline}
            color={color}
            weight={selected ? 4 : 2}
          />
        </LayerGroup>
      </>
    }}
  </MapContext.Consumer>

export default Route
