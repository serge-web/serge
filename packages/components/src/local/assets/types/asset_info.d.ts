import L from 'leaflet'

export default interface AssetInfo {
  position: L.LatLng
  name: string
  condition: string
  status: {
    speedKts: number
    state: string
  }
  force: string
  type: string
  uniqid: string
  controlledBy: [string]
}
