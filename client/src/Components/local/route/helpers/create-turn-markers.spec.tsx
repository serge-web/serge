/* global it expect */

import { watuWargame } from '@serge/mocks'
import { RouteStore, Route, ChannelMapping } from 'src/custom-types'
import { routeCreateStore } from 'src/Helpers'
import { plannedRoutesFor } from './planned-routes-for'
import RouteData from '../types/route-data'
import createTurnMarkers, { PLANNED_MARKER } from './create-turn-markers'
import { Phase } from 'src/config'
import React from 'react'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []
const mappingChan = watuWargame.data.channels.channels[1] as ChannelMapping
const blueCo = forces[1].roles[0]
const showSteps = false

it('Provides valid planned markers for multi-point planned route without filter', () => {
  const store: RouteStore = routeCreateStore(undefined, Phase.Adjudication, forces, forces[1].uniqid, blueCo.roleId, false,
    platformTypes, showSteps, showSteps, false, undefined, mappingChan)
  expect(store.routes.length).toEqual(6)
  const route: Route | undefined = store.routes.find(route => route.uniqid === 'nortID')
  expect(route).toBeTruthy()
  if (route && route.currentLocation2) {
    let turnToDelete = 0
    const data: RouteData = plannedRoutesFor(route.currentLocation2, route.planned)
    expect(data.turnEnds.length).toEqual(2)
    const clearTurn = (turnNumber: number): void => {
      turnToDelete = turnNumber
    }
    const markers: React.ReactElement[] = createTurnMarkers(data, PLANNED_MARKER, 'aaa', true, clearTurn)
    expect(markers).toBeTruthy()
    expect(markers.length).toEqual(2)

    // check the labels
    expect(markers[0].props.children.props.children[0].props.icon.options.html).toEqual('<text>T01: Transiting @ 20kts</text>')
    expect(markers[1].props.children.props.children[0].props.icon.options.html).toEqual('<text>T02: Moored</text>')

    // check clear hasn't been called
    expect(turnToDelete).toEqual(0)

    // call the clear event
    markers[0].props.children.props.children[1].props.children.props.children.props.onClick()

    expect(turnToDelete).toEqual(1)

    // expect(first.props.length).toEqual(5)
  } else {
    expect(false).toBeTruthy()
  }
})
