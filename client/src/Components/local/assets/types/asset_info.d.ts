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
  typeId: PlatformTypeData['uniqid']
  /**
   * url of the icon to use, like `marker.svg`
   */
  iconUrl: PlatformTypeData['icon']
  force: string
  perceivedForceColor: string
  selected: boolean
  visibleTo: Array<string>
  readonly uniqid: string
  laydownPhase?: LaydownPhases
  attributes: AttributeValues
  /** details of orientations to show */
  orientationData: OrientationData[]
}
