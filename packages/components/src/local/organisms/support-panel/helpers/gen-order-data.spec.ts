import { GeometryType, PLANNING_MESSAGE } from '@serge/config'
import { MessagePlanning, PlannedProps, PlanningActivity } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import { P9BMock, planningMessages as planningChannelMessages } from '@serge/mocks'
import p9activitesMock from '@serge/mocks/p9-activities.mock'
import * as turf from '@turf/turf'
import { Feature, LineString, Polygon } from 'geojson'
import moment from 'moment'
import {
  findPlannedGeometries, findPlanningGeometry, geometriesFor, GeomWithOrders, injectTimes,
  invertMessages, ordersEndingAfterTime, ordersOverlappingTime, ordersStartingBeforeTime,
  overlapsInTime, putInBin, randomOrdersDocs, spatialBinning, timeIntersect, timePeriodForGeom, touches
} from './gen-order-data'
import { timeIntersect2 } from './shape-intersects'

const forces = P9BMock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]

const activities = p9activitesMock

const planningMessages = planningChannelMessages.filter((msg) => msg.messageType === PLANNING_MESSAGE) as MessagePlanning[]

const scrap: GeomWithOrders | undefined = undefined
const dummy = scrap && !!findPlannedGeometries && !!ordersEndingAfterTime && !!ordersOverlappingTime && !!findPlanningGeometry &&
 !!ordersStartingBeforeTime && !!overlapsInTime && !!putInBin && !!spatialBinning && !timeIntersect
!7 && console.log(dummy)
const sensorRange = 30

const randomizer = (): number => {
  return 0.5
}

const simpleLine: Feature<LineString> = {
  type: 'Feature',
  properties: {},
  geometry: {
    type: 'LineString',
    coordinates: [[0, 0], [0, 10]]
  }
}
// const simplePoint: Feature<Point> = {
//   type: 'Feature',
//   properties: {},
//   geometry: {
//     type: 'Point',
//     coordinates: [0, 8]
//   }
// }
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

const testActivity: PlanningActivity = {
  uniqid: 'area-strike',
  name: 'Area Strike',
  template: 'k16e-land',
  color: '#b0f',
  geometries: [
    {
      aType: GeometryType.polyline,
      name: 'Route in',
      uniqid: 'aa4'
    },
    {
      aType: GeometryType.polygon,
      name: 'Target Area',
      uniqid: 'aa5'
    },
    {
      aType: GeometryType.polyline,
      name: 'Route out',
      uniqid: 'aa6'
    }
  ]
}

it('produces order data', () => {
  const numOrders = 20
  const orders = randomOrdersDocs(numOrders, forces, [blueForce.uniqid, redForce.uniqid], activities)
  expect(orders).toBeTruthy()
  expect(orders.length).toEqual(numOrders)
})

