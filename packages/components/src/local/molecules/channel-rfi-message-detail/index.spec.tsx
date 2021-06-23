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
        roleName='CO'
        roleId='r12345'
        isUmpire={true}
        isRFIManager={true}
        message={defMessage}
        onChange={(msg): void => { console.log(msg) }}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
