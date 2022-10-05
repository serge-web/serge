import { geometriesFor, randomOrdersDocs, invertMessages, findPlannedGeometries, spatialBinning, putInBin } from './gen-order-data'
import { P9Mock, MockPlanningActivities, planningMessages } from '@serge/mocks'
import moment from 'moment'
import * as turf from '@turf/turf'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]

it('produces order data', () => {
  const numOrders = 20
  const orders = randomOrdersDocs(numOrders, forces, [blueForce.uniqid, redForce.uniqid], MockPlanningActivities)
  expect(orders).toBeTruthy()
  expect(orders.length).toEqual(numOrders)
})

it('produces planned goemetries', () => {
  if (blueForce.assets && redForce.assets) {
    const ownAssets = [blueForce.assets[0], blueForce.assets[1]]
    const targets = [redForce.assets[0], redForce.assets[1]]
    const activity = MockPlanningActivities[1]
    const startTime = moment('2022-11-15T00:00:00.000Z')
    const orders = geometriesFor(ownAssets, targets, activity, 22, startTime)
    expect(orders).toBeTruthy()
    expect(orders.length).toEqual(3)
    const geom = orders[1].geometry.geometry as any
    expect(geom.coordinates).toBeTruthy()
    expect(geom.coordinates.length).toEqual(1)
    expect(geom.coordinates[0].length).toEqual(5)
    expect(geom.coordinates[0][0].length).toEqual(2)
  }
})

it('overlaps works as expected', () => {
  const point: turf.Feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Point',
      coordinates: [
        [
          120.99316406249999,
          -15.35249785815401
        ]
      ]
    }
  }

  const line: turf.Feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'LineString',
      coordinates: [
        [
          117.99316406249999,
          -26.35249785815401
        ],
        [
          122.56347656249999,
          -11.5230875068685
        ],
        [
          136.2744140625,
          -11.60919340793894
        ]
      ]
    }
  }
  const poly: turf.Feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [
            116.486,
            -21.64
          ],
          [
            132.942,
            -21.64
          ],
          [
            132.942,
            -13.982
          ],
          [
            116.486,
            -13.982
          ],
          [
            116.486,
            -21.64
          ]
        ]
      ]
    }
  }
  const poly2: turf.Feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [
            126.298828125,
            -25.324166525738384
          ],
          [
            135.83496093749997,
            -25.324166525738384
          ],
          [
            135.83496093749997,
            -20.179723502765153
          ],
          [
            126.298828125,
            -20.179723502765153
          ],
          [
            126.298828125,
            -25.324166525738384
          ]
        ]
      ]
    }
  }

  const disconnectedPoly: turf.Feature = {
    type: 'Feature',
    properties: {},
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [
            134.2529296875,
            -16.1724728083975
          ],
          [
            140.361328125,
            -16.1724728083975
          ],
          [
            140.361328125,
            -13.2399454992863
          ],
          [
            134.2529296875,
            -13.2399454992863
          ],
          [
            134.2529296875,
            -16.1724728083975
          ]
        ]
      ]
    }
  }

  expect(turf.booleanCrosses(poly, line)).toBeTruthy()
  const pointGeo = point.geometry as any
  const turfPoint = turf.point(pointGeo.coordinates[0])
  const polyCoords = poly.geometry as any
  const poly2a = turf.polygon(polyCoords.coordinates)
  expect(turf.booleanPointInPolygon(turfPoint, poly2a)).toBeTruthy()
  expect(turf.booleanOverlap(poly, poly2)).toBeTruthy()
  expect(turf.booleanOverlap(poly, disconnectedPoly)).toBeFalsy()
})

it('bins overlaps for time', () => {
  const time = '2022-11-15T00:00:00.000Z'
  const orders = invertMessages(planningMessages)
  const binsInTimeWindow = findPlannedGeometries(orders, time, 30)
  // now do spatial binning
  const bins = spatialBinning(binsInTimeWindow, 6)

  const binnedOrders = putInBin(orders, bins)
  expect(binnedOrders).toBeTruthy()
  expect(binnedOrders.length).toEqual(22)
})
