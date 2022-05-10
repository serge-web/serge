/* global it expect */
import { Phase } from '@serge/config'
/* Import mock data */
import { forces, localMappingConstraints, platformTypes, platformTypesByKey } from '@serge/mocks'
import { mount } from 'enzyme'
import L from 'leaflet'
import React from 'react'
import Mapping from '../mapping'
import { MapIcon } from './index'

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints={localMappingConstraints}
    forces={forces}
    gameTurnTime={72000}
    infoMarkers={[]}
    wargameInitiated={true}
    platforms={platformTypes}
    platformTypesByKey={platformTypesByKey}
    playerForce='blue'
    canSubmitOrders={true}
    phase={Phase.Planning}
    turnNumber={5}
  >
    <MapIcon uniqid='id1' contactId='C324' name="Jeffrey" position={L.latLng(13.298034302, 43.0488191271)}
      selected={false} typeId='dummy-id' force='blue' perceivedForceColor='#0f0'
      attributes={[]}
      visibleTo={['blue']} status={{ speedKts: 10, state: 'Working' }}
      tooltip='Tooltip for marker' />
  </Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
