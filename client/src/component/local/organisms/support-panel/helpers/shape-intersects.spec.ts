import * as turf from '@turf/turf'
import GeoJSON, { Feature, LineString, Point, Polygon } from 'geojson'
import { containedIn, lineLineContact, linePointContact, linePolyContact, trimLineToPeriod } from './shape-intersects'

const data: GeoJSON.FeatureCollection = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [
            117.7434,
            -21.0232
          ],
          [
            125.26,
            -16.41
          ],
          [
            131.89,
            -12.69
          ],
          [
            138.81,
            -7.68
          ],
          [
            139.3171,
            -8.0633
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [
              120.2124,
              -17.4764
            ],
            [
              126.21,
              -17.476432
            ],
            [
              126.2109,
              -12.5116
            ],
            [
              120.2124,
              -12.51166
            ],
            [
              120.2124,
              -17.4764
            ]
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [
            130.935,
            -5.6378525
          ],
          [
            134.2749,
            -7.5803277
          ],
          [
            134.7363,
            -12.01783
          ]
        ]
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Point',
        coordinates: [
          133.98248020559546,
          -11.183634212198807
        ]
      }
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'LineString',
        coordinates: [
          [
            124.45312499999999,
            -20.385825381874263
          ],
          [
            129.814453125,
            -18.396230138028812
          ],
          [
            131.044921875,
            -20.385825381874263
          ]
        ]
      }
    }
  ]
}

const simpleLine: Feature<LineString> = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'LineString',
    coordinates: [[0, 0], [0, 10]]
  }
}
const simplePoint: Feature<Point> = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Point',
    coordinates: [0, 8]
  }
}
const simplePoly: Feature<Polygon> = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [-2, 2], [4, 2], [4, 4], [-2, 4], [-2, 2]
      ]
    ]
  }
}

const line = data.features[0].geometry as LineString
const poly = data.features[1].geometry as Polygon
const lineIntersect = data.features[2].geometry as any
const point = data.features[3].geometry as any
const independentLine = data.features[4].geometry as any

!7 && console.log(lineIntersect, point, independentLine)

it('trims line to periods', () => {
  expect(containedIn([4, 8], [2, 9])).toBeTruthy()
  expect(containedIn([4, 8], [4, 8])).toBeTruthy()
  expect(containedIn([4, 8], [4, 5])).toBeFalsy()
  expect(containedIn([4, 8], [5, 8])).toBeFalsy()
})

it('trim line to a period', () => {
  const tLine = turf.lineString(simpleLine.geometry.coordinates)

  const res1 = trimLineToPeriod(tLine.geometry, [0, 10], [2, 8]) as LineString
  expect(res1).toBeTruthy()
  expect(res1.coordinates).toEqual([[0, 2], [0, 8]])
  const res2 = trimLineToPeriod(tLine.geometry, [0, 10], [2, 12]) as LineString
  expect(res2.coordinates).toEqual([[0, 2], [0, 10]])
  const res3 = trimLineToPeriod(tLine.geometry, [0, 10], [-2, 4]) as LineString
  expect(res3.coordinates).toEqual([[0, 0], [0, 4]])
})

