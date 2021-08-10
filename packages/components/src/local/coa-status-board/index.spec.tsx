/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import CoaStatusBoard from './index'

/* Import mock data */
import { GameChannels, GameMessagesMockRFI } from '@serge/mocks'

const roles = [
  'Game Control',
  'Logistics',
  'Air',
  'Land'
]

it('CoaStatusBoard renders correctly', () => {
  const tree = renderer
    .create(
      <CoaStatusBoard
        role={'Game Control'}
        isRFIManager={true}
        isUmpire={true}
        roles={roles}
        channels={GameChannels}
        rfiMessages={GameMessagesMockRFI}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
