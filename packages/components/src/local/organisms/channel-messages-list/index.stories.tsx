import React from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// Import component files
import ChannelMessagesList from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/organisms/ChannelMessagesList',
  component: ChannelMessagesList,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false
    },
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
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
  return <ChannelMessagesList messages={messages} icons={icons} onMarkAllAsRead={markAllAsRead} />
}
