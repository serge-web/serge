
/* Import mock data */
import { atlanticForces } from '@serge/mocks'

import duplicateForce from '../duplicate-force'

it('check complex force duplicated', () => {
  const origin = atlanticForces[1]
  const dupe = duplicateForce(origin)
  expect(dupe).toBeTruthy()

  expect(dupe.uniqid).not.toEqual(origin.uniqid)
  expect(dupe.roles[0].roleId).not.toEqual(origin.roles[0].roleId)
  expect(dupe.roles[0].name).not.toEqual(origin.roles[0].name)
  expect(dupe.assets && dupe.assets.length).toBeTruthy()
  if (dupe.assets && origin.assets) {
    expect(dupe.assets[0].uniqid).not.toEqual(origin.assets[0].uniqid)
    if (dupe.assets[0].comprising && origin.assets[0].comprising) {
      expect(dupe.assets[0] && dupe.assets[0].comprising.length).toBeTruthy()
      expect(dupe.assets[0].comprising[0].uniqid).not.toEqual(origin.assets[0].comprising[0].uniqid)

      if (dupe.assets[0].comprising[0].hosting && origin.assets[0].comprising[0].hosting) {
        expect(dupe.assets[0].comprising[0].hosting[0].uniqid).not.toEqual(origin.assets[0].comprising[0].hosting[0].uniqid)
        expect(dupe.assets[0].comprising[0].hosting[0].name).not.toEqual(origin.assets[0].comprising[0].hosting[0].name)
        expect(dupe.assets[0].comprising[0].hosting[0].contactId).not.toEqual(origin.assets[0].comprising[0].hosting[0].contactId)
      }
    }
  }
})
