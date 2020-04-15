import React from 'react'
import L from 'leaflet'
import { Polygon, LayerGroup } from 'react-leaflet'
import { defineGrid } from 'honeycomb-grid'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'


/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileSizeMins, width, height, origin, topLeft, bottomRight }: PropTypes) => {

  // Convert the value to degrees
  const tileSizeDegs = tileSizeMins / 60



  // sort out the dimensions
  const widthDegs = bottomRight.lng - topLeft.lng

  console.log(origin, topLeft, bottomRight, tileSizeDegs, widthDegs, widthDegs / tileSizeDegs)

  // init grid
  const grid = defineGrid()
  // generate grid items
  const gridCells = grid.rectangle({ width, height })
  // define polygons array.
  const polygons: L.LatLng[][] = []

  // create a polygon for each hex, add it to the parent
  gridCells.forEach(hex => {
    // get center hex coords
    const centreHex = hex.toPoint()
    // move coords to our map
    const centreWorld = toWorld(centreHex, origin, tileSizeDegs)
    // build up an array of correctly mapped corners
    const cornerArr: L.LatLng[] = []
    // get hex center
    const centreH = hex.center()
    // get hex corners coords
    const corners = hex.corners()
    // convert hex corners coords to our map
    corners.forEach((value: any) => {
      // the corners are relative to the origin (TL). So, offset them to the centre
      const point = {
        x: value.x - centreH.x,
        y: value.y - centreH.y
      }
      const newP = toWorld(point, centreWorld, tileSizeDegs)
      cornerArr.push(newP)
    })
    // add the polygon to polygons array
    polygons.push(cornerArr)
  })

  return <>
    <LayerGroup>{polygons.map((pols) => (
      <Polygon
        positions={pols}
        className={styles['default-hex']}
      />
    ))}</LayerGroup>
  </>
}

export default HexGrid
