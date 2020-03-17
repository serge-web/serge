import { LatLng } from 'leaflet'
import cellIndexToRelativeDegrees from './cell-index-to-relative-degrees'

/** convert this point in cell coordinates to lat/long */
const cellIndexToDegrees = (origin: LatLng, point: any, delta: any): any => {
  return cellIndexToRelativeDegrees(origin, point, delta)
}

export default cellIndexToDegrees
