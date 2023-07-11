/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessageDetail from './index'
import { GameMessagesMockRFI } from 'src/mocks'

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessageDetail
          message={GameMessagesMockRFI[0]}
          isUmpire={false}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
