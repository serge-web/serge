import L from 'leaflet'
import findPerceivedAsClassName from './findPerceivedAsClassName'

/** create a marker for the supplied set of details */
export default (asset, force, myForce, platformTypes, assetIsDraggable, userIsUmpire, /* string */ perceiveAs) => {
  // can we see this asset?
  var perceptionClassName = findPerceivedAsClassName(myForce, force, asset.platformType, asset.perceptions, userIsUmpire)

  // can we see it?
  if (perceptionClassName != null) {
    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: perceptionClassName
    })
    const res = L.marker(
      asset.loc, {
        draggable: assetIsDraggable, // TODO: move away from making the asset draggable in here
        icon: divIcon
      }
    )
    res.bindTooltip(asset.name)
    res.name = asset.name
    res.force = asset.force
    // res.stepRemaining = 0 // asset.allowance  // TODO: formally drop these fields
    res.allowance = 0 // asset.allowance
    res.history = 0 // asset.history
    res.plannedTurns = asset.plannedTurns

    // store the asset state
    res.state = asset.state

    // sort out the travel mode for this platform type
    const pType = platformTypes.find(type => type.name === asset.platformType)
    res.travelMode = pType.travelMode

    // is it mobile?
    res.mobile = !!pType.speedKts

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
