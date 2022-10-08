import { Phase } from '@serge/config'
import { deepCopy } from '@serge/helpers'
import { localMappingConstraints, watuWargame } from '@serge/mocks'
import { mount } from 'enzyme'
import React from 'react'
import Mapping from '../mapping'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

it('Mapping renders correctly with HexGrid', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const tree = mount(<Mapping
    mappingConstraints={localMappingConstraints}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    wargameInitiated={true}
    markerIcons={[]}
    platforms={platformTypes}
    playerForce={'Blue'}
    infoMarkers={[]}
    isGameControl={true}
    isUmpire={true}
    phase={Phase.Planning}
    turnNumber={5}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
