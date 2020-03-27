import { UMPIRE_FORCE } from '../../../consts'
import handleMarker from './handleMarker'
import findPerceivedAsClassName from './findPerceivedAsClassName'

export default function viewMapAs (/* string */ force, /* layer */ allMarkers,
  /* routes[] */ allRoutes, /* map */ map) {
  const viewAsUmpire = force === UMPIRE_FORCE
  // loop through markers, updating their styling
  allMarkers.eachLayer(marker => {
    // can we see this asset?
    const asset = marker.asset
    handleMarker(force, marker, asset, viewAsUmpire)
  })

  // also do this for the future location markers
  allRoutes.forEach(route => {
    const marker = route.planningMarker
    if (marker) {
      const asset = marker.asset
      handleMarker(force, marker, asset, viewAsUmpire)
    }
  })

  // also do this for the planning routes
  allRoutes.forEach(route => {
    const asset = route.asset
    const perceptionClassName = findPerceivedAsClassName(force, asset.force, asset.platformType, asset.perceptions, viewAsUmpire)
    if (perceptionClassName) {
      route.lightRoutes.addTo(map)
    } else {
      route.lightRoutes.remove()
    }
  })
}
