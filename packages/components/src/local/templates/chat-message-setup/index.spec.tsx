/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatMessageSetup from './index'

import { ChatMessagesMock } from '@serge/mocks'
import moment from 'moment-timezone'

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: '',
  iconURL: ''
}

const createNodeMock = (el: any): HTMLTextAreaElement | null => {
  if (el.type === 'textarea') {
    return document.createElement('textarea')
  }
  return null
}

describe('ChatMessageSetup page:', () => {
  it('renders correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const tree = renderer
      .create(
        <ChatMessageSetup userId={'CO'} forceName={'Blue'} isUmpire={true} chatChannel={ChatMessagesMock}
          selectedForce={force} selectedRoleName={'CO'} selectedRole={'u3456'}/>,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
