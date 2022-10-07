import { GroupedActivitySet, PerForcePlanningActivitySet, PlannedProps, PlanningActivity } from '@serge/custom-types'
import { deepCopy } from '@serge/helpers'
import { MockPerForceActivities, MockPlanningActivities, P9Mock, planningMessages } from '@serge/mocks'
import * as turf from '@turf/turf'
import moment from 'moment'
import { findActivity, findPlannedGeometries, geometriesFor, GeomWithOrders, injectTimes, invertMessages, overlapsInTime, putInBin, randomOrdersDocs, spatialBinning, timeIntersect, touches } from './gen-order-data'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]

const planningActivities = MockPlanningActivities
const perForcePlanningActivities = MockPerForceActivities
const activities: PerForcePlanningActivitySet[] = perForcePlanningActivities.map((force: PerForcePlanningActivitySet): PerForcePlanningActivitySet => {
  return {
    force: force.force,
    groupedActivities: force.groupedActivities.map((group: GroupedActivitySet): GroupedActivitySet => {
      const res: GroupedActivitySet = {
        category: group.category,
        activities: group.activities.map((act: PlanningActivity | string): PlanningActivity => {
          if (typeof act === 'string') {
            const actId = act as string
            const activity = planningActivities.find((act: PlanningActivity) => act.uniqid === actId)
            if (!activity) {
              throw Error('Planning activity not found:' + actId)
            }
            return activity
          } else {
            return act
          }
        })
      }
      return res
    })
  }
})

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

it('finds activities', () => {
  const activity = activities[0].groupedActivities[1].activities[1] as PlanningActivity
  const found = findActivity((activity.geometries && activity.geometries[1].uniqid) || '', activities[0].force, activities)
  expect(found).toBeTruthy()
  expect(found).toEqual(activity.geometries && activity.geometries[1].name)
})

it('bins overlaps for time', () => {
  const time = '2022-11-15T00:00:00.000Z'
  const orders = invertMessages(deepCopy(planningMessages), activities)
  const binsInTimeWindow = findPlannedGeometries(orders, time, 30)
  // now do spatial binning
  const bins = spatialBinning(binsInTimeWindow, 6)

  const binnedOrders = putInBin(orders, bins)
  expect(binnedOrders).toBeTruthy()
  expect(binnedOrders.length).toEqual(36)
})

it('fills in time values', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  expect(withTimes.length).toEqual(22)
  expect(withTimes[1].geometry.properties).toBeTruthy()
  expect(withTimes[1].geometry.properties?.startTime).toEqual(1668475200000)
  expect(overlapsInTime(withTimes[1], withTimes[4])).toBeTruthy()
  expect(overlapsInTime(withTimes[0], withTimes[2])).toBeFalsy()
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

it('generates time intersection', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  const me = withTimes[4]
  const other = withTimes[11]
  const noOverlap = withTimes[12]
  const contact = timeIntersect(me, other)
  const meProps = me.geometry.properties as PlannedProps
  expect(contact).toBeTruthy()
  expect(contact[0]).toEqual(meProps.startTime)
  expect(contact[1]).toEqual(meProps.endTime)

  // try offering them in reverse order
  const contact2 = timeIntersect(other, me)
  const meProps2 = me.geometry.properties as PlannedProps
  expect(contact2).toBeTruthy()
  expect(contact2[0]).toEqual(meProps2.startTime)
  expect(contact2[1]).toEqual(meProps2.endTime)

  // do test for non-overlapping geometries
  const contact3 = timeIntersect(me, noOverlap)
  expect(contact3).toBeTruthy()
  expect(contact3.length).toEqual(0)
})

const randomizer = (): number => {
  return 0.5
}

it('does some diagnostics', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  expect(withTimes.length).toEqual(22)
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
          const con2 = touches(geom1, geom2, 'aa', randomizer)
          if (con2) {
            console.log('touches', index1, index2, overlapsInTime(geom1, geom2), show(geom1), show(geom2))
          }
          if (overlapsInTime(geom1, geom2)) {
            const con1 = touches(geom1, geom2, 'aa', randomizer)
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
  expect(withTimes.length).toEqual(22)

  const me = withTimes[4]
  const other = withTimes[17]
  const id = 'aa'
  const con1 = touches(me, other, id, randomizer)
  expect(con1).toBeTruthy()
  if (con1) {
    const myProps = me.geometry.properties as PlannedProps
    const otherProps = other.geometry.properties as PlannedProps
    expect(con1.timeStart).toEqual(myProps.startTime)
    expect(con1.timeEnd).toEqual(otherProps.endTime)
    expect(con1.id).toEqual(id)
  }
})

it('generates full contact for polygon & point', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  expect(withTimes.length).toEqual(22)

  const me = withTimes[17]
  const other = withTimes[20]

  // move the point into the polygon
  const myGeom = me.geometry.geometry as any
  expect(myGeom.type).toEqual('Polygon')
  const otherGeom = other.geometry.geometry as any
  expect(otherGeom.type).toEqual('Point')
  otherGeom.coordinates[0] = myGeom.coordinates[0][0][0]

  const con1 = touches(me, other, 'aa', randomizer)
  expect(timeIntersect(me, other)).toBeTruthy()
  const overlap = overlapsInTime(me, other)
  expect(overlap).toBeTruthy()
  expect(con1).toBeTruthy()
  if (con1) {
    const otherProps = other.geometry.properties as PlannedProps
    expect(con1.timeStart).toEqual(otherProps.startTime)
    expect(con1.timeEnd).toEqual(otherProps.endTime)
  }
})

it('generates full contact for polygon & line', () => {
  const messages = deepCopy(planningMessages)
  const orders = invertMessages(messages, activities)
  const withTimes = injectTimes(orders)
  expect(withTimes.length).toEqual(22)

  const me = withTimes[17]
  const other = withTimes[18]
  const con1 = touches(me, other, 'aa', randomizer)
  expect(con1).toBeTruthy()
  if (con1) {
    // TODO: implement moving along the line
    expect(con1.timeStart).toEqual(1668477000000)
    expect(con1.timeEnd).toEqual(1668477000000)
  }
})
