import { geometriesFor, randomOrdersDocs } from './gen-order-data'

import { P9Mock, MockPlanningActivities, planningMessages } from '@serge/mocks'
import moment from 'moment'
import { MessagePlanning, PlannedActivityGeometry, PlannedProps } from '@serge/custom-types'
import L from 'leaflet'

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

interface GeomWithOrders extends PlannedActivityGeometry {
  activity: MessagePlanning
}

const invertMessages = (messages: MessagePlanning[]): GeomWithOrders[] => {
  const res: GeomWithOrders[] = []
  messages.forEach((message: MessagePlanning) => {
    if (message.message.location) {
      message.message.location.forEach((plan: PlannedActivityGeometry) => {
        const newItem = { ...plan, activity: message }
        res.push(newItem)
      })
    }
  })
  return res
}

const findPlannedGeometries = (orders: GeomWithOrders[], time: string, windowMins: number): GeomWithOrders[] => {
  const timeStart = moment(time)
  const timeEnd = moment(time).add(windowMins, 'm')
  const inWindow = orders.filter((value: GeomWithOrders) => {
    const props = value.geometry.properties as PlannedProps
    return moment(props.startDate).isSameOrBefore(timeEnd) && moment(props.endDate).isSameOrAfter(timeStart)
  })
  return inWindow
}
const clean = (val: number): number => {
  const scalar = 1000
  return Math.floor(val * scalar) / scalar
}

const cleanCoords = (data: number[][]): number[][] => {
  return [[clean(data[0][0]), clean(data[0][1])], [clean(data[1][0]), clean(data[1][1])]]
}

const spatialBinning = (orders: GeomWithOrders[], binsPerSize: number): number => {
  let bounds: L.LatLngBounds | undefined
  orders.forEach((geom: GeomWithOrders) => {
    const geoAny = geom.geometry.geometry as any
    geoAny.coordinates.forEach((point: number[]) => {
      const pt = L.latLng(point[1], point[0])
      if (!bounds) {
        bounds = L.latLngBounds(pt, pt)
      } else {
        bounds.extend(pt)
      }
    })
  })
  console.log('outer bounds', bounds)
  const boxes = []
  if (bounds) {
    const height = bounds.getNorth() - bounds.getSouth()
    const width = bounds.getEast() - bounds.getWest()
    const heightDelta = height / binsPerSize
    const widthDelta = width / binsPerSize
    for (let x = 0; x <= binsPerSize; x++) {
      for (let y = 0; y < binsPerSize; y++) {
        const bX = clean(bounds.getWest() + x * widthDelta)
        const bY = clean(bounds.getSouth() + y * heightDelta)
        const tX = clean(bX + widthDelta)
        const tY = clean(bY + heightDelta)
        const bbox = cleanCoords([[bY, bX], [tY, tX]])
        const poly = [[[bX, bY], [tX, bY], [tX, tY], [bX, tY], [bX, bY]]]
        console.log(poly)
        // pushGeo(poly)
        boxes.push(bbox)
      }
    }
  }
  console.log(boxes)
  return 2 + boxes.length
}

it('bins overlaps for time', () => {
  const time = '2022-11-15T00:00:00.000Z'
  const orders = invertMessages(planningMessages)
  const binsInWindow = findPlannedGeometries(orders, time, 30)
  console.log(binsInWindow.length)
  // now do spatial binning
  const bins = spatialBinning(binsInWindow, 2)
  console.log(bins)
})
