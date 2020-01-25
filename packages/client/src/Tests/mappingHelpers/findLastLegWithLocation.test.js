/* global expect it */

import findLastRouteLocation from '../../Components/Mapping/helpers/findLastRouteLocation'

const legs1 = [
  {
    turn: 1,
    route: [
      'H00',
      'H01',
      'H02',
      'H03'
    ],
    status: { state: 'Transiting', speedKts: 20 }
  },
  {
    turn: 2,
    route: [
      'I04',
      'I05',
      'I06',
      'I06'
    ],
    status: { state: 'Transiting', speedKts: 20 }
  },
  {
    turn: 3,
    status: { state: 'Fishing' }
  }]

const legsWithNoSteps = [
  {
    turn: 1,
    status: { state: 'Transiting', speedKts: 20 }
  },
  {
    turn: 2,
    status: { state: 'Transiting', speedKts: 20 }
  },
  {
    turn: 3,
    status: { state: 'Transiting', speedKts: 20 }
  }]

const legsEmpty = []

it('Finds last route that contains a hex location', () => {
  expect(findLastRouteLocation(legs1, 'I10')).toEqual('I06')
})

it('Returns default location for route with no mobile steps', () => {
  expect(findLastRouteLocation(legsWithNoSteps, 'I10')).toEqual('I10')
})

it('Returns default location for empty', () => {
  expect(findLastRouteLocation(legsEmpty, 'I10')).toEqual('I10')
})
