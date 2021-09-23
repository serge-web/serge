/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import RfiStatusBoard from './index'

import { StylesProvider } from '@material-ui/styles/'

/* Import mock data */
import { GameChannels, GameMessagesMockRFI } from '@serge/mocks'
import { ForceRole } from '@serge/custom-types'
import { generateClassName } from '@serge/helpers'

const roles = ['Game Control', 'Logistics', 'Air', 'Land']

const role: ForceRole = {
  forceId: 'umpire',
  forceName: 'White',
  roleId: 'game control',
  roleName: 'Game Control'
}

it('RfiStatusBoard renders correctly', () => {
  const tree = renderer
    .create(
      <StylesProvider generateClassName={generateClassName}>
        <RfiStatusBoard
          currentWargame='wargame-test'
          role={role}
          isRFIManager={true}
          isUmpire={true}
          roles={roles}
          channels={GameChannels}
          rfiMessages={GameMessagesMockRFI}
        />
      </StylesProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
