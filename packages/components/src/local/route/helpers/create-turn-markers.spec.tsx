/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { plannedRoutesFor } from './planned-routes-for'
import RouteData from '../types/route-data'
import createTurnMarkers from './create-turn-markers'


it('Provides valid history for multi-point history without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, forces, 'Red', platformTypes, undefined, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route && route.currentLocation) {
    const data: RouteData = plannedRoutesFor(route.currentLocation, route.planned)
    expect(data.turnEnds.length).toEqual(5)
    const clearTurn = (turnNumber: number): void => {
      console.log('clearing', turnNumber)
    }
    const markers: JSX.Element[] = createTurnMarkers(data, 'planned', 'aaa', true, clearTurn)
    expect(markers).toBeTruthy()
    expect(markers.length).toEqual(5)

    // check the labels
    expect(markers[0].props.children.props.children[0].props.icon.options.html).toEqual('<text>T02: Transiting @ 10kts</text>')
    expect(markers[1].props.children.props.children[0].props.icon.options.html).toEqual('<text>T02: Fishing</text>')
    // expect(first.props.length).toEqual(5)
  } else {
    expect(false).toBeTruthy()
  }
})
