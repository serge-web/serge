import L from 'leaflet'

/** create a marker for the supplied set of details */
export default (asset, force, myForce, platformTypes, assetIsDraggable, userIsUmpire) => {
  /** utility function to determine how we perceive another platform.
   * if it's our force, we know it's one of ours. But if it isn't our force
   * we need to see how it is perceived by our force
   */
  function findPerceivedForce (myForce, hisForce, hisType, hisPerceptions) {
    var perception
    if (myForce === hisForce || userIsUmpire) {
      perception = { force: hisForce, type: hisType }
    } else {
      const hisPerception = hisPerceptions[myForce]
      if (hisPerception != null) {
        perception = { force: hisPerception.force, type: hisPerception.type }
      } else {
        perception = null
      }
    }
    return perception
  }

  // can we see this asset?
  var perception = findPerceivedForce(myForce, force, asset.platformType, asset.perceptions)

  // can we see it?
  if (perception != null) {
    const forceClass = perception.force ? perception.force.toLowerCase() : 'unknown'
    const typeClass = perception.type ? perception.type.replace(/ /g, '-').toLowerCase() : 'unknown'
    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
    })
    const res = L.marker(
      asset.loc, {
        draggable: assetIsDraggable,
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
