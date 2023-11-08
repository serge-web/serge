import multiPolyFromGeoJSON from './multi-poly-from-geojson'
import atlanticCells from './geojson-data'
import { FeatureCollection } from 'geojson'
import { Terrain } from 'src/config'

it('Correctly convert GeoJSON to LeafletCoords', () => {
  const res = multiPolyFromGeoJSON(atlanticCells as FeatureCollection)
  expect(res.length).toEqual(2)
  expect(res[0].terrain).toBeTruthy()
  expect(res[0].terrain.type).toEqual('shallow')
  expect(res[0].terrain.fillColor).toEqual('#9dd')
  expect(res[0].terrain.terrain).toEqual(Terrain.SEA)

  expect(res[0].data[0][0].length).toEqual(39)
  expect(typeof res[0].data[0][0][0][0]).toBe('number')
  expect(typeof res[0].data[0][0][0][1]).toBe('number')
})
