/* global it expect */
import React from 'react'
import renderer from 'react-test-renderer'
import ChannelMessagesList from './index'

describe('ChannelMessagesList component: ', () => {
  it('renders component correctly', () => {
    const icons = [
      '/images/default_img/forceDefault.png'
    ]
    const markAllAsRead = (): void => window.alert('Callback on mark all as read')
    const messages = [{
      borderColor: '#ffffff',
      title: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T05:41:17.349Z',
      role: 'Game Control',
      messageType: 'State of The World',
      hasBeenRead: true,
      privateMessage: 'Private message',
      isUmpire: true,
      detail: {
        Forces: [{
          assets: [{
            location: 'loc',
            name: 'name',
            visibleTo: [{ Force: 'Blue' }]
          }, {
            location: 'lo2',
            name: 'name2',
            visibleTo: [{ Force: 'Red' }]
          }],
          force: 'Blue'
        }, {
          assets: [{
            location: 'loc',
            name: 'name3',
            visibleTo: []
          }],
          force: 'Red'
        }]
      }
    }]
    const tree = renderer
      .create(<ChannelMessagesList messages={messages} icons={icons} onMarkAllAsRead={markAllAsRead} />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
