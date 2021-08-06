/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessage from './index'

import { GameMessagesMockRFI } from '@serge/mocks'
import moment from 'moment-timezone'
const [defMessage] = GameMessagesMockRFI

describe('ChannelMessage component:', () => {
  it('renders correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const tree = renderer
      .create(
        <ChannelMessage
          role={{ forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'CO' }}
          borderColor='#f00'
          isUmpire={true}
          isRFIManager={true}
          message={defMessage}
          onRead={(readMessage): void => { console.log(readMessage) }}
          onChange={(nextMessage): void => { console.log(nextMessage) }}
          forceColor={'#000'}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
