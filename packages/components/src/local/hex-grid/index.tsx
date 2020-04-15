import React from 'react'
import L from 'leaflet'
import { Polygon, LayerGroup, Rectangle } from 'react-leaflet'
import { defineGrid, extendHex, Point } from 'honeycomb-grid'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileRadiusMins, topLeft, bottomRight }: PropTypes) => {

  // Convert diameter in mins to radius in degs
  const tileSizeDegs: number = tileRadiusMins / 60

  // offset the origin, by half a tile
  const correctedOrigin: L.LatLng = L.latLng(topLeft.lat - tileSizeDegs / 2, topLeft.lng + tileSizeDegs / 2)

  // the width of a degree of longitude varies with latitude. Start by
  // finding the width of the box 1/2 way down it
  const centreLat: number = bottomRight.lat + (topLeft.lat - bottomRight.lat) / 2
  const measureLeft: L.LatLng = L.latLng(centreLat, topLeft.lng)
  const measureRight: L.LatLng = L.latLng(centreLat, bottomRight.lng)
  const boxWidthM: number = measureLeft.distanceTo(measureRight)

  // now find the width of one tile
  const cellCentre: L.LatLng = L.latLng(centreLat, topLeft.lng + tileSizeDegs)
  const cellWidthM: number = measureLeft.distanceTo(cellCentre)

  // and calculate the number of cells that fit in the provided area
  const widthCells: number = Math.ceil(boxWidthM / cellWidthM) + 1

  // lines of latitude are largely equi-distant, so perform simple calculation
  const heightcells: number = Math.ceil((topLeft.lat - bottomRight.lat) / (tileSizeDegs))

  // since we have pointy arrangement, we need to provide more to get height, since they're
  // more densely packed in vertical direction (more overlap)
  const stretchedHeight: number = heightcells * 4 / 3

  // define grid as flat
  const Hex = extendHex({ orientation: 'pointy' })
  const grid = defineGrid(Hex)

  // generate grid items
  const gridCells = grid.rectangle({ width: widthCells, height: stretchedHeight })

  // define polygons array.
  const polygons: L.LatLng[][] = []

  // create a polygon for each hex, add it to the parent
  gridCells.forEach(hex => {
    // get center hex coords
    const centreHex: Point = hex.toPoint()
    // move coords to our map
    const centreWorld: L.LatLng = toWorld(centreHex, correctedOrigin, tileSizeDegs / 2)
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
      const newP = toWorld(point, centreWorld, tileSizeDegs / 2)
      // if(polygons.length < 1 && cornerArr.length <= 20) {
      //   console.log('cell coords:' + polygons.length, point, centreWorld, tileSizeDegs, newP)
      // }
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
