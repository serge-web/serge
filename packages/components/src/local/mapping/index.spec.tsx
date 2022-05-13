/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import Mapping from './index'
import { Phase } from '@serge/config'

/* Import mock data */
import { forces, platformTypes, localMappingConstraints } from '@serge/mocks'

it('Mapping renders correctly', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {localMappingConstraints}
    forces = {forces}
    gameTurnTime = {72000}
    wargameInitiated = {true}
    playerForce = 'Blue'
    infoMarkers={[]}
    canSubmitOrders = {true}
    platforms = {platformTypes}
    phase = {Phase.Planning}
    turnNumber = {4}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
