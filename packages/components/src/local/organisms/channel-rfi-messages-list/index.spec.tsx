/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelRFIMessagesList from './index'
import { GameMessagesMockRFI } from '@serge/mocks'

describe('ChannelRFIMessagesList component: ', () => {
  it('renders component correctly', () => {
    const icons = ['./images/default_img/forceDefault.png']
    const colors = ['#F00']

    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const tree = renderer.create(<ChannelRFIMessagesList
      messages={GameMessagesMockRFI}
      colors={colors}
      icons={icons}
      onMarkAllAsRead={markAllAsRead}
      onChange={(_msg) => {}}
      onRead={(_msg) => {}}
      role='CO'
      isUmpire={true}
    />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
