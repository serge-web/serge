/* global it expect */
import { Phase } from 'src/config'
import { mount } from 'enzyme'
import React from 'react'
import MapBar from '.'
import Mapping from '../mapping'

import { forces, localMappingConstraints, platformTypes } from '@serge/mocks'

jest.mock('leaflet', () => {
  const leafletModule = jest.requireActual('leaflet')
  const mockLeafletModule = {
    ...leafletModule,
    Symbol: {
      arrowHead: jest.fn()
    }
  };
  return mockLeafletModule
})

jest.mock('react-leaflet-v4', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints={localMappingConstraints}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    wargameInitiated={true}
    platforms={platformTypes}
    infoMarkers={[]}
    markerIcons={[]}
    playerForce='blue'
    isGameControl={false}
    isUmpire={true}
    phase={Phase.Planning}
    turnNumber={5}
  ><MapBar /></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
