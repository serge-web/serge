/* global expect it */

import resetCurrentLeg from '../../Components/Mapping/helpers/resetCurrentLeg'
import legs from '../Mocks/plannedLegs.json'

it('Correctly trims everything including and after turn number 3 ', () => {
  expect(resetCurrentLeg(legs, 3, {})).toEqual([{ route: ['H00', 'H01', 'H02', 'H03'], speed: 20, state: 'Transitting', turn: 1 }, { route: ['I04', 'I05', 'I06', 'I06'], speed: 20, state: 'Transitting', turn: 2 }])
})
