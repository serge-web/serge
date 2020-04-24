import React, { ReactNode } from 'react'
import L from 'leaflet'
import { LayerGroup, Polyline } from 'react-leaflet'

import routesFor from './helpers/routes-for'

/* Import Stylesheet */


/* Import Types */
import PropTypes from './types/props'
import { MapContext } from '../mapping'

/* Render component */
export const Route: React.FC<PropTypes> = ({ name, location, history, planned, trimmed, color }: PropTypes) =>
  <MapContext.Consumer>
    { (context): ReactNode => {
      // collate list of named polygons
      const plannedPoly: L.LatLng[] = []

      const gridCells = context.props.gridCells


      // loop through historic steps
      const historyPoly: L.LatLng[]  = routesFor(gridCells, location, planned, trimmed)
      console.log(location, history, planned, trimmed, color, historyPoly, plannedPoly, gridCells, context)

      // loop through planned steps

      return <>
        <LayerGroup key={'hex_route_layer_' + name} >
          <Polyline
            // we may end up with other elements per hex,
            // such as labels so include prefix in key
            key = {'hex_poly_' + name}
            positions={historyPoly}
          />
        </LayerGroup>
      </>
    }}
  </MapContext.Consumer>

export default Route
