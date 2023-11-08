/* global it expect */
import { RouteTurn } from 'src/custom-types'

import routeGetLatestPosition from '../route-get-latest-position'

it('returns current with nothing planned', () => {
  expect(routeGetLatestPosition('A12', undefined)).toEqual('A12')
})

it('returns current with route with no steps', () => {
  const route:Array<RouteTurn> = []
  expect(routeGetLatestPosition('A12', route)).toEqual('A12')
})

it('returns current with route with no positions', () => {
  const route:Array<RouteTurn> = [
    { status: { state: 'bbq' }, turn: 3 },
    { status: { state: 'bbq' }, turn: 4 }
  ]
  expect(routeGetLatestPosition('A12', route)).toEqual('A12')
})

it('returns current with route with positions', () => {
  const route:Array<RouteTurn> = [
    { status: { state: 'bbq' }, route: ['B1', 'B2'], turn: 3 },
    { status: { state: 'bbq' }, route: ['C1', 'C2'], turn: 4 }
  ]
  expect(routeGetLatestPosition('A12', route)).toEqual('C2')
})

it('returns current with route with no position for last step', () => {
  const route:Array<RouteTurn> = [
    { status: { state: 'bbq' }, route: ['B1', 'B2'], turn: 3 },
    { status: { state: 'bbq' }, turn: 4 }
  ]
  expect(routeGetLatestPosition('A12', route)).toEqual('B2')
})
