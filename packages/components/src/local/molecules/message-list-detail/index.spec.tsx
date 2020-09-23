/* global it expect */

import React from 'react'
import renderer from 'react-test-renderer'

import MessageListDetail from './index'

describe('MessageListDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MessageListDetail
          detail={{ content: 'common chat' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
