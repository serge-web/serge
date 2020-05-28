/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameAdmin from './index'

import { MessagesMock } from '@serge/mocks'

it('GameAdmin renders correctly', () => {
  const tree = renderer
    .create(<GameAdmin wargameTitle="title" chatChannel={MessagesMock} selectedForce="blue" selectedRole=""/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
