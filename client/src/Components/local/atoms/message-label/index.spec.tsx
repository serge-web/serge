/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessageLabel from './index'

describe('MessageLabel component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MessageLabel label="Charcoal" />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
