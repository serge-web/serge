import L from 'leaflet'

import findPerceivedAsClassName from './findPerceivedAsClassName'
import removeClassNamesFrom from './removeClassNamesFrom'

/** update asset visibility */
export default function handleMarkerVisibility (/* string */ force, /* element */ marker, /* element  */ asset, /* boolean */ viewAsUmpire) {
  const perceptionClassName = findPerceivedAsClassName(force, asset.force, asset.platformType, asset.perceptions, viewAsUmpire)
  if (perceptionClassName) {
    // remove existing class names
    removeClassNamesFrom(marker, ['platform-force-', 'platform-type-'])

    // set the new class names
    L.DomUtil.addClass(marker._icon, perceptionClassName)

    // reveal it, just to be sure
    L.DomUtil.removeClass(marker._icon, 'marker-hidden')
  } else {
    // hide it
    L.DomUtil.addClass(marker._icon, 'marker-hidden')
  }
}
