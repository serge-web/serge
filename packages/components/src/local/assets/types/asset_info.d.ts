import { RouteStatus } from '@serge/custom-types'
import L from 'leaflet'

export default interface AssetInfo {
  position: L.LatLng
  name: string
  condition: string
  status?: RouteStatus
  type: string
  force: string
  perceivedForce: string
  selected: boolean
  visibleTo: Array<string>
  uniqid: string
  controlledBy?: Array<string>
}
