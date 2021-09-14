/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatMessageSetup from './index'

import { ChatMessagesMock } from '@serge/mocks'
import moment from 'moment-timezone'
import { TurnFormats } from '@serge/config'

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
        <ChatMessageSetup turnNumber={1} userId={'CO'} forceName={'Blue'} isUmpire={true} chatChannel={ChatMessagesMock}
          selectedForce={force} selectedRoleName={'CO'} turnPresentation={TurnFormats.Natural} selectedRole={'u3456'}/>,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
