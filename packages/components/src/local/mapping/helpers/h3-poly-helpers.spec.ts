import data3 from '../data/north-atlantic-res3'
import data4 from '../data/north-atlantic-res4'
import h3, { H3IndexInput } from 'h3-js'
import { parseHexRefs, generatePolys, convertToFeatures } from './h3-helpers'

it('generates polygons of same R3 terrain tyope', () => {
  const hexCells = parseHexRefs(data3)
  const cells = hexCells.cellSets
  expect(cells).toBeTruthy()
  expect(cells.length).toEqual(5)
  const landArr = cells[0]
  expect(landArr.typeName).toEqual('Land')
  expect(landArr.cells.length).toEqual(226)
  expect(landArr.cells[0]).toEqual('831f96fffffffff')
  expect(h3.h3GetResolution(landArr.cells[0] as H3IndexInput)).toEqual(3)
  const shallowArr = cells[1]
  expect(shallowArr.typeName).toEqual('depth-500')
  expect(shallowArr.cells.length).toEqual(256)

  // check bounds
  const bounds = hexCells.bounds
  expect(bounds).toBeTruthy()
  expect(bounds.getNorth()).toBeCloseTo(70, 0)
  expect(bounds.getSouth()).toBeCloseTo(39, 0)
  expect(bounds.getEast()).toBeCloseTo(11, 0)
  expect(bounds.getWest()).toBeCloseTo(-61.5, 0)

  // now generate polys
  const polyRegions = generatePolys(cells)
  expect(polyRegions).toBeTruthy()
  expect(polyRegions.length).toEqual(5)
  const landPoly = polyRegions[0]
  expect(landPoly.name).toEqual('Land')
  expect(landPoly.polys.length).toEqual(13)

  // now convert to features
  const features = convertToFeatures(polyRegions)
  expect(features).toBeTruthy()
  expect(features.features.length).toEqual(4)

})

it('generates polygons of same R4 terrain tyope', () => {
  const hexCells = parseHexRefs(data4)
  expect(hexCells).toBeTruthy()
  const cells = hexCells.cellSets
  const landArr = cells[0]
  expect(landArr.typeName).toEqual('Land')
  expect(landArr.cells.length).toEqual(1555)
  expect(h3.h3GetResolution(landArr.cells[0] as H3IndexInput)).toEqual(4)
  expect(landArr.cells[0]).toEqual('841844bffffffff')
  const shallowArr = cells[1]
  expect(shallowArr.typeName).toEqual('depth-500')
  expect(shallowArr.cells.length).toEqual(1776)
})
