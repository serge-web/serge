import React from 'react'
import L from 'leaflet'
import { Marker, Tooltip } from 'react-leaflet'
import { defineGrid, PointyCompassDirection } from 'honeycomb-grid'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'
// import padInteger from './helpers/pad-integer'

import defaultHexStyle from './data/default-hex-style'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileSize, width, height, origin }: PropTypes) => {

  const grid = defineGrid()
  const grid_cells = grid.rectangle({
    width: width,
    height: height,
    direction: PointyCompassDirection.E
  })

  const hexOne = grid_cells[0]
  const corners = hexOne.corners()
  const centreH = hexOne.center()

  const layer = new L.LayerGroup()

  // create a polygon for each hex, add it to the parent
  grid_cells.forEach(hex => {
    const centreHex = hex.toPoint()
    const centreWorld = toWorld(centreHex, origin, tileSize)
    // const name = String.fromCharCode(65 + hex.y) + padInteger(hex.x)

    // add the shape
    // build up an array of correctly mapped corners
    const cornerArr: L.LatLng[] = []

    // function to scale the corner to our map scale
    const scalePoint = (value: any) => {
      const centreP = centreWorld
      // the corners are relative to the origin (TL). So, offset them to the centre
      const point = {
        x: value.x - centreH.x,
        y: value.y - centreH.y
      }
      const newP = toWorld(centreP, point, tileSize)
      cornerArr.push(newP)
    }

    // apply the scaling function to each corner
    corners.forEach(scalePoint)

    // determine styling, based upon `organic` flag
    // now create the polygon
    const polygon = L.polygon(cornerArr, defaultHexStyle)

    // add the polygon to the layer
    layer.addLayer(polygon)

  })

  const divIcon = L.divIcon({
    iconSize: [40, 40]
  })
  const tooltip = 'the tooltip'
  return (<Marker position={origin} icon={divIcon} classNa>
    <Tooltip>{tooltip}</Tooltip>
  </Marker>)
}

export default HexGrid
