/* global expect it */

import resetLegsFrom from '../../Components/Mapping/helpers/resetLegsFrom'
import legs from '../Mocks/plannedLegs.json'

it('Correctly trims everything after turn number 2', () => {
  expect(resetLegsFrom(legs, 2, {})).toEqual([{ route: ['H00', 'H01', 'H02', 'H03'], speed: 20, state: 'Transitting', turn: 1 }, { route: ['I04', 'I05', 'I06', 'I06'], speed: 20, state: 'Transitting', turn: 2 }])
})