it('produces planned goemetries', () => {
  if (blueForce.assets && redForce.assets) {
    const ownAssets = [blueForce.assets[0], blueForce.assets[1]]
    const targets = [redForce.assets[0], redForce.assets[1]]
    const activity = testActivity
    const startTime = moment('2022-11-15T00:00:00.000Z')
    const orders = geometriesFor(ownAssets, blueForce.uniqid, targets, activity, 22, startTime)
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

it('finds activities', () => {
  const activity = activities[0].groupedActivities[1].activities[2] as PlanningActivity
  // check the data is suitable
  expect(activity.geometries).toBeTruthy()
  expect(activity.geometries?.length).toBeGreaterThan(0)
  const found = findPlanningGeometry((activity.geometries && activity.geometries[1].uniqid) || '', activities[0].force, activities)
  expect(found).toBeTruthy()
  expect(found).toEqual(activity.geometries && activity.geometries[1].name)
})

it('bins overlaps for time', () => {
  const time = moment('2022-11-15T00:00:00.000Z').valueOf()
  const orders = invertMessages(deepCopy(planningMessages), activities)
  const binsInTimeWindow = findPlannedGeometries(orders, time, 30)
  // now do spatial binning
  const bins = spatialBinning(binsInTimeWindow, 6)

  const binnedOrders = putInBin(orders, bins)
  expect(binnedOrders).toBeTruthy()
  expect(binnedOrders.length).toEqual(36)
})

it('check filtering before time', () => {
  const res = ordersStartingBeforeTime(planningMessages, 10000)
  expect(res).toBeTruthy()
  expect(res.length).toEqual(0)

  const midWay = planningMessages[Math.floor(planningMessages.length / 2)]
  const midStart = ordersStartingBeforeTime(planningMessages, moment(midWay.message.startDate).valueOf())
  expect(midStart.length).toBeLessThan(planningMessages.length)
  expect(midStart.length).toBeGreaterThan(0)
})

it('check filtering after time', () => {
  const res = ordersEndingAfterTime(planningMessages, 10000)
  expect(res).toBeTruthy()
  expect(res.length).toEqual(planningMessages.length)

  const midWay = planningMessages[Math.floor(planningMessages.length / 2)]
  const midStart = ordersEndingAfterTime(planningMessages, moment(midWay.message.endDate).valueOf())
  expect(midStart.length).toBeLessThan(planningMessages.length)
  expect(midStart.length).toBeGreaterThan(0)
})

it('check overlapping time', () => {
  const midWay = planningMessages[Math.floor(planningMessages.length / 2)]
  const midStart = ordersOverlappingTime(planningMessages, moment(midWay.message.endDate).valueOf())
  expect(midStart.length).toBeLessThan(planningMessages.length)
  expect(midStart.length).toBeGreaterThan(0)
})

it('fills in time values', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  expect(withTimes[1].geometry.properties).toBeTruthy()
  expect(withTimes[1].geometry.properties?.startTime).toBeGreaterThan(0)
})

it('generates time intersection', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  const me = withTimes[4]
  const other = withTimes[17]
  const contact = timeIntersect(me, other)
  expect(contact).toBeTruthy()
})

it('does some diagnostics', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  const debug = !7
  debug && withTimes.forEach((geom1: GeomWithOrders, index1: number) => {
    withTimes.forEach((geom2: GeomWithOrders, index2: number) => {
      if (index1 !== index2) {
        if (geom1.geometry.geometry.type === 'LineString' && geom2.geometry.geometry.type !== 'LineString') {
          const show = (geom: GeomWithOrders): string => {
            return geom.geometry.geometry.type
            // const props = geom.geometry.properties as PlannedProps
            // return props.startDate + '  -  ' + props.endDate
          }
          const con2 = touches(geom1, geom2, 'aa', randomizer, sensorRange)
          if (con2) {
            console.log('touches', index1, index2, overlapsInTime(geom1, geom2), show(geom1), show(geom2))
          }
          if (overlapsInTime(geom1, geom2)) {
            const con1 = touches(geom1, geom2, 'aa', randomizer, sensorRange)
            !con1 && console.log('not touching', index1, index2, show(geom1), show(geom2))
            con1 && console.log('overlaps', index1, index2, show(geom1), show(geom2), moment(con1.timeStart), moment(con1.timeEnd))
            //            con1 && console.log(con1, geom1.geometry.geometry.type, geom1.geometry.geometry.type, index1, index2)
          }
        }
      }
    })
  })
  const debug2 = !7
  debug2 && console.table(withTimes.map((geom: GeomWithOrders) => {
    const props = geom.geometry.properties as PlannedProps
    return {
      name: geom.id,
      type: geom.geometry.geometry.type,
      start: props.startDate,
      end: props.endDate
    }
  }))
})

