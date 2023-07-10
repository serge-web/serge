import { MapAnnotations, MapAnnotation } from 'src/custom-types'
import { MessageDeleteMarker } from 'src/custom-types/message'
import deepCopy from './deep-copy'

/** delete the indicated marker */
const handler = (message: MessageDeleteMarker, infoMarkers: MapAnnotations): MapAnnotations => {
  const markersCopy = deepCopy(infoMarkers)
  const markerId = message.marker
  return markersCopy.filter((item: MapAnnotation) => item.uniqid !== markerId)
}

export default handler
