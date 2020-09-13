/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameAdmin from './index'

import { MessagesMock } from '@serge/mocks'

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

it('GameAdmin renders correctly', () => {
  const tree = renderer
    .create(<GameAdmin wargameTitle="title" chatChannel={MessagesMock} selectedForce={force} selectedRole=""/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})
