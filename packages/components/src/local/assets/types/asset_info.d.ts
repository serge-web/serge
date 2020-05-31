import L from 'leaflet'

export default interface AssetInfo {
  position: L.LatLng
  name: string
  condition: string
  status: {
    speedKts: number
    state: string
  }
  type: string
  force: string
  visibleTo: Array<string>
  uniqid: string
  controlledBy: [string]
}
