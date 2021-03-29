/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelRfiMessageDetail from './index'

import { GameMessagesMockRFI } from '@serge/mocks'

const [defMessage] = GameMessagesMockRFI

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ChannelRfiMessageDetail
        role='CO'
        isUmpire={true}
        message={defMessage}
        onChange={_readMessage => {}}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
