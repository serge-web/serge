/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import ChatEntryForm from './index'

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
        <ChatEntryForm />,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
