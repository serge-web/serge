import AreaData from './area-data'
import { AttributeTypeData } from './attributes'
import Channel from './channel'
import Force from './force'
import ForceTemplateWrapper from './force-template-data'
import { AnnotationMarkerData } from './map-annotation'
import PlatformType from './platform-type'
import { TemplateData } from './template'
import WargameOverview from './wargame-overview'

export default interface WargameData {
  overview: WargameOverview
  forces: Force
  channels: Channel
  platformTypes?: PlatformType
  // annotations?: MapAnnotationData
  annotationIcons?: AnnotationMarkerData
  attributeTypes?: AttributeTypeData
  // activities?: ActivityTypeData
  templates?: TemplateData
  areas?: AreaData
  forceTemplateData?: ForceTemplateWrapper
}
