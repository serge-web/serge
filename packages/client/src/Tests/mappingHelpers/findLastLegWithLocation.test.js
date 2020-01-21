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
    speed: 20,
    state: 'Transitting'
  },
  {
    turn: 2,
    route: [
      'I04',
      'I05',
      'I06',
      'I06'
    ],
    speed: 20,
    state: 'Transitting'
  },
  {
    turn: 3,
    state: 'Fishing'
  }]

const legsWithNoSteps = [
  {
    turn: 1,
    state: 'Transitting'
  },
  {
    turn: 2,
    state: 'Transitting'
  },
  {
    turn: 3,
    state: 'Fishing'
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
