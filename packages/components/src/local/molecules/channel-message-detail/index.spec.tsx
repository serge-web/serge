/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessageDetail from './index'

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessageDetail
          detail={{ content: 'common chat' }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
