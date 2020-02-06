import L from 'leaflet'
import findPerceivedAsClassName from './findPerceivedAsClassName'
import findPlatformTypeFor from './findPlatformTypeFor'
import findAssetNameFor from './findAssetNameFor'

/** create a marker for the supplied set of details */
export default (asset, grid, force, myForce, platformTypes, userIsUmpire, /* string */ perceiveAs) => {
  // can we see this asset?
  var perceptionClassName = findPerceivedAsClassName(myForce, force, asset.platformType, asset.perceptions, userIsUmpire)

  // can we see it?
  if (perceptionClassName != null) {

    if (asset.destroyed) {
      perceptionClassName += ' platform-destroyed'
    }

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

    // sort out the travel mode for this platform type
    const pType = findPlatformTypeFor(platformTypes, asset.platformType)
    res.travelMode = pType.travelMode

    // NOTE: it's actually more useable to include the asset name in the hover tip - always show both
    // // for a non-standard condition, we display a longer title
    // if (pType.conditions && pType.conditions.length > 0) {
    //   if (pType.conditions[0] !== asset.condition) {
    //     asset.nonStandardCondition = true
    //   }
    // }
    // const hoverTxt = asset.nonStandardCondition ? asset.name + ' - ' + asset.condition : asset.condition

    // show the full name & state if we're white or the owner of this force
    const hoverTxt = findAssetNameFor(asset.name, asset.condition, force, myForce, asset.perceptions[myForce], asset.contactId)

    res.bindTooltip(hoverTxt)
    res.name = asset.name
    res.force = asset.force
    res.hex = asset.position // store the hex coords for use in de-cluttering

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
