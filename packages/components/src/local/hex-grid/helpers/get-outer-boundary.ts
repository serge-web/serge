import { SergeHex } from '@serge/custom-types'
import * as turf from '@turf/turf'
import L from 'leaflet'

/** produce a polygon that represents the outer boundary of a set of cells.
 * This is typically used to mark the limit of travel in a turn for an asset.
 */
const generateOuterBoundary = (cells: SergeHex<{}>[]): L.LatLng[] => {
  const points: turf.Feature<turf.Point>[] = []
  /** TODO: Ian has a suspicion the performance of this method is quite
   * slow over a very large area.  We should investigate
   * only adding a point if it isn't already present.
   */

  cells.forEach(hex => {
    if (hex.poly) {
      hex.poly.forEach(pt => {
        points.push(turf.point([pt.lng, pt.lat]))
      })
    }
  })
  const turfPoints = turf.featureCollection(points)
  const hull = turf.concave(turfPoints)
  if (hull) {
    const latLngs: L.LatLng[] = []
    hull.geometry.coordinates[0].forEach((pt: any) => {
      const pos = L.latLng(pt[1], pt[0])
      latLngs.push(pos)
    })
    return latLngs
  } else {
    return []
  }
}

export default generateOuterBoundary
