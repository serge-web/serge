import React, { useState } from 'react'
import { styled } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

// Import component files
import MessageList from './index'
import docs from './README.md'

const BlueContainer = styled(Box)({
  backgroundColor: '#1a394d',
  padding: '20px',
  borderRadius: '2px',
  color: '#fff'
})

export default {
  title: 'local/molecules/MessageList',
  component: MessageList,
  decorators: [(story: Function): React.ReactElement => (
    <BlueContainer>{ story() }</BlueContainer>
  )],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => {
  const [isRead, setIsRead] = useState(false)
  return (
    <MessageList
      borderColor="#3dd0ffB3"
      title="lorem ipsum do lor sit amet"
      timestamp="2020-09-18T05:41:17.349Z"
      role="CO"
      messageType="Chat"
      hasBeenRead={isRead}
      privateMessage="Private message"
      isUmpire={true}
      detail={{ content: 'Lorem ipsum do lor sit amet' }}
      onRead={(): void => setIsRead(true)}
    />
  )
}

export const StateOfTheWorld: React.FC = () => {
  const [isRead, setIsRead] = useState(false)
  return (
    <MessageList
      borderColor="#ffffff"
      title="lorem ipsum do lor sit amet"
      timestamp="2020-09-18T05:41:17.349Z"
      role="Game Control"
      messageType="State of The World"
      hasBeenRead={isRead}
      privateMessage="Private message"
      isUmpire={true}
      detail={{
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
      }}
      onRead={(): void => setIsRead(true)}
    />
  )
}
