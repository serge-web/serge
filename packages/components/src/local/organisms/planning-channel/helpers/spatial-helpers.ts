import { Geometry, LineString, Point, Polygon, Position } from 'geojson'
import L from 'leaflet'

/**
 *
 * @param geometry the planned activity geometry
 * @param existingBounds any existing bounds (possibly undefined)
 * @returns the outer bounds of the points in the geometry
 */
export const boundsForGeometry = (geometry: Geometry, existingBounds: L.LatLngBounds | undefined): L.LatLngBounds | undefined => {
  console.log(geometry)
  let workingBounds = existingBounds

  switch (geometry.type) {
    case 'LineString': {
      const ls = geometry as LineString
      const coords: L.LatLng[] = ls.coordinates.map((pos: Position) => L.latLng(pos[1], pos[0]))
      coords.forEach((pos: L.LatLng) => {
        if (!workingBounds) {
          workingBounds = L.latLngBounds(pos, pos)
        } else {
          workingBounds = workingBounds.extend(pos)
        }
      })
      break
    }
    case 'Polygon': {
      const poly = geometry as Polygon
      const coords: L.LatLng[] = poly.coordinates[0].map((pos: Position) => L.latLng(pos[1], pos[0]))
      coords.forEach((pos: L.LatLng) => {
        if (!workingBounds) {
          workingBounds = L.latLngBounds(pos, pos)
        } else {
          workingBounds = workingBounds.extend(pos)
        }
      })
      break
    }
    case 'Point': {
      const poly = geometry as Point
      const pos: L.LatLng = L.latLng(poly.coordinates[1], poly.coordinates[0])
      if (!workingBounds) {
        workingBounds = L.latLngBounds(pos, pos)
      } else {
        workingBounds = workingBounds.extend(pos)
      }
      break
    }
  }
  return workingBounds
}
