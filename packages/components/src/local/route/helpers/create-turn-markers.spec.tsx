/* global it expect */

import { forces, platformTypes } from '@serge/mocks'
import { RouteStore, Route } from '@serge/custom-types'
import { routeCreateStore } from '@serge/helpers'
import { plannedRoutesFor } from './planned-routes-for'
import RouteData from '../types/route-data'
import createTurnMarkers from './create-turn-markers'
import { Phase } from '@serge/config'

it('Provides valid planned markers for multi-point planned route without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, 'Red', 'role-id', platformTypes, false, false)
  expect(store.routes.length).toEqual(9)
  const route: Route | undefined = store.routes.find(route => route.name === 'Dhow-B')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    let turnToDelete = 0
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(5)
    const clearTurn = (turnNumber: number): void => {
      turnToDelete = turnNumber
    }
    const markers: JSX.Element[] = createTurnMarkers(data, 'planned', 'aaa', true, clearTurn)
    expect(markers).toBeTruthy()
    expect(markers.length).toEqual(5)

    // check the labels
    expect(markers[0].props.children.props.children[0].props.icon.options.html).toEqual('<text>T03: Transiting @ 10kts</text>')
    expect(markers[1].props.children.props.children[0].props.icon.options.html).toEqual('<text>T04: Fishing</text>')
    expect(markers[2].props.children.props.children[0].props.icon.options.html).toEqual('<text>T05: Fishing</text>')
    expect(markers[3].props.children.props.children[0].props.icon.options.html).toEqual('<text>T06: Transiting @ 20kts</text>')
    expect(markers[4].props.children.props.children[0].props.icon.options.html).toEqual('<text>T07: Transiting @ 30kts</text>')

    // check clear hasn't been called
    expect(turnToDelete).toEqual(0)

    // call the clear event
    markers[3].props.children.props.children[1].props.children.props.children.props.onClick()

    expect(turnToDelete).toEqual(6)

    // expect(first.props.length).toEqual(5)
  } else {
    expect(false).toBeTruthy()
  }
})
