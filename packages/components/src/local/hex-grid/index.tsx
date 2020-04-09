import React from 'react'
import L from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'

/* Import Types */
import PropTypes from './types/props'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ /*tileSize, width, height,*/ origin }: PropTypes) => {
  const divIcon = L.divIcon({
    iconSize: [40, 40],
  })
  const tooltip = "the tooltip"
  return <Marker position={origin} icon={divIcon} classNa>
      <Tooltip>{tooltip}</Tooltip>
  </Marker>
}

export default HexGrid
