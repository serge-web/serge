import { LatLng } from 'leaflet'

const calculatePolylineAngle = (polyline: LatLng[]): number => {
  const shape = polyline
  const firstpoint = shape[0]
  const lastpoint = shape[polyline.length - 1]
  const radian = Math.atan2((lastpoint.lng - firstpoint.lng), (lastpoint.lat - firstpoint.lat))
  let degrees = Math.round(radian * 180 / Math.PI)

  // remove negative values
  if (degrees < 0) degrees = 360 + degrees

  return degrees
}

export default calculatePolylineAngle
