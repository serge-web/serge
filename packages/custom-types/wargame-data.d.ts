import { AttributeTypeData } from './attributes'
import Channel from './channel'
import Force from './force'
import { AnnotationMarkerData, MapAnnotationData } from './map-annotation'
import { ActivityTypeData } from './planning-activity'
import PlatformType from './platform-type'
import WargameOverview from './wargame-overview'

export default interface WargameData {
  overview: WargameOverview,
  forces: Force,
  channels: Channel,
  platformTypes?: PlatformType
  annotations?: MapAnnotationData
  annotationIcons?: AnnotationMarkerData
  attributeTypes?: AttributeTypeData
  activities?: ActivityTypeData
}
