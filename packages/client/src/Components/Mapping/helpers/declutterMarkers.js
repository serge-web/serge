import L from 'leaflet'
/** some cells may contain multiple markers. if that's the case, spread them out around the cell.
   * The clusters object should contain a list of arrays of markers
   */
export default function declutter (/* collection */ clusters, /* degrees */ gridDelta, /* object */ grid) {
  // note: we need to have the 'locIgnored' parameter in the next line, but it remains unsed
  // This next line tells esLint not worry about it
  /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Ignored" }] */
  // const keys = Object.keys(clusters)
  // console.log('keys:', keys)
  for (const key in clusters) {
    const list = clusters[key]
    const centre = grid.hexNamed(key).centrePos
    const len = list.length
    if (len > 1) {
      // note: we start at 1, since we let the first one stay in the middle
      for (let ctr = 0; ctr < len; ctr++) {
        const marker = list[ctr]
        const thisAngleDegs = ctr * (360.0 / (len))
        const thisAngleRads = (90 + thisAngleDegs) / 180 * Math.PI

        const updatePos = (marker) => {
          const newLat = centre.lat + gridDelta * Math.sin(thisAngleRads)
          const newLng = centre.lng + gridDelta * Math.cos(thisAngleRads)
          marker.setLatLng(L.latLng(newLat, newLng))
        }

        if (marker.do_not_declutter) {
          if (marker.eachLayer) {
            marker.eachLayer(marker => {
              updatePos(marker)
            })
          } else {
            // note: we mark the planningMarker with do not declutter, since we
            // want it to stay in the centre of a cell
          }
        } else {
          updatePos(marker)
        }
      }
    }
  }
};
