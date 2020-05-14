import L from 'leaflet'

/**
 *  create hexagonal grid
 * @param {SergeGrid<SergeHex<{}>> | undefined} grid grid of hex cells
 * @param {PlanMobileAsset} constraints Description of what this platform can do
 * @returns {SergeHex<{}>[]} List of cells for where this asset could travel to
 */
const boundsFor = (bounds: {imageTop: number
  imageLeft: number
  imageRight: number
  imageBottom: number
}): L.LatLngBounds => {
  const { imageTop, imageLeft, imageRight, imageBottom } = bounds
  const topLeft = L.latLng(imageTop, imageLeft)
  const bottomRight = L.latLng(imageBottom, imageRight)
  return L.latLngBounds(topLeft, bottomRight)
}

export default boundsFor
