import React from 'react'
import L from 'leaflet'
import { Polygon, LayerGroup, Marker } from 'react-leaflet'
import { defineGrid, extendHex, Point } from 'honeycomb-grid'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'
import coordsGenerator from './helpers/coords-generator'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ tileDiameterMins, bounds }: PropTypes) => {
  // Convert diameter in mins to radius in degs
  const tileSizeDegs: number = tileDiameterMins / 60

  // offset the origin, by half a tile
  const correctedOrigin: L.LatLng = L.latLng(bounds.imageTop - tileSizeDegs / 2, bounds.imageLeft + tileSizeDegs / 2)

  // the width of a degree of longitude varies with latitude. Start by
  // finding the width of the box 1/2 way down it
  const centreLat: number = bounds.imageBottom + (bounds.imageTop - bounds.imageBottom) / 2
  const measureLeft: L.LatLng = L.latLng(centreLat, bounds.imageLeft)
  const measureRight: L.LatLng = L.latLng(centreLat, bounds.imageRight)
  const boxWidthM: number = measureLeft.distanceTo(measureRight)

  // now find the width of one tile
  const cellCentre: L.LatLng = L.latLng(centreLat, bounds.imageLeft + tileSizeDegs)
  const cellWidthM: number = measureLeft.distanceTo(cellCentre)

  // and calculate the number of cells that fit in the provided area
  const widthCells: number = Math.ceil(boxWidthM / cellWidthM) + 1

  // lines of latitude are largely equi-distant, so perform simple calculation
  const heightcells: number = Math.ceil((bounds.imageTop - bounds.imageBottom) / (tileSizeDegs))

  // since we have pointy arrangement, we need to provide more to get height, since they're
  // more densely packed in vertical direction (more overlap)
  const stretchedHeight: number = heightcells * 4 / 3

  // define grid as flat
  const Hex = extendHex({ orientation: 'pointy' })
  const grid = defineGrid(Hex)

  // generate grid items
  const gridCells = grid.rectangle({ width: widthCells, height: stretchedHeight })

  // generate grid coords EX: AB09

  const uiCoords: string[] = coordsGenerator(widthCells, Math.ceil(stretchedHeight))
  console.log(uiCoords, 'test');

  return <>
    <LayerGroup>
      {
        // create a polygon for each hex, add it to the parent
        gridCells.map((hex, key) => {
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
            cornerArr.push(newP)
          })
          // add the polygon to polygons array
          return (<Polygon
            key = {key}
            positions={cornerArr}
            className={styles['default-hex']}
          >
            <Marker
              position={centreWorld}
              width="120"
              icon={L.divIcon({
                html: uiCoords[key],
                className: styles['default-coords'],
                iconSize: [60, 20]
              })}
            />
          </Polygon>
        )
        })
      }
    </LayerGroup>
  </>
}

export default HexGrid
