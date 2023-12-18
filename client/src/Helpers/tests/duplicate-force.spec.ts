
/* Import mock data */
import { atlanticForces } from 'src/mocks'

import duplicateForce from '../duplicate-force'

it('check complex force duplicated', () => {
  const origin = atlanticForces[1]
  const dupe = duplicateForce(origin)
  expect(dupe).toBeTruthy()

  expect(dupe.uniqid).not.toEqual(origin.uniqid)
  expect(dupe.roles[0].roleId).not.toEqual(origin.roles[0].roleId)
  expect(dupe.roles[0].name).not.toEqual(origin.roles[0].name)
})
