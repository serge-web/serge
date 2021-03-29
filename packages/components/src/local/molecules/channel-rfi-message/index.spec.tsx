/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessage from './index'

import { GameMessagesMockRFI } from '@serge/mocks'
const [defMessage] = GameMessagesMockRFI

describe('ChannelMessage component:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <ChannelMessage
          role='CO'
          isUmpire={true}
          message={defMessage}
          onRead={_readMessage => {}}
          onChange={_nextMessage => {}}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
