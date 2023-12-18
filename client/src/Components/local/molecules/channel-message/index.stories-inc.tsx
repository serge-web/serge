import React, { useState } from 'react'

// Import component files
import ChannelMessage from './index'
import docs from './README.md'
import { GameMessagesMockRFI } from 'src/mocks'

export default {
  title: 'local/molecules/ChannelMessage',
  component: ChannelMessage,
  decorators: [],
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
    <ChannelMessage
      hasBeenRead={isRead}
      isUmpire={false}
      message={GameMessagesMockRFI[0]}
      onRead={(): void => setIsRead(true)}
      forceColor={'#000'}
    />
  )
}

export const StateOfTheWorld: React.FC = () => {
  const [isRead, setIsRead] = useState(false)
  return (
    <ChannelMessage
      hasBeenRead={isRead}
      isUmpire={false}
      message={{
        ...GameMessagesMockRFI[0],
        message: {
          Forces: [{
            // assets: [{
            //   location: 'loc',
            //   name: 'name',
            //   visibleTo: [{ Force: 'Blue' }]
            // }, {
            //   location: 'lo2',
            //   name: 'name2',
            //   visibleTo: [{ Force: 'Red' }]
            // }],
            force: 'Blue'
          }, {
            // assets: [{
            //   location: 'loc',
            //   name: 'name3',
            //   visibleTo: []
            // }],
            force: 'Red'
          }]
        }
      }}
      onRead={(): void => setIsRead(true)}
      forceColor={'#000'}
    />
  )
}
