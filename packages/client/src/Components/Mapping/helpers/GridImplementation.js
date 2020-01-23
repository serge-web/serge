import L from 'leaflet'
import { defineGrid } from 'honeycomb-grid'
import cellTypes from '../data/cell-types'
import defaultHexStyle from '../data/default-hex-style'
import padInt from '../../../Helpers/padInteger'

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

  /** convert this lat/long to Hex coordinates */
  toHex (point) {
    var latVal = (this.origin.lat - point.lat) / this.delta
    var lngVal = (point.lng - this.origin.lng) / this.delta
    return L.point(latVal, lngVal)
  }

  /** get the cells at the indicated distance from the origin */
  hexesInRange (startHex, range) {
    return this.grid_cells.hexesInRange(startHex, range, true)
  }

  /** get the cells on the path between these points */
  hexesBetween (startHex, endHex) {
    return this.grid_cells.hexesBetween(startHex, endHex)
  }

  /** retrive the cell at the supplied human-readable coords ("A01") */
  hexNamed (name) {
    return this.grid_cells.find(cell => cell.name === name)
  }

  /** get the hex cell for a location
     */
  cellFor (latLng) {
    // convert to hex coordinates
    var hexCoords = this.toHex(latLng)

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
      } else {
        //   console.log("Warning,cell chars not found for:" + hex.name)
      }

      // add a marker
      const myIcon = L.divIcon({
        className: 'cell-label',
        html: hex.name
      })
      // you can set .my-div-icon styles in CSS
      const cellLabel = L.marker(hex.centrePos, {
        icon: myIcon,
        keyboard: false, // prevent it taking keyboard focus
        zIndexOffset: -100 // ensure it's rendered behind routes
      })
      this.markerLayer.addLayer(cellLabel)

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

      // now create the polygon
      const polygon = L.polygon(cornerArr, defaultHexStyle)

      // store the polyline in the cell
      hex.polygon = polygon

      // add this polygon to the relevant layer
      gridLayer.addLayer(polygon)
    })
  }
}
