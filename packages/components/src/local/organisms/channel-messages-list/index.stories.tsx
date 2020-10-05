import React, { useState } from 'react'
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
  const [isRead, setIsRead] = useState([true, false])
  const messages = [
    {
      _id: '1',
      borderColor: '#ffffff',
      title: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T05:41:17.349Z',
      role: 'Game Control',
      messageType: 'State of The World',
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
    }, {
      _id: '2',
      borderColor: '#3dd0ffB3',
      title: 'lorem ipsum do lor sit amet',
      timestamp: '2020-09-18T05:41:17.349Z',
      role: 'CO',
      messageType: 'Chat',
      privateMessage: 'Private message',
      isUmpire: true,
      detail: { content: 'Lorem ipsum do lor sit amet' }
    }, {
      infoType: true,
      gameTurn: 1,
      detail: {}
    }, {
      infoType: true,
      gameTurn: 2,
      detail: {}
    }, {
      infoType: true,
      gameTurn: 3,
      detail: {}
    }].map((message, id) => {
    return { ...message, hasBeenRead: isRead[id] }
  })
  const markAllAsRead = () => {
    setIsRead(isRead.map(() => true))
  }
  const onRead = (detail: any): void => {
    const newState = isRead.map((state, id) => {
      if (id === messages.findIndex(item => item._id === detail._id)) {
        state = true
      }
      return state
    })
    setIsRead(newState)
  }
  return <ChannelMessagesList
    messages={messages}
    icons={icons}
    onMarkAllAsRead={markAllAsRead}
    onRead={onRead}
  />
}
