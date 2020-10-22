/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameAdmin from './index'

import { AdminMessagesMock } from '@serge/mocks'

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

const createNodeMock = (el: any): HTMLTextAreaElement | null => {
  if (el.type === 'textarea') {
    return document.createElement('textarea')
  }
  return null
}

describe('GameAdmin page:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <GameAdmin wargameTitle="title" chatChannel={AdminMessagesMock} selectedForce={force} selectedRole=""/>,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
