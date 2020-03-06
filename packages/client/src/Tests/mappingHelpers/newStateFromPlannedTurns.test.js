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
    status: { state: 'Transiting' }
  },
  {
    turn: 2,
    status: { state: 'Transiting' }
  },
  {
    turn: 3,
    status: { state: 'Fishing' }
  }]

const noLegs = []

it(' shifts first turn, and uses for state', () => {
  const legsCopy = JSON.parse(JSON.stringify(legs1))
  // check num states before
  expect(legsCopy.length).toEqual(3)
  const result = newStateFromPlannedTurns(legsCopy, { state: 'sitting' }, 'G09')
  expect(result.status.state).toEqual('Transiting')
  expect(result.status.speedKts).toEqual(20)
  expect(result.position).toEqual('H03')
  // check num states after
  expect(legsCopy.length).toEqual(2)
})

it(' shifts first turn, and uses for state, with asset location when state has no route', () => {
  const legsCopy = JSON.parse(JSON.stringify(legsWithNoSteps))
  // check num states before
  expect(legsCopy.length).toEqual(3)
  const result = newStateFromPlannedTurns(legsCopy, { state: 'sitting' }, 'G09')
  expect(result.status.state).toEqual('Transiting') // we still use state, even if no route
  expect(result.status.speedKts).toBeFalsy() // sample data doesn't have speed
  expect(result.position).toEqual('G09')
  // check num states after
  expect(legsCopy.length).toEqual(2)
})

it(' uses provided state, in the absence of any planned turns', () => {
  const legsCopy = JSON.parse(JSON.stringify(noLegs))
  // check num states before
  expect(legsCopy.length).toEqual(0)
  const result = newStateFromPlannedTurns(legsCopy, { state: 'pushing', speedKts: 12 }, 'G01')
  expect(result.status.state).toEqual('pushing') // we still use state, even if no route
  expect(result.status.speedKts).toEqual(12) // we still use state, even if no route
  expect(result.position).toEqual('G01')
  // check num states after
  expect(legsCopy.length).toEqual(0)
})
