import { Phase } from 'src/config'
import { forces, localMappingConstraints, platformTypes } from 'src/mocks'
import { mount } from 'enzyme'
import L from 'leaflet'
import React from 'react'
import Mapping from '../mapping'
import { MapIcon } from './index'

jest.mock('leaflet', () => {
  const leaflet = jest.requireActual('leaflet')
  return {
    ...leaflet,
    Symbol: {
      ...leaflet.Symbol,
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

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const tree = mount(<Mapping
    mappingConstraints={localMappingConstraints}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    infoMarkers={[]}
    wargameInitiated={true}
    platforms={platformTypes}
    playerForce='blue'
    markerIcons={[]}
    isGameControl={true}
    isUmpire={true}
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
