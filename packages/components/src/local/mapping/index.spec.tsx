/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import Mapping from './index'
import { Phase } from '@serge/config'

/* Import mock data */
import { watuWargame, smallScaleMappingConstraints } from '@serge/mocks'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

it('Mapping renders correctly', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {smallScaleMappingConstraints}
    forces = {forces}
    gameTurnTime = {{ unit: 'millis', millis: 72000 }}
    wargameInitiated = {true}
    markerIcons={[]}
    playerForce = 'Blue'
    infoMarkers={[]}
    isGameControl = {true}
    platforms = {platformTypes}
    phase = {Phase.Planning}
    turnNumber = {4}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
