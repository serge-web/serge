import { MessageUpdateMarker, MapAnnotations, MapAnnotation } from '@serge/custom-types'
import deepCopy from './deep-copy'

/** create/remove perceptions for assets */

export default (message: MessageUpdateMarker, infoMarkers: MapAnnotations): MapAnnotations => {
  const markersCope = deepCopy(infoMarkers)
  const marker = message.marker
  const others = markersCope.filter((item: MapAnnotation) => item.uniqid !== marker.uniqid)
  others.push(marker)
  return others
}
