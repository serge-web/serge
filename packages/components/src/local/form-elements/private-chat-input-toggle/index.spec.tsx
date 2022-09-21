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

const privatValue = (value: string): string => value

describe('PrivateChatInputToggle component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <PrivateChatInputToggle privatValue={privatValue} placeholder={'Enter your private message'} />,
        { createNodeMock }
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
