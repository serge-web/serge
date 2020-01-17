/* global it expect */
import handleVisibilityChanges from '../../../ActionsAndReducers/playerUi/helpers/handleVisibilityChanges'

const payload = [
  {
    force: 'Green',
    asset: 'Tanker-1',
    by: 'Blue',
    newVis: false
  }, {
    force: 'Green',
    asset: 'Tanker-1',
    by: 'Red',
    newVis: true
  }
]

const allForces 

it('correctly handle stuff', () => {
  expect(handleVisibilityChanges({ payload: payload }, allForces)).toBeTruthy()
})
