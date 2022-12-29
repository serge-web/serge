/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatInputText from './index'

const createNodeMock = (el: any): HTMLTextAreaElement | null => {
  if (el.type === 'textarea') {
    return document.createElement('textarea')
  }
  return null
}

describe('ChatInputText component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChatInputText placeholder={'Input text here'} />,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
