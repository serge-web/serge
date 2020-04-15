import React from 'react'
import L from 'leaflet'
import { Polygon, LayerGroup, Rectangle } from 'react-leaflet'
import { defineGrid, extendHex } from 'honeycomb-grid'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileRadiusMins, widthCells, heightCells, origin, topLeft, bottomRight }: PropTypes) => {

  // Convert diameter in mins to radius in degs
  const tileSizeDegs = tileRadiusMins / 2 / 60

  // sort out the dimensions
  const widthDelta: number = bottomRight.lng - topLeft.lng
  
  const centreLat = bottomRight.lat + (topLeft.lat - bottomRight.lat) / 2
  const measureLeft = L.latLng(centreLat, topLeft.lng)
  const measureRight = L.latLng(centreLat, bottomRight.lng)
  const distanceM = measureLeft.distanceTo(measureRight)
  const distanceNm = distanceM / 1850
  const distanceDegs = distanceNm / 60
  const widthDegs = Math.ceil(distanceDegs / tileSizeDegs)

  console.log('calc', widthDelta, distanceM, distanceNm, distanceDegs, widthDegs )

  // we now have to determine the width in minutes

 // const widthDegs: number =  Math.cos(Math.PI * (Math.ceil(widthDelta / tileSizeDegs)) / 180.0)
  const heightDegs: number = Math.floor((topLeft.lat - bottomRight.lat) / (tileSizeDegs))

  console.log(origin, topLeft, bottomRight, heightCells, heightDegs)
  console.log(' width', tileRadiusMins, tileSizeDegs, widthCells, widthDelta, widthDegs)

  // define grid as flat
  const Hex = extendHex({ orientation: 'pointy' })
  const grid = defineGrid(Hex)

  // generate grid items
  const gridCells = grid.rectangle({ width: widthDegs, height: heightDegs })

  // define polygons array.
  const polygons: L.LatLng[][] = []

  // create a polygon for each hex, add it to the parent
  gridCells.forEach(hex => {
    // get center hex coords
    const centreHex = hex.toPoint()
    // move coords to our map
    const centreWorld = toWorld(centreHex, topLeft, tileSizeDegs)
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
    <LayerGroup>{polygons.map((pols, key) => (
      <Polygon
        key = {key}
        positions={pols}
        className={styles['default-hex']}
      />
    ))}      <Rectangle
    bounds={L.latLngBounds([topLeft, bottomRight])}
    className={styles['default-border']}
  />
</LayerGroup>
  </>
}

export default HexGrid
