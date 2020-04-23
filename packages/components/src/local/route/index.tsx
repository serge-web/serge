import React, { ReactNode } from 'react'
import L from 'leaflet'
import { LayerGroup } from 'react-leaflet'
/* Import Stylesheet */


/* Import Types */
import PropTypes from './types/props'
import { MapContext } from '../mapping'

/* Render component */
export const Route: React.FC<PropTypes> = ({  location, history, planned, trimmed, color }: PropTypes) =>
  <MapContext.Consumer>
    { (context): ReactNode => {
      // collate list of named polygons
      const historyPoly: L.LatLng[] = []
      const plannedPoly: L.LatLng[] = []

      const gridCells = context.props.gridCells

      console.log(location, history, planned, trimmed, color, historyPoly, plannedPoly, gridCells, context)

      // loop through historic steps

      // loop through planned steps

      return <>
        <LayerGroup key={'hex_polygons'} >
        </LayerGroup>
      </>
    }}
  </MapContext.Consumer>

export default HexGrid
