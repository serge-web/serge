import { createPerceptions } from "./gen-test-data"
import { P9Mock } from '@serge/mocks'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const asset = blueForce.assets && blueForce.assets[0]

var randomiser = 2.9

it('checks if can produce ij index for large bounds', () => {
  expect(asset).toBeTruthy()

  // create random generator that produces predictable sequence of results
  const localDoesIt = (): boolean => {
    const root = Math.floor(randomiser)
    const decimal = randomiser - root
    randomiser = decimal * 1.7
    return decimal > 0.3
  }
  if (asset) {
    const perceptions = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
    expect(perceptions).toBeTruthy()
    expect(perceptions.length).toEqual(2)
    for (var i=0;i<14;i++)  {
      const perceptions = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
      console.log(i, perceptions)
    }
  }
})
