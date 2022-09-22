import { randomOrdersDocs } from "./gen-order-data"

import { P9Mock } from '@serge/mocks'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]


it('produces order data', () => {
  const numOrders = 20
  const orders = randomOrdersDocs(numOrders, forces, [blueForce.uniqid, redForce.uniqid])
  expect(orders).toBeTruthy()
  expect(orders.length).toEqual(numOrders)
})