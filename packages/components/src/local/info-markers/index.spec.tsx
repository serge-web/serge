/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import Mapping from '../mapping'
import { Phase } from '@serge/config'

/* Import mock data */
import { platformTypes, localMappingConstraints, watuWargame } from '@serge/mocks'
import InfoMarkers from '.'

const forces = watuWargame.data.forces.forces
const markers = watuWargame.data.annotations?.annotations || []

it('Mapping renders correctly with AsseticonURL', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {localMappingConstraints}
    forces={forces}
    gameTurnTime = {72000}
    wargameInitiated = {true}
    markerIcons={[]}
    platforms = {platformTypes}
    isGameControl = {true}
    playerForce="Blue"
    phase={Phase.Planning}
    turnNumber={5}
    infoMarkers={markers}
  ><InfoMarkers/></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
