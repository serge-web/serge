import { MapAnnotations } from 'src/custom-types'
import { MessageCloneMarker } from 'src/custom-types/message'
import deepCopy from './deep-copy'
import uniqid from 'uniqid'

/** delete the indicated marker */
const handler = (message: MessageCloneMarker, infoMarkers: MapAnnotations): MapAnnotations => {
  const markersCopy = deepCopy(infoMarkers)

  // clone it, providing a new id
  const cloneMarker = { ...message.marker, uniqid: uniqid('a') }

  // we're sticking the clone at the end of the list, which should put it on the top
  markersCopy.push(cloneMarker)
  return markersCopy
}

export default handler
