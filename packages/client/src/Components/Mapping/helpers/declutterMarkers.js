import L from 'leaflet'
/** some cells may contain multiple markers. if that's the case, spread them out around the cell.
   * The clusters object should contain a list of arrays of markers
   */
export default function declutter (/* collection */ clusters, /* degrees */ gridDelta) {
  // note: we need to have the 'locIgnored' parameter in the next line, but it remains unsed
  // This next line tells esLint not worry about it
  /* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Ignored" }] */
  for (const [locIgnored, list] of Object.entries(clusters)) {
    const len = list.length
    // note: we start at 1, since we let the first one stay in the middle
    for (let ctr = 0; ctr < len; ctr++) {
      const marker = list[ctr]
      const thisAngleDegs = ctr * (360.0 / (len))
      const thisAngleRads = (90 + thisAngleDegs) / 180 * Math.PI
      const thisPos = marker.coord
      const newLat = thisPos.lat + gridDelta * Math.sin(thisAngleRads)
      const newLng = thisPos.lng + gridDelta * Math.cos(thisAngleRads)
      marker.coord = L.latLng(newLat, newLng)

      // TODO: for markers that are actually in the same cell, we should introduce a slightly different styling, _I think_
    }
  }
};
