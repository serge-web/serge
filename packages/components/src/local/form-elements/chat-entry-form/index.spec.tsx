/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatEntryForm from './index'

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

describe('ChatEntryForm component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChatEntryForm isUmpire={true} from={force} channel={'Game Admin'} role={'r345'} roleName={'Umpire'} />,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
