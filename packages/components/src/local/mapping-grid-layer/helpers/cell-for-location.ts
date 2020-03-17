import L, { LatLng } from 'leaflet'
import toHex from './to-hex'
import { Grid } from 'honeycomb-grid'

/**
   * get the hex cell for a location
  */
const cellForLocation = (grid: any, cells: Grid, latLng: LatLng, origin: LatLng, delta: any, centreOffset: any): any => {
  // convert to hex coordinates
  const hexCoords = toHex(latLng, origin, delta)

  // apply the offset, since the cell origin is at the top left
  let cellCoords = L.point(hexCoords.x + centreOffset.x, hexCoords.y + centreOffset.y)

  // find the nearest hex cell reference to this location
  cellCoords = grid.pointToHex(cellCoords.x, cellCoords.y)

  // and now retrieve the cell at these coords
  return cells.get(cellCoords)
}

export default cellForLocation
