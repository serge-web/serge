import L from 'leaflet'

export const latLng2Num = (pos: L.LatLng): number[] => {
  return [pos.lat, pos.lng]
}

export const h3polyFromBounds = (bounds: L.LatLngBounds): number[][] => {
  return [
    latLng2Num(bounds.getNorthWest()),
    latLng2Num(bounds.getNorthEast()),
    latLng2Num(bounds.getSouthEast()),
    latLng2Num(bounds.getSouthWest()),
    latLng2Num(bounds.getNorthWest())
  ]
}
