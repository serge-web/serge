import L from 'leaflet'

/** create a marker for the supplied set of details */
export default (asset, force, myForce) => {

  /** utility function to determine how we perceive another platform.
   * if it's our force, we know it's one of ours. But if it isn't our force
   * we need to see how it is perceived by our force
   */
  function findPerceivedForce (myForce, hisForce, hisPerceptions) {
    var res
    if (myForce === hisForce) {
      res = myForce
    } else {
      const perception = hisPerceptions[myForce]
      if (perception != null) {
        res = perception.force
      } else {
        res = null
      }
    }
    return res
  }

  var perceivedForce = findPerceivedForce(myForce, force, asset.perceptions)

  // can we see it?
  if (perceivedForce != null) {
    const divIcon = L.divIcon({
      iconSize: [40, 40],
      className: `platform-counter platform-force-${perceivedForce.toLowerCase()} platform-type-${asset.platformType.replace(/ /g, '-').toLowerCase()}`
    })
    const res = L.marker(
      asset.loc, {
        draggable: asset.draggable,
        icon: divIcon
      }
    )
    res.bindTooltip(asset.name)
    res.travelMode = 'sea' // asset.travelMode
    res.force = asset.force
    res.stepRemaining = asset.allowance
    res.allowance = asset.allowance
    res.mobile = asset.mobile
    res.history = asset.history
    return res
  } else {
    return null
  }
}
