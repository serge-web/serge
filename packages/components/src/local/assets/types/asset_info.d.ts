import L from 'leaflet'

export default interface AssetInfo {
  position: L.LatLng
  name: string
  force: string
  type: string
  uniqid: string
}