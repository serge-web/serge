/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import GameAdmin from './index'

import { AdminMessagesMock } from 'src/mocks'
import moment from 'moment-timezone'

const force = {
  name: 'blue',
  color: '#6699cc',
  iconURL: ''
}

const createNodeMock = (el: any): HTMLTextAreaElement | null => {
  if (el.type === 'textarea') {
    return document.createElement('textarea')
  }
  return null
}

describe('GameAdmin page:', () => {
  it('renders correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const tree = renderer
      .create(
        <GameAdmin turnNumber={1} wargameTitle="title" chatChannel={AdminMessagesMock} selectedForce={force} selectedRoleName="CO" selectedRole="u235"/>,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
