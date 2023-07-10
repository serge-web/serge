import { forces } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'
import { getUniquePasscode } from '../'

const allForces: ForceData[] = forces

it('Check force role unique passcode', () => {
  const res = getUniquePasscode(allForces, 'P')
  expect(res).toBeTruthy()
  expect(res).not.toEqual('rkrlw6f5m')
})

it('Check force role unique passcode return value', () => {
  const res = getUniquePasscode(allForces, 'R')
  expect(res).toBeTruthy()
})
