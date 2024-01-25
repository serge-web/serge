/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessagesList from './index'
import { CUSTOM_MESSAGE } from 'src/config'
import { MessageCustom } from 'src/custom-types'
import moment from 'moment-timezone'

describe('ChannelMessagesList component: ', () => {
  it('renders component correctly', () => {
    moment.tz.setDefault('Etc/UTC')
    const icons = [
      'default_img/forceDefault.png'
    ]
    const colors = [
      '#F00'
    ]
    const names = [
      'Blue'
    ]
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages: MessageCustom[] = [{
      messageType: CUSTOM_MESSAGE,
      templateId: 'Chat',
      details: {
        channel: 'channel-k63pjit0',
        from: {
          force: 'Red',
          forceColor: '#F00',
          iconURL: 'default_img/umpireDefault.png',
          roleName: 'CO',
          roleId: 'u345'
        },
        timestamp: '2020-10-13T08:52:04.394Z',
        turnNumber: 1
      },
      message: {
        content: 'message from Red'
      },
      _id: '2020-03-25T15:08:47.520Z',
      _rev: '1',
      hasBeenRead: false,
      isOpen: false
    }]

    const tree = renderer
      .create(<ChannelMessagesList hideForcesInChannel={false} messages={messages} names={names} onRead={undefined} onUnread={undefined} isUmpire={true} role={'Comms'} playerForceId={'Blue'} colors={colors} icons={icons} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
