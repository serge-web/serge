import multiPolyFromGeoJSON from './multi-poly-from-geojson'
import atlanticCells from './geojson-data'
import { FeatureCollection } from 'geojson'

it('Correctly convert GeoJSON to LeafletCoords', () => {
  const res = multiPolyFromGeoJSON(atlanticCells as FeatureCollection)
  expect(res.length).toEqual(3)
  expect(res[0][0][0][0].length).toEqual(2)
  expect(typeof res[0][0][0][0][0]).toBe('number')
  expect(typeof res[0][0][0][0][1]).toBe('number')
})