it('generates full contact for two polygons', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)

  const me = withTimes[4]
  const other = withTimes[17]
  const meGeom = me.geometry.geometry as any
  const otherGeom = other.geometry.geometry as any
  me.geometry.geometry.type = 'Polygon'
  meGeom.coordinates = [[
    [-2, 2], [4, 2], [4, 4], [-2, 4], [-2, 2]
  ]]
  other.geometry.geometry.type = 'Polygon'
  otherGeom.coordinates = [[
    [-1, 3], [5, 3], [5, 5], [-1, 5], [-1, 3]
  ]]
  const id = 'aa'
  const con1 = touches(me, other, id, randomizer, sensorRange)
  expect(con1).toBeTruthy()
  if (con1) {
    const myProps = me.geometry.properties as PlannedProps
    const otherProps = other.geometry.properties as PlannedProps
    expect([myProps.startTime, otherProps.startTime]).toContain(con1.timeStart)
    expect([myProps.endTime, otherProps.endTime]).toContain(con1.timeEnd)
    expect(con1.id).toEqual(id)
    const inter = con1.intersection as any
    expect(inter).toBeTruthy()
    expect(inter.coordinates.length).toEqual(1)
    expect(inter.coordinates[0][0]).toEqual([-1, 3])
    expect(inter.coordinates[0][1]).toEqual([4, 3])
    expect(inter.coordinates[0][2]).toEqual([4, 4])
    expect(inter.coordinates[0][3]).toEqual([-1, 4])
    expect(inter.coordinates[0][4]).toEqual([-1, 3])
  }
})

it('generates full contact for polygon & point', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)

  const me = withTimes[17]
  const other = withTimes[20]

  const meGeom = me.geometry.geometry as any
  const otherGeom = other.geometry.geometry as any

  me.geometry.geometry.type = 'Polygon'
  meGeom.coordinates = [[
    [-2, 2], [4, 2], [4, 4], [-2, 4], [-2, 2]
  ]]
  other.geometry.geometry.type = 'Point'
  otherGeom.coordinates = [0, 3]

  // force a time overlap
  const myProps = me.geometry.properties as PlannedProps
  const hisProps = other.geometry.properties as PlannedProps
  hisProps.startTime = myProps.startTime

  const con1 = touches(me, other, 'aa', randomizer, sensorRange)
  expect(timeIntersect(me, other)).toBeTruthy()
  const overlap = overlapsInTime(me, other)
  expect(overlap).toBeTruthy()
  expect(con1).toBeTruthy()
  if (con1) {
    const coords = con1.intersection as any
    expect(coords.coordinates).toEqual([0, 3])
    expect(coords.type).toEqual('Point')
    const myTime = timePeriodForGeom(me)
    const otherTime = timePeriodForGeom(other)
    const intersectionTime = timeIntersect2(myTime, otherTime)

    expect(con1.timeStart).toEqual(intersectionTime[0])
    expect(con1.timeEnd).toEqual(intersectionTime[1])
  }
})

it('generates full contact for polygon & line', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)

  const me = withTimes[17]
  const other = withTimes[18]
  me.geometry.geometry = simplePoly.geometry
  other.geometry.geometry = simpleLine.geometry

  // override the times
  const myProps = me.geometry.properties as PlannedProps
  const otherProps = other.geometry.properties as PlannedProps

  // give them the same time, we don't want it to fail because
  // they don't overlap in time
  myProps.startDate = otherProps.startDate
  myProps.endDate = otherProps.endDate
  myProps.startTime = otherProps.startTime
  myProps.endTime = otherProps.endTime

  // note: don't use the randomiser. We want to force the line to be generated
  const con1 = touches(me, other, 'aa', (): number => { return 0.1 }, sensorRange)
  expect(con1).toBeTruthy()
  if (con1) {
    const inter = con1.intersection as any
    expect(con1.intersection?.type).toEqual('LineString')
    expect(inter.coordinates.length).toEqual(2)
    expect(inter.coordinates[0]).toEqual([0, 2])
    expect(inter.coordinates[1]).toEqual([0, 4])
    const myTime = timePeriodForGeom(me)
    const otherTime = timePeriodForGeom(other)
    const intersectionTime = timeIntersect2(myTime, otherTime)
    expect(con1.timeStart).toEqual(intersectionTime[0])
    expect(con1.timeEnd).toEqual(intersectionTime[1])
  }
})
