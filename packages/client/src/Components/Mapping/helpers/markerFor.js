import L from 'leaflet'
import findPerceivedAsClassName from './findPerceivedAsClassName'
import findPlatformTypeFor from './findPlatformTypeFor'

/** create a marker for the supplied set of details */
export default (asset, grid, force, myForce, platformTypes, userIsUmpire, /* string */ perceiveAs) => {
  // can we see this asset?
  var perceptionClassName = findPerceivedAsClassName(myForce, force, asset.platformType, asset.perceptions, userIsUmpire)

  // can we see it?
  if (perceptionClassName != null) {
    const location = grid.hexNamed(asset.position).centrePos

    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: perceptionClassName
    })
    const res = L.marker(
      location, {
        draggable: false, // the listener controls if something is draggable
        icon: divIcon
      }
    )
    res.bindTooltip(asset.name)
    res.name = asset.name
    res.force = asset.force

    // store the asset state
    res.state = asset.state

    // sort out the travel mode for this platform type
    const pType = findPlatformTypeFor(platformTypes, asset.platformType)
    res.travelMode = pType.travelMode

    // oh, come on - just take a copy of everything
    res.asset = asset
    // and put hte platform detail into the asset
    asset.platformTypeDetail = pType
    asset.platformSpeeds = pType.speedKts

    return res
  } else {
    return null
  }
}
