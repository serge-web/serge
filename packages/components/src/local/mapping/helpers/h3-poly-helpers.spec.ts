import data3 from '../data/north-atlantic-res3'
import data4 from '../data/north-atlantic-res4'
import h3, { H3IndexInput } from 'h3-js'
import { parseHexRefs, generatePolys, convertToFeatures, invertCoords } from './h3-helpers'
import { MultiPolygon } from 'geojson'

it('generates polygons of same R3 terrain tyope', () => {
  const hexCells = parseHexRefs(data3)
  expect(hexCells.bounds).toBeTruthy()
  expect(hexCells.bounds.getNorth()).toBeCloseTo(70.4, 0)
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
  const features = convertToFeatures(polyRegions, hexCells.bounds)
  expect(features).toBeTruthy()
  expect(features.features.length).toEqual(5)
  expect(features.features[0].bbox).toBeTruthy()
  expect(features.features[0].bbox && features.features[0].bbox[0]).toBeCloseTo(-60.8, 0)
  // check our 'v2' flag is present
  expect(features.features[0].properties && features.features[0].properties.v2).toBeTruthy()
  const mP = features.features[0].geometry as MultiPolygon
  expect(mP).toBeTruthy()
  expect(mP.coordinates[0][0][0][0]).toBeCloseTo(-49.7, 0)
  expect(mP.coordinates[0][0][0][1]).toBeCloseTo(62.0, 0)
})

it('inverts position coords', () => {
  const data: GeoJSON.Position[][][] =  [[[[ 62.08986419595545, -49.75788581673224 ],
    [ 61.46323888940566, -50.21923807725031 ],
    [ 60.95930148259598, -49.35411435202936 ],
    [ 61.070843759573435, -48.04232110294612 ]]],
    [[[ 12.08986419595545, -19.75788581673224 ],
    [ 61.46323888940566, -50.21923807725031 ],
    [ 60.95930148259598, -49.35411435202936 ],
    [ 61.070843759573435, -48.04232110294612 ]]]] as number[][][][]
  const converted = invertCoords(data)
  expect(converted).toBeTruthy()
  expect(converted[0][0][0][0]).toBeCloseTo(-49.7, 0)
  expect(converted[0][0][0][1]).toBeCloseTo(62.0, 0)
  expect(converted[1][0][0][0]).toBeCloseTo(-19.7, 0)
  expect(converted[1][0][0][1]).toBeCloseTo(12.0, 0)
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
