/* global expect it */

import submitClearLastLeg from '../../Components/Mapping/helpers/submitClearLastLeg'
import legs from '../Mocks/plannedLegs.json'

it('Correctly returns an array without the last turn', () => {
  expect(submitClearLastLeg(legs)).toEqual([{ route: ['H00', 'H01', 'H02', 'H03'], speed: 20, state: 'Transitting', turn: 1 }, { route: ['I04', 'I05', 'I06', 'I06'], speed: 20, state: 'Transitting', turn: 2 }, { route: ['I07', 'I08', 'I09', 'I10'], speed: 20, state: 'Transitting', turn: 3 }, { route: ['I11', 'J11', 'J12', 'J13'], speed: 20, state: 'Transitting', turn: 4 }])
})
