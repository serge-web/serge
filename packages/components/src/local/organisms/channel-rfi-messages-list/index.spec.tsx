/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelRFIMessagesList from './index'
import { GameMessagesMockRFI } from '@serge/mocks'
import { mostRecentOnly } from '@serge/helpers'
import { MessageCustom } from '@serge/custom-types'
import moment from 'moment-timezone'

describe('ChannelRFIMessagesList component: ', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const icons = ['./images/default_img/forceDefault.png']
    const colors = ['#F00']
    const newest = mostRecentOnly(GameMessagesMockRFI) as MessageCustom[]
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const tree = renderer.create(<ChannelRFIMessagesList
      messages={newest}
      colors={colors}
      icons={icons}
      onMarkAllAsRead={markAllAsRead}
      onChange={(msg): void => { console.log(msg) }}
      onRead={(msg): void => { console.log(msg) }}
      role={{ forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'CO' }}
      isRFIManager={true}
      isUmpire={true}
    />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
