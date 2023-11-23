// import * as turf from '@turf/turf'
// import { lineString } from '@turf/turf'
// import { hexArea } from 'h3-js'
// import L, { latLngBounds, LatLngBounds } from 'leaflet'

// export const toTurf = (poly: L.LatLng[]): number[][] => {
//   return poly.map((val: L.LatLng): number[] => {
//     return [val.lng, val.lat]
//   })
// }

// export const hexCellsInArea = (h3Res: number, bounds: [[number, number], [number, number]]): number => {
//   const avgAreaM2 = hexArea(h3Res, 'm2')
//   const lPoly: LatLngBounds = latLngBounds(bounds[0], bounds[1])
//   const nPoly = [lPoly.getNorthEast(), lPoly.getSouthWest()]
//   const tPoly = toTurf(nPoly)
//   const bbounds = lineString(tPoly)
//   const bbox = turf.bbox(bbounds.geometry)
//   const bboxPoly = turf.bboxPolygon(bbox)
//   const areaM2 = turf.area(bboxPoly)
//   return Math.floor(areaM2 / avgAreaM2)
// }
