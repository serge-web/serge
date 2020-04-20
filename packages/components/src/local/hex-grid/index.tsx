import React from 'react'
import L from 'leaflet'
import { PointLike } from 'honeycomb-grid'
import { Polygon, LayerGroup } from 'react-leaflet'
/* Import Stylesheet */
import styles from './styles.module.scss'

/* Import Types */
import PropTypes from './types/props'
import toWorld from './helpers/to-world'

/* Render component */
export const HexGrid: React.FC<PropTypes> = ({ gridCells }: PropTypes) => {
  // define polygons array.
  const polygons: { [id: string]: L.LatLng[] } = {}

  // create a polygon for each hex, add it to the parent
  gridCells.forEach(hex => {
    // move coords to our map
    const centreWorld: L.LatLng = hex.centreLatLng
    // build up an array of correctly mapped corners
    const cornerArr: L.LatLng[] = []
    // get hex center
    const centreH = hex.center()
    // get hex corners coords
    const corners = hex.corners()
    // convert hex corners coords to our map
    corners.forEach((value: any) => {
      // the corners are relative to the origin (TL). So, offset them to the centre
      const point: PointLike = {
        x: value.x - centreH.x,
        y: value.y - centreH.y
      }
      const newP = toWorld(point, centreWorld, gridCells.tileDiameterDegs / 2)
      cornerArr.push(newP)
    })
    // add the polygon to polygons array, indexed by the cell name
    polygons[hex.name] = cornerArr
  })

  return <>
    <LayerGroup>{Object.keys(polygons).map(k => (
      <Polygon
        // we may end up with other elements per hex,
        // such as labels so include prefix in key
        key = {'hex_poly_' + k}
        positions={polygons[k]}
        className={styles['default-hex']}
      />
    ))}
    </LayerGroup>
  </>
}

export default HexGrid
