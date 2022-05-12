/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import Mapping from '../mapping'
import { Phase } from '@serge/config'

/* Import mock data */
import { platformTypesByKey, localMappingConstraints, watuWargame } from '@serge/mocks'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

it('Mapping renders correctly with HexGrid', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {localMappingConstraints}
    forces={forces}
    gameTurnTime = {72000}
    wargameInitiated = {true}
    platforms = {platformTypes}
    playerForce={'Blue'}
    infoMarkers={[]}
    canSubmitOrders = {true}
    phase={Phase.Planning}
    turnNumber={5}
    platformTypesByKey={platformTypesByKey}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
