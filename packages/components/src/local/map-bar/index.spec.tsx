/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import { Phase } from '@serge/config'

import Mapping from '../mapping'
import MapBar from '.'

/* Import mock data */
import { forces, platformTypes, platformTypesByKey, localMappingConstraints } from '@serge/mocks'

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {localMappingConstraints}
    forces = {forces}
    gameTurnTime = {72000}
    wargameInitiated = {true}
    platforms = {platformTypes}
    platformTypesByKey = {platformTypesByKey}
    playerForce = 'blue'
    canSubmitOrders = {false}
    phase={Phase.Planning}
    turnNumber={5}
  ><MapBar /></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
