import { SergeGrid3 } from 'src/custom-types'
import * as turf from '@turf/turf'
import L from 'leaflet'

/** produce a polygon that represents the outer boundary of a set of cells.
 * This is typically used to mark the limit of travel in a turn for an asset.
 *
 * Note: use of this method was superceded by the h3 h3SetToMultiPolygon
 * method, which typically took a 1/10th of the time.
 */
const generateOuterBoundary3 = (cells: SergeGrid3): L.LatLng[] => {
  const points: turf.Feature<turf.Point>[] = []
  /** TODO: Ian has a suspicion the performance of this method is quite
   * slow over a very large area.  We should investigate
   * only adding a point if it isn't already present.
   */

  cells.forEach(hex => {
    if (hex.poly) {
      hex.poly.forEach((pt: number[]) => {
        points.push(turf.point([pt[1], pt[0]]))
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

export default generateOuterBoundary3
