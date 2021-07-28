/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessage from './index'
import { GameMessagesMockRFI } from '@serge/mocks'
import moment from 'moment-timezone'

describe('ChannelMessage component:', () => {
  it('renders correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const tree = renderer
      .create(
        <ChannelMessage
          hasBeenRead={false}
          isUmpire={false}
          message={GameMessagesMockRFI[0]}
          forceColor={GameMessagesMockRFI[0].details.from.forceColor}
          role={GameMessagesMockRFI[0].details.from.roleId}
          roleName={GameMessagesMockRFI[0].details.from.roleName}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
