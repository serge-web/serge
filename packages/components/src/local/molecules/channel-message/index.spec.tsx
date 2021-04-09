/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessage from './index'
import { GameMessagesMockRFI } from '@serge/mocks'

describe('ChannelMessage component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessage
          hasBeenRead={false}
          playerForce={'Blue'}
          message={GameMessagesMockRFI[0]}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
