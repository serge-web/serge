import { Phase } from '@serge/config'
import { mount } from 'enzyme'
import React from 'react'
import Mapping from '../mapping'

import { localMappingConstraints, platformTypes, watuWargame } from '@serge/mocks'
import InfoMarkers from '.'

const forces = watuWargame.data.forces.forces
const markers = watuWargame.data.annotations?.annotations || []

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

it('Mapping renders correctly with AsseticonURL', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const tree = mount(<Mapping
    mappingConstraints={localMappingConstraints}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    wargameInitiated={true}
    markerIcons={[]}
    platforms={platformTypes}
    isGameControl={true}
    isUmpire={true}
    playerForce="Blue"
    phase={Phase.Planning}
    turnNumber={5}
    infoMarkers={markers}
  ><InfoMarkers /></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
