/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import PrivateChatInputToggle from './index'

const createNodeMock = (el: any): HTMLTextAreaElement | null => {
  if (el.type === 'textarea') {
    return document.createElement('textarea')
  }
  return null
}
describe('PrivateChatInputToggle component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PrivateChatInputToggle placeholder={'Enter your private message'} />,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
