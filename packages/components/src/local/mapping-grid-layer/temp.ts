import L from 'leaflet'
import { padInt } from '@serge/helpers'
import { defineGrid } from 'honeycomb-grid'
// TODO: Remove the below as this should only be used in tests/stories
import cellTypes from './mocks/cell-types'
import defaultHexStyle from './assets/data/default-hex-style'
import organicHexStyle from './assets/data/organic-hex-style'
import { cellIndexToDegrees, cellIndexToRelativeDegrees } from './helpers'

const GridImplementation = (origin: any, delta: any, width: any, height: any, markerLayer: any): any => {
  const direction = 'E'
  const grid = defineGrid()
  const gridCells = grid.rectangle({ width, height, direction })
  const hexOne = gridCells[0]

  const {
    corners,
    center: hexCentre,
    coordinates: cellOrigin
  } = hexOne

  const centreOffset = L.point(hexCentre).subtract(L.point(cellOrigin))

  return gridCells.forEach(hex => {
    const point = hex.toPoint()
    const hexCentrePos = cellIndexToDegrees(origin, point, delta)
    const hexName = String.fromCharCode(65 + hex.y) + padInt(hex.x)
    const cellChars = cellTypes[hexName]
    const cornerArr = []

    const scalePoint = (value: any, hexCentre: any, hexCentrePos: any, delta: any): any => {
      const point = {
        x: value.x - hexCentre.x,
        y: value.y - hexCentre.y
      }
      return cellIndexToRelativeDegrees(hexCentrePos, point, delta)
    }

    [...corners].forEach(corner => corner.push(scalePoint(null, hexCentre, hexCentrePos, delta)))
  })
}

export default class GridImplementation {
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
