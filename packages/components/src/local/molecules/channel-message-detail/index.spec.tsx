/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessageDetail from './index'
import { GameMessagesMockRFI } from '@serge/mocks'

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessageDetail
          playerForce={'Blue'}
          message={GameMessagesMockRFI[0]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
