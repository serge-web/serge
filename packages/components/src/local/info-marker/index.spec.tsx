/* global it expect */
import L from 'leaflet'
import React from 'react'
import { mount } from 'enzyme'

import InfoMarker from './index'
import Mapping from '../mapping'
import { Phase } from '@serge/config'

/* Import mock data */
import { forces, platformTypes, platformTypesByKey, localMappingConstraints, watuWargame } from '@serge/mocks'
import MapAnnotation from '@serge/custom-types/map-annotation'
import { h3ToGeo } from 'h3-js'

const marker: MapAnnotation | undefined = watuWargame.data.annotations && watuWargame.data.annotations[0]

const coords = marker && h3ToGeo(marker?.location)
const location = coords && L.latLng(coords[0], coords[1])

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = location && mount(<Mapping
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
  ><InfoMarker location={location} marker={marker} /></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
