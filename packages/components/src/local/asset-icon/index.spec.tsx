/* global it expect */
import L from 'leaflet'
import React from 'react'
import { mount } from 'enzyme'

import AssetIcon from './index'
import Mapping from '../mapping'
import { Phase } from '@serge/config'

const bounds = {
  imageTop: 14.194809302,
  imageLeft: 42.3558566271,
  imageRight: 43.7417816271,
  imageBottom: 12.401259302
}

const LocalTileLayer = {
  url: '/tiles/{z}/{x}/{y}.png',
  attribution: 'Generated by QTiles'
}

it('Mapping renders correctly with AssetIcon', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    tileDiameterMins = {5}
    bounds = {bounds}
    tileLayer = {LocalTileLayer}
    forces = {[{}]}
    platforms = {[{}]}
    playerForce = 'blue'
    phase = {Phase.Planning}
  ><AssetIcon id='id1' name="Jeffrey" position={L.latLng(13.298034302, 43.0488191271)}
      selected={false} type='agi' force='blue'
      tooltip='Tooltip for marker'/></Mapping>, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
