import React from 'react'
import { withLeaflet } from 'react-leaflet'
import VectorGridDefault from 'react-leaflet-vectorgrid'

/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileSize }: PropTypes) => {
  const VectorGrid = withLeaflet(VectorGridDefault)
  const options = {
    type: 'slicer',
    idField: 'OBJECTID',
    tooltip: 'NAME',
    popup: (layer: any): any => `<div>${layer.properties.NAME}</div>`,
    style: {
      weight: 0.5,
      opacity: 1,
      color: '#ccc',
      fillColor: '#390870',
      fillOpacity: 0.6,
      fill: true,
      stroke: true
    },
    hoverStyle: {
      fillColor: '#390870',
      fillOpacity: 1
    },
    activeStyle: {
      fillColor: '#390870',
      fillOpacity: 1
    },
    zIndex: tileSize
  }

  return <VectorGrid {...options} />
}

export default HexGrid