it('intersection of line & poly', () => {
  const resTooEarly = linePolyContact(simpleLine.geometry, [0, 10], simplePoly.geometry, [5, 10])
  expect(resTooEarly).toBeUndefined()
  //  console.log('aa', resTooEarly?.intersection.geometry)

  const res = linePolyContact(simpleLine.geometry, [0, 10], simplePoly.geometry, [0, 10])
  expect(res).toBeTruthy()
  expect(res?.startTime).toBeCloseTo(2, 2)
  expect(res?.endTime).toBeCloseTo(4, 2)
  const twoCross = res?.intersection.geometry as any
  expect(twoCross.coordinates.length).toEqual(2)
  expect(twoCross.coordinates[0]).toEqual([0, 2])
  expect(twoCross.coordinates[1]).toEqual([0, 4])
  //  console.log('a', res?.intersection.geometry)
  // start in poly
  const startInPoly = turf.lineString([[0, 3], [0, 10]])
  const res2 = linePolyContact(startInPoly.geometry, [0, 10], simplePoly.geometry, [0, 10])
  const crossOut = res2?.intersection.geometry as any
  expect(crossOut.coordinates[0].length).toEqual(2)
  expect(crossOut.coordinates[0]).toEqual([0, 3])
  expect(crossOut.coordinates[1]).toEqual([0, 4])
  expect(res2).toBeTruthy()
  // console.log('b', res2?.intersection.geometry)
  const endInPoly = turf.lineString([[0, 0], [0, 3]])
  const res3 = linePolyContact(endInPoly.geometry, [0, 10], simplePoly.geometry, [0, 10])
  expect(res3).toBeTruthy()
  // console.log('b', res3?.intersection.geometry)
  const crossIn = res3?.intersection.geometry as any
  expect(crossIn.coordinates.length).toEqual(2)
  expect(crossIn.coordinates[0]).toEqual([0, 2])
  expect(crossIn.coordinates[1]).toEqual([0, 3])
  // console.log('c', res3)
  const resTooLate = linePolyContact(endInPoly.geometry, [0, 10], simplePoly.geometry, [0, 4])
  expect(resTooLate).toBeUndefined()
  //  console.log('d', resTooLate?.intersection.geometry)
})

it('intersection of line & point', () => {
  const res = linePointContact(simpleLine.geometry, [0, 10], simplePoint.geometry, [2, 10])
  expect(res).toBeTruthy()
  expect(res?.startTime).toEqual(2)
  expect(res?.endTime).toEqual(8)

  const outsidePoly = turf.point([1, 1])
  const res2 = linePointContact(simpleLine.geometry, [0, 10], outsidePoly.geometry, [0, 10])
  expect(res2).toBeUndefined()

  const tooEarly = linePointContact(simpleLine.geometry, [0, 10], simplePoint.geometry, [0, 6])
  expect(tooEarly).toBeUndefined()

  const tooLate = linePointContact(simpleLine.geometry, [0, 10], simplePoint.geometry, [9, 10])
  expect(tooLate).toBeUndefined()
})

it('intersection of line & line - invalid', () => {
  const horiLine = turf.lineString([[5, 5], [-5, 5]])
  const generousRange = lineLineContact(simpleLine.geometry, [0, 10], horiLine.geometry, [4, 10], 1000)
  expect(generousRange).toBeTruthy()

  const resSmallerRange = lineLineContact(simpleLine.geometry, [0, 10], horiLine.geometry, [4, 10], 100)
  expect(resSmallerRange).toBeFalsy()
})

it('intersection of line & line - valid', () => {
  const horiLine = turf.lineString([[5, 5], [-5, 5]])
  const res = lineLineContact(simpleLine.geometry, [0, 10], horiLine.geometry, [0, 10], 10)
  expect(res).toBeTruthy()
  const geom = res?.intersection.geometry as any
  expect(geom.coordinates.length).toEqual(2)
  expect(geom.coordinates[0]).toEqual(0)
  expect(geom.coordinates[1]).toEqual(5)
  expect(res?.startTime).toBeCloseTo(5, 2)
  expect(res?.endTime).toBeCloseTo(5, 2)
})

it('find how far along tje line to get the polygon overlap', () => {
  const tLine = turf.lineString(line.coordinates)
  const tPoly = turf.polygon(poly.coordinates)
  const overlap = turf.lineIntersect(tLine, tPoly)
  expect(overlap).toBeTruthy()
  const beforeSection = turf.lineSplit(tLine, overlap.features[0])
  const afterSection = turf.lineSplit(tLine, overlap.features[1])
  const midSection = turf.lineSplit(beforeSection.features[1], overlap.features[1])
  const beforeLength = turf.length(beforeSection.features[0], { units: 'kilometers' })
  const afterLength = turf.length(afterSection.features[1], { units: 'kilometers' })
  const midLength = turf.length(midSection.features[0], { units: 'kilometers' })
  const totalLength = turf.length(tLine, { units: 'kilometers' })

  //  const testRes = linePolyContact(data.features[0].geometry as LineString, data.features[0].geometry as Polygon )

  !7 && console.log('line', !!linePolyContact, beforeLength, midLength, afterLength, beforeLength + midLength + afterLength, totalLength)
})
