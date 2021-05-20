import { LaydownPhases } from '@serge/config'
import { RouteStatus } from '@serge/custom-types'
import L from 'leaflet'

export default interface AssetInfo {
  position: L.LatLng
  name: string
  condition?: string
  status?: RouteStatus
  type: string
  force: string
  perceivedForceColor: string
  perceivedForceClass?: string
  selected: boolean
  visibleTo: Array<string>
  readonly uniqid: string
  controlledBy?: Array<string>
  laydownPhase?: LaydownPhases
}
