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
          borderColor='#f00'
          isUmpire={true}
          message={defMessage}
          onRead={(readMessage): void => { console.log(readMessage) }}
          onChange={(nextMessage): void => { console.log(nextMessage) }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
