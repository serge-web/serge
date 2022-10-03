import React from 'react'
import { mount } from 'enzyme'
import Mapping from '../mapping'
import { Phase } from '@serge/config'

import { localMappingConstraints, watuWargame } from '@serge/mocks'
import { deepCopy } from '@serge/helpers'

const forces = deepCopy(watuWargame.data.forces.forces)
const platformTypes = watuWargame.data.platformTypes ? watuWargame.data.platformTypes.platformTypes : []

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
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
