/* global expect it */

import resetLegsFrom from '../../Components/Mapping/helpers/resetLegsFrom'
import legs from '../Mocks/plannedLegs.json'

it('Correctly trims everything after turn number 2', () => {
  expect(resetLegsFrom(legs, 2, {})).toEqual([{ route: ['H00', 'H01', 'H02', 'H03'], status: { state: 'Transiting', speedKts: 20 }, turn: 1 }, { route: ['I04', 'I05', 'I06', 'I06'], status: { state: 'Transiting', speedKts: 20 }, turn: 2 }])
})
