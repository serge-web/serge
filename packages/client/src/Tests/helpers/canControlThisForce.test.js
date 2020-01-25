/* global it expect */

import canControlThisForce from '../../Components/Mapping/helpers/canControlThisForce'
import allForces from '../Mocks/allForces.json'
import { UMPIRE_FORCE } from '../../consts'

it('lets red control its own assests', () => {
  expect(canControlThisForce(allForces, 'RedId', 'RedId')).toBeTruthy()
})

it('Red can\'t control other assets', () => {
  expect(canControlThisForce(allForces, 'RedId', 'BlueId')).toBeFalsy()
})

it('White can control green', () => {
  expect(canControlThisForce(allForces, 'GreenId', UMPIRE_FORCE)).toBeTruthy()
})

it('White can\t control red', () => {
  expect(canControlThisForce(allForces, 'RedId', UMPIRE_FORCE)).toBeFalsy()
})
