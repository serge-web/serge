import React from 'react'
import L from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import { defineGrid, PointyCompassDirection } from 'honeycomb-grid'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/toWorld'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileSize, width, height, origin }: PropTypes) => {

  const grid = defineGrid()
  const grid_cells = grid.rectangle({
    width: width,
    height: height,
    direction: PointyCompassDirection.E
  })

  // create a polygon for each hex, add it to the parent
  grid_cells.forEach(hex => {
    const centreHex = hex.toPoint()
    const centreWorld = toWorld(centreHex, origin, tileSize)
  })

  const divIcon = L.divIcon({
    iconSize: [40, 40]
  })
  const tooltip = 'the tooltip'
  return <Marker position={origin} icon={divIcon} classNa>
    <Tooltip>{tooltip}</Tooltip>
  </Marker>
}

export default HexGrid
