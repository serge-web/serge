import { P9Mock } from 'src/mocks'
import { createPerceptions } from './gen-test-mapping-data'

const forces = P9Mock.data.forces.forces
const blueForce = forces[1]
const redForce = forces[2]
const asset = blueForce.assets && blueForce.assets[0]

let randomiser = 2.9

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
    const pOne = perceptions[0]
    expect(pOne.by).toEqual(redForce.uniqid)
    expect(pOne.name).toEqual(asset.name)
    expect(pOne.typeId).toEqual(asset.platformTypeId)
    expect(pOne.force).toEqual(blueForce.uniqid)

    const perceptions2 = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
    expect(perceptions2).toBeTruthy()
    expect(perceptions2.length).toEqual(2)

    const perceptions3 = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
    expect(perceptions3).toBeTruthy()
    expect(perceptions3.length).toEqual(2)

    const perceptions4 = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
    expect(perceptions4).toBeTruthy()
    expect(perceptions4.length).toEqual(2)

    const perceptions5 = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
    expect(perceptions5).toBeTruthy()
    expect(perceptions5.length).toEqual(2)

    const perceptions6 = createPerceptions(asset, blueForce.uniqid, forces, localDoesIt)
    expect(perceptions6).toBeTruthy()
    expect(perceptions6.length).toEqual(2)
  }
})
