import { MessageUpdateMarker, MapAnnotations, MapAnnotation } from '@serge/custom-types'
import deepCopy from './deep-copy'

/** create/remove perceptions for assets */

const handler = (message: MessageUpdateMarker, infoMarkers: MapAnnotations): MapAnnotations => {
  const markersCope = deepCopy(infoMarkers)
  const marker = message.marker
  let found = false
  const update = markersCope.map((item: MapAnnotation) => {
    const match = item.uniqid === marker.uniqid
    if (match) {
      // remember that we've found the item
      found = true
      // return the modified version
      return marker
    } else {
      return item
    }
  })
  if (!found) {
    // this wasn't an existing item, append it
    update.push(marker)
  }
  return update
}

export default handler
