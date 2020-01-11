import L from 'leaflet'

/** create a marker for the supplied set of details */
export default (asset, force, myForce, platformTypes) => {

  /** utility function to determine how we perceive another platform.
   * if it's our force, we know it's one of ours. But if it isn't our force
   * we need to see how it is perceived by our force
   */
  function findPerceivedForce (myForce, hisForce, hisType, hisPerceptions) {
    var perception
    if (myForce === hisForce) {
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
    const forceClass = perception.force.toLowerCase()
    const typeClass = perception.type.replace(/ /g, '-').toLowerCase()
    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: `platform-counter platform-force-${forceClass} platform-type-${typeClass}`
    })
    const res = L.marker(
      asset.loc, {
        draggable: asset.draggable,
        icon: divIcon
      }
    )
    res.bindTooltip(asset.name)
    res.force = asset.force
    res.stepRemaining = asset.allowance
    res.allowance = asset.allowance
    res.history = asset.history
    res.plannedTurns = asset.plannedTurns

    // sort out the travel mode for this platform type
    const pType = platformTypes.find(type => type.name === asset.platformType)
    res.travelMode = pType.travelMode

    // is it mobile?
    res.mobile = !!pType.speedKts

    return res
  } else {
    return null
  }
}
