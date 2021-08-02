/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelCollabMessageDetail from './index'

import { GameMessagesMockRFI } from '@serge/mocks'

const [defMessage] = GameMessagesMockRFI

describe('ChannelMessageDetail:', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ChannelCollabMessageDetail
        role={ { forceId: 'umpire', forceName: 'Umpire', roleId: 'co', roleName: 'CO' } }
        isUmpire={true}
        isRFIManager={true}
        message={defMessage}
        onChange={(msg): void => { console.log(msg) }}
      />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
