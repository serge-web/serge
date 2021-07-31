/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import CollabWorkingBoard from './index'

/* Import mock data */
import { GameChannels, GameMessagesMockRFI } from '@serge/mocks'
import { ForceRole } from '@serge/custom-types'

const roles = [
  'Game Control',
  'Logistics',
  'Air',
  'Land'
]

const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'Game Control' }

// filter the data to just one RFI channel

it('CollabWorkingBoard renders correctly', () => {
  const tree = renderer
    .create(
      <CollabWorkingBoard
        role={role}
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
