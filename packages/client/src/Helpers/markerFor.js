import L from 'leaflet'

/** create a marker for the supplied set of details */
export default asset => {
  const divIcon = L.divIcon({
    iconSize: [40, 40],
    className: `platform-counter platform-force-${asset.force.toLowerCase()} platform-name-${asset.name.replace(/ /g, '-').toLowerCase()}`
  })
  const res = L.marker(
    asset.loc, {
      draggable: asset.draggable,
      icon: divIcon
    }
  )
  res.bindTooltip(asset.name)
  res.travelMode = 'sea'// asset.travelMode
  res.force = asset.force
  res.stepRemaining = asset.allowance
  res.allowance = asset.allowance
  res.mobile = asset.mobile
  res.history = asset.history
  return res
}
