import L from 'leaflet'
import { SergeHex } from '@serge/custom-types'

export interface PolyBin {
  bounds: L.LatLngBounds
  cells: SergeHex<{}>[]
}

/** Generate the Serge name for the supplied cell (1,3) == "B03" */
const binCells = (bounds: L.LatLngBounds, store: SergeHex<{}>[]): PolyBin[] => {
  // create the bins
  const bl = bounds.getSouthWest()
  const tr = bounds.getNorthEast()
  const steps = 12
  const xDelta = (tr.lng - bl.lng) / steps
  const yDelta = (tr.lat - bl.lat) / steps
  const res: PolyBin[] = []
  for (let x = 0; x < steps; x++) {
    for (let y = 0; y < steps; y++) {
      const _bl = L.latLng(bl.lat + y * yDelta, bl.lng + x * xDelta)
      const _tr = L.latLng(bl.lat + (y + 1) * yDelta, bl.lng + (x + 1) * xDelta)
      const bounds = L.latLngBounds(_bl, _tr)
      const bin: PolyBin = { bounds: bounds, cells: [] }
      res.push(bin)
    }
  }
  // now bin the cells
  store.forEach((cell: SergeHex<{}>) => {
    const centre = cell.centreLatLng
    if (centre) {
      const lat = centre.lat
      const lng = centre.lng
      const xd = lng - bl.lng
      const yd = lat - bl.lat
      const x = Math.floor(xd / xDelta)
      const y = Math.floor(yd / yDelta)
      // note: the cell at the top-right may end up with an
      // invalid index - clip it to the top right corner
      const index = Math.min(steps * steps - 1, x * steps + y)
      res[index].cells.push(cell)
    } else {
      console.log('cell centre missing', cell, centre)
    }
  })

  // drop the empty bins
  const filledBins = res.filter((bin: PolyBin) => bin.cells.length > 0)

  return filledBins
}

export default binCells
