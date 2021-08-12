/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'
import { ForceRole } from '@serge/custom-types'
import CoaStatusBoard from './index'

/* Import mock data */
import { GameChannels, GameMessagesMockRFI } from '@serge/mocks'

const roles = [
  'Game Control',
  'Logistics',
  'Air',
  'Land'
]
const role: ForceRole = { forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'Game Control' }

it('CoaStatusBoard renders correctly', () => {
  const tree = renderer
    .create(
      <CoaStatusBoard
        role={role}
        isRFIManager={true}
        isUmpire={true}
        roles={roles}
        channels={GameChannels[0]}
        rfiMessages={GameMessagesMockRFI}
      />
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
