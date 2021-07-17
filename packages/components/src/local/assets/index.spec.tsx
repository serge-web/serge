/* global it expect */
import React from 'react'
import { mount } from 'enzyme'

import Mapping from '../mapping'
import { Phase } from '@serge/config'

/* Import mock data */
import { platformTypes, localMappingConstraints } from '@serge/mocks'
import { ForceData } from '@serge/custom-types'

const forces: Array<ForceData> = [
  {
    color: '#FCFBEE',
    dirty: false,
    iconURL: 'images/default_img/umpireDefault.png',
    name: 'White',
    overview: 'Umpire force.',
    roles: [
      {
        roleId: "r1235",
        isGameControl: true,
        isInsightViewer: true,
        isObserver: true,
        name: 'Game Control',
        password: 'p2311',
        isRFIManager: true
      }
    ],
    umpire: true,
    uniqid: 'umpire'
  },
  {
    assets: [
      {
        name: 'HMS DEVONSHIRE',
        contactId: 'C043',
        condition: 'Full capability',
        perceptions: [],
        platformType: 'frigate',
        position: 'S23',
        status: {
          state: 'Transiting',
          speedKts: 20
        },
        uniqid: 'a0pra00001'
      }
    ],
    color: '#00F',
    dirty: false,
    iconURL: 'images/default_img/umpireDefault.png',
    name: 'Blue',
    overview: 'Blue force.',
    roles: [
      {
        roleId: "r1234",
        isGameControl: false,
        isInsightViewer: false,
        isObserver: false,
        name: 'CO',
        password: 'p5543'
      }
    ],
    umpire: false,
    uniqid: 'Blue'
  }
]

it('Mapping renders correctly with AsseticonURL', () => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  // Using enzyme's 'mount' to solve issues with Leaflet requiring access to the DOM and other features not
  // provided by react.render.
  const tree = mount(<Mapping
    mappingConstraints = {localMappingConstraints}
    forces={forces}
    gameTurnTime = {72000}
    wargameInitiated = {true}
    platforms = {platformTypes}
    canSubmitOrders = {true}
    playerForce="Blue"
    phase={Phase.Planning}
    turnNumber={5}
  />, { attachTo: div })

  expect(tree).toMatchSnapshot()
})
