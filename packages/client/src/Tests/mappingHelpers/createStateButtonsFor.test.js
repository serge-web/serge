/* global it expect */

import createStateButtonsFor from '../../Components/Mapping/helpers/createStateButtonsFor'

it('creates the required state buttons', () => {
  const pType = {
    speedKts: [10, 20, 30],
    states: {
      Fishing: {mobile:false},
      Transitting: {mobile: true}
    }
  }
  expect(createStateButtonsFor(null, null)).toBeTruthy()
})

