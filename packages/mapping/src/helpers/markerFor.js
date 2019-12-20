import L from 'leaflet'

/** create a marker for the supplied set of details */
export default spec => {
    const res = L.marker(
        spec.loc, {
            draggable: spec.draggable
        }
    )
    res.bindTooltip(spec.name)
    res.travelMode = spec.travelMode
    res.force = spec.force
    res.stepRemaining = spec.allowance
    res.allowance = spec.allowance
    res.mobile = spec.mobile
    res.history = spec.history
    return res
}