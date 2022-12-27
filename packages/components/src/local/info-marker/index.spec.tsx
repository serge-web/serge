import { Phase } from '@serge/config'
import { MapAnnotation } from '@serge/custom-types'
import { forces, localMappingConstraints, platformTypes, watuWargame } from '@serge/mocks'
import { mount } from 'enzyme'
import { h3ToGeo } from 'h3-js'
import L from 'leaflet'
import React from 'react'
import Mapping from '../mapping'
import InfoMarker from './index'

const marker: MapAnnotation | undefined = watuWargame.data.annotations && watuWargame.data.annotations[0]

const coords = marker && h3ToGeo(marker.location)
const location = coords && L.latLng(coords[0], coords[1])
const icons = watuWargame.data.annotationIcons ? watuWargame.data.annotationIcons.markers : []

jest.mock('leaflet', () => ({
  ...jest.requireActual('leaflet'),
  Symbol: {
    arrowHead: jest.fn()
  }
}))

jest.mock('react-leaflet-v3', () => ({
  useMap: (): jest.Mock => jest.fn()
}))

jest.mock('react-leaflet-geoman-v2', () => ({
  GeomanControls: (): React.ReactElement => <></>
}))

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const tree = location && mount(<Mapping
    mappingConstraints={localMappingConstraints}
    forces={forces}
    gameTurnTime={{ unit: 'millis', millis: 72000 }}
    wargameInitiated={true}
    markerIcons={[]}
    platforms={platformTypes}
    infoMarkers={[]}
    playerForce='blue'
    isGameControl={true}
    isUmpire={true}
    phase={Phase.Planning}
    turnNumber={5}
  ><InfoMarker location={location} icons={icons} locationHex={(marker && marker.location) || 'aa'} marker={marker} /></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
