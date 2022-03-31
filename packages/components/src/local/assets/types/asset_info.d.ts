import { LaydownPhases } from '@serge/config'
import { AttributeValues, PlatformTypeData, RouteStatus } from '@serge/custom-types'
import L from 'leaflet'

export interface OrientationData {
  /** the angle for the orientation */
  orientation: number
  /** whether to apply different shading to this marker */
  shadeOrientation?: boolean
}

export default interface AssetInfo {
  position: L.LatLng
  name: string
  contactId: string
  condition?: string
  status?: RouteStatus
  type: string
  typeId: PlatformTypeData['uniqid']
  force: string
  perceivedForceColor: string
  perceivedForceClass?: string
  selected: boolean
  visibleTo: Array<string>
  readonly uniqid: string
  controlledBy?: Array<string>
  laydownPhase?: LaydownPhases
  attributes: AttributeValues
  /** details of orientations to show */
  orientationData: OrientationData[]
}
