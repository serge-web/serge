import L from 'leaflet'
import { padInt } from '@serge/helpers'
import { defineGrid } from 'honeycomb-grid'
// TODO: Remove the below as this should only be used in tests/stories
import cellTypes from './mocks/cell-types'
import defaultHexStyle from './assets/data/default-hex-style'
import organicHexStyle from './assets/data/organic-hex-style'
import { cellIndexToDegrees, cellIndexToRelativeDegrees } from './helpers'

const GridImplementation = (origin: any, delta: any, width: any, height: any, markerLayer: any, gridLayer: any): any => {
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
    const hexSea = cellChars[0] || null
    const hexLand = cellChars[1] || null
    const hexOrganic = cellChars[2] || null
    const hexTitle = cellChars[3] || null

    const scalePoint = (value: any, hexCentre: any, hexCentrePos: any, delta: any): any => {
      const point = {
        x: value.x - hexCentre.x,
        y: value.y - hexCentre.y
      }
      return cellIndexToRelativeDegrees(hexCentrePos, point, delta)
    }

    corners.forEach(corner => cornerArr.push(scalePoint(null, hexCentre, hexCentrePos, delta)))

    // determine styling, based upon `organic` flag
    const gridTextClass = hexOrganic ? 'cell-label-black' : 'cell-label'
    const gridHexStyle = hexOrganic ? organicHexStyle : defaultHexStyle

    // now create the polygon
    const polygon = L.polygon(cornerArr, gridHexStyle)

    // store the polyline in the cell
    const hexPolygon = polygon

    // add this polygon to the relevant layer
    gridLayer.addLayer(polygon)

    const labelSize = hexTitle ? [104, 30] : [20, 20]

    // lastly, create the text label
    const myIcon = L.divIcon({
      className: gridTextClass, // two different states for changing the text colour based on the type of hex grid
      html: hexTitle ? '<b>' + hexTitle + '</b>' : hexName,
      iconSize: labelSize
    })
    // you can set .my-div-icon styles in CSS
    const cellLabel = L.marker(hexCentrePos, {
      icon: myIcon,
      keyboard: false, // prevent it taking keyboard focus
      zIndexOffset: -100 // ensure it's rendered behind routes
    })
    // note: add the title to the parent grid layer, so it's visible more of the time
    if (hexTitle) {
      gridLayer.addLayer(cellLabel)
    } else {
      markerLayer.addLayer(cellLabel)
    }
  })
}
