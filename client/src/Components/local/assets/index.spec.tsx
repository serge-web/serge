import React from 'react'
import { mount } from 'enzyme'
import Mapping from '../mapping'
import { Phase } from 'src/config'

import { localMappingConstraints, watuWargame } from '@serge/mocks'
import { deepCopy } from 'src/Helpers'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

jest.mock('leaflet', () => {
  const leafletModule = jest.requireActual('leaflet')
  return {
    ...leafletModule,
    Symbol: {
      arrowHead: jest.fn()
    }
  }
})

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
    platforms={platformTypes}
    markerIcons={[]}
    isGameControl={true}
    isUmpire={true}
    playerForce="Blue"
    phase={Phase.Planning}
    infoMarkers={[]}
    turnNumber={5}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
