/* global it expect */
import L from 'leaflet'
import React from 'react'
import { mount } from 'enzyme'

import AssetIcon from './index'
import Mapping from '../mapping'
import { Phase } from '@serge/config'

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
    platformTypesByKey={platformTypesByKey}
    playerForce = 'blue'
    canSubmitOrders = {true}
    phase = {Phase.Planning}
    turnNumber={5}
  ><AssetIcon uniqid='id1' contactId='C324' name="Jeffrey" position={L.latLng(13.298034302, 43.0488191271)}
      selected={false} type='agi' force='blue' perceivedForceColor='#0f0'
      attributes={[]}
      perceivedForceClass='blue' visibleTo={['blue']} status={ { speedKts: 10, state: 'Working' }}
      tooltip='Tooltip for marker'/></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
