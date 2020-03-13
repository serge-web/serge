import L from 'leaflet'
import { padInt } from '@serge/helpers'
import { defineGrid } from 'honeycomb-grid'
// TODO: Remove the below as this should only be used in tests/stories
import cellTypes from './mocks/cell-types'
import defaultHexStyle from './assets/data/default-hex-style'
import organicHexStyle from './assets/data/organic-hex-style'
import { toHex } from './helpers'

export default class GridImplementation {
  constructor ({ origin, delta, width, height, markerLayer }) {
    this.origin = origin
    this.delta = delta
    this.grid = defineGrid()
    this.markerLayer = markerLayer
    this.grid_cells = this.grid.rectangle({
      width: width,
      height: height,
      direction: 'E'
    })

    // the hexes all have the same corners object, so just use the first one
    const hexOne = this.grid_cells[0]
    this.corners = hexOne.corners()

    // get the coordinates of the centre of the hex, relative
    // to the top-left origin
    this.centreH = hexOne.center()

    // and the coords of the top-left origin
    const cellOrigin = hexOne.coordinates()

    // capture the offset between a cell centre, and the cell origin
    this.centreOffset = L.point(this.centreH).subtract(L.point(cellOrigin))
  }

  /** get the array of cells */
  get cells () {
    return this.grid_cells
  }

  /** convert this point in cell coordinates to lat/long */
  toWorld (point) {
    return this.toWorld2(this.origin, point)
  }

  /** calculate the position from the supplied offset */
  toWorld2 (origin, point) {
    return L.latLng(origin.lat - point.x * this.delta, origin.lng + point.y * this.delta)
  }

  /** get the hex cell for a location
     */
  cellFor (latLng) {
    // convert to hex coordinates
    const hexCoords = toHex(latLng, this.origin, this.delta)

    // apply the offset, since the cell origin is at the top left
    let cellCoords = L.point(hexCoords.x + this.centreOffset.x, hexCoords.y + this.centreOffset.y)

    // find the nearest hex cell reference to this location
    cellCoords = this.grid.pointToHex(cellCoords.x, cellCoords.y)

    // and now retrieve the cell at these coords
    return this.cells.get(cellCoords)
  }

  /** generate the hexagons, and add them to thie supplied layer */
  addShapesTo (gridLayer) {
    // add the grid to the map
    this.grid_cells.forEach(hex => {
      // get the coordinates of the cell
      const point = hex.toPoint()

      // safely store the coords of the centre of the cell
      hex.centrePos = this.toWorld(point)

      hex.name = String.fromCharCode(65 + hex.y) + padInt(hex.x)
      // sort out the cell attributes
      const cellChars = cellTypes[hex.name]
      if (cellChars) {
        hex.sea = cellChars[0]
        hex.land = cellChars[1]
        hex.organic = cellChars[2] // the new organic option is inialised here
        // does it have replacement title?
        if (cellChars[3]) {
          hex.title = cellChars[3]
        }
      } else {
        //   console.log("Warning,cell chars not found for:" + hex.name)
      }

      // add the shape
      // build up an array of correctly mapped corners
      const cornerArr = []

      // function to scale the corner to our map scale
      const centreH = this.centreH

      const scalePoint = (value) => {
        const centreP = hex.centrePos
        // the corners are relative to the origin (TL). So, offset them to the centre
        const point = {
          x: value.x - centreH.x,
          y: value.y - centreH.y
        }
        const newP = this.toWorld2(centreP, point)
        cornerArr.push(newP)
      }

      // apply the scaling function to each corner
      this.corners.forEach(scalePoint)

      // determine styling, based upon `organic` flag
      const gridTextClass = hex.organic ? 'cell-label-black' : 'cell-label'
      const gridHexStyle = hex.organic ? organicHexStyle : defaultHexStyle

      // now create the polygon
      const polygon = L.polygon(cornerArr, gridHexStyle)

      // store the polyline in the cell
      hex.polygon = polygon

      // add this polygon to the relevant layer
      gridLayer.addLayer(polygon)

      const labelSize = hex.title ? [104, 30] : [20, 20]

      // lastly, create the text label
      const myIcon = L.divIcon({
        className: gridTextClass, // two different states for changing the text colour based on the type of hex grid
        html: hex.title ? '<b>' + hex.title + '</b>' : hex.name,
        iconSize: labelSize
      })
      // you can set .my-div-icon styles in CSS
      const cellLabel = L.marker(hex.centrePos, {
        icon: myIcon,
        keyboard: false, // prevent it taking keyboard focus
        zIndexOffset: -100 // ensure it's rendered behind routes
      })
      // note: add the title to the parent grid layer, so it's visible more of the time
      if (hex.title) {
        gridLayer.addLayer(cellLabel)
      } else {
        this.markerLayer.addLayer(cellLabel)
      }
    })
  }
}
