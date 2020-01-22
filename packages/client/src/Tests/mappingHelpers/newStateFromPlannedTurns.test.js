/* global expect it */

import newStateFromPlannedTurns from '../../Components/Mapping/helpers/newStateFromPlannedTurns'

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
    state: 'Transiting'
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
    state: 'Transiting'
  },
  {
    turn: 3,
    state: 'Fishing'
  }]

const legsWithNoSteps = [
  {
    turn: 1,
    state: 'Transiting'
  },
  {
    turn: 2,
    state: 'Transiting'
  },
  {
    turn: 3,
    state: 'Fishing'
  }]

const noLegs = []

it(' shifts first turn, and uses for state', () => {
  const legsCopy = JSON.parse(JSON.stringify(legs1))
  // check num states before
  expect(legsCopy.length).toEqual(3)
  const result = newStateFromPlannedTurns(legsCopy, 'sitting', 'G09')
  expect(result.state).toEqual('Transiting')
  expect(result.position).toEqual('H03')
  // check num states after
  expect(legsCopy.length).toEqual(2)
})

it(' shifts first turn, and uses for state, with asset location when state has no route', () => {
  const legsCopy = JSON.parse(JSON.stringify(legsWithNoSteps))
  // check num states before
  expect(legsCopy.length).toEqual(3)
  const result = newStateFromPlannedTurns(legsCopy, 'sitting', 'G09')
  expect(result.state).toEqual('Transiting') // we still use state, even if no route
  expect(result.position).toEqual('G09')
  // check num states after
  expect(legsCopy.length).toEqual(2)
})

it(' uses provided state, in the absence of any planned turns', () => {
  const legsCopy = JSON.parse(JSON.stringify(noLegs))
  // check num states before
  expect(legsCopy.length).toEqual(0)
  const result = newStateFromPlannedTurns(legsCopy, 'sitting', 'G01')
  expect(result.state).toEqual('sitting') // we still use state, even if no route
  expect(result.position).toEqual('G01')
  // check num states after
  expect(legsCopy.length).toEqual(0)
})
