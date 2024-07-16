
import { Feature, Geometry, Position } from 'geojson'

/**
 * Helper method to get the coordinates of a GeoJSON object
 * @param gj the GeoHSON object
 * @returns the coordinates of the GeoJSON object
 */
const getCoordinatesDump = (gj: Geometry | Feature): Position[] => {
  let coords: Position[] = []
  if (gj.type == 'Point') {
    coords = [gj.coordinates]
  } else if (gj.type == 'LineString' || gj.type == 'MultiPoint') {
    coords = gj.coordinates
  } else if (gj.type == 'Polygon' || gj.type == 'MultiLineString') {
    coords = gj.coordinates.reduce(function (dump, part) {
      return dump.concat(part)
    }, [])
  } else if (gj.type == 'Feature') {
    coords = getCoordinatesDump(gj.geometry)
  } else {
    console.warn('Unknown geometry type: ' + gj.type)
  }
  return coords
}

/**
 * Helper method to find the outer bounds of a feature
 * @param gj the GeoJSON object
 * @returns the bounds of the GeoJSON object
 */
export const boundsOfFeatures = (gj: Geometry | Feature): [Position, Position] => {
  if (!Object.prototype.hasOwnProperty.call(gj, 'type')) return [[], []]
  const coords = getCoordinatesDump(gj)
  const bbox = [Number.POSITIVE_INFINITY, 
    Number.POSITIVE_INFINITY, 
    Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
  const finalCoords = coords.reduce(function (prev, coord) {
    return [
      Math.min(coord[0], prev[0]),
      Math.min(coord[1], prev[1]),
      Math.max(coord[0], prev[2]),
      Math.max(coord[1], prev[3])
    ]
  }, bbox)
  return [[finalCoords[0], finalCoords[1]], [finalCoords[2], finalCoords[3]]]
}
