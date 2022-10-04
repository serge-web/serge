import { geometriesFor, randomOrdersDocs } from './gen-order-data'

import { P9Mock, MockPlanningActivities } from '@serge/mocks'

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
    const orders = geometriesFor(ownAssets, targets, activity, 22)
    expect(orders).toBeTruthy()
    expect(orders.length).toEqual(3)
    const geom = orders[1].geometry.geometry as any
    expect(geom.coordinates).toBeTruthy()
    expect(geom.coordinates.length).toEqual(1)
    expect(geom.coordinates[0].length).toEqual(2)
    expect(geom.coordinates[0][0].length).toEqual(2)
  }
})
