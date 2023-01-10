/* global it expect */
import { Phase } from '@serge/config'
import { mount } from 'enzyme'
import React from 'react'
import Mapping from './index'

import { smallScaleMappingConstraints, watuWargame } from '@serge/mocks'

const forces = watuWargame.data.forces.forces
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  Symbol: {
    arrowHead: jest.fn()
  }
}))

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

it('Mapping renders correctly', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const tree = mount(<Mapping
    mappingConstraints={smallScaleMappingConstraints}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    wargameInitiated={true}
    markerIcons={[]}
    playerForce='Blue'
    infoMarkers={[]}
    isGameControl={true}
    isUmpire={true}
    platforms={platformTypes}
    phase={Phase.Planning}
    turnNumber={4}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
