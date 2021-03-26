import React, { useState } from 'react'

// Import component files
import ChannelMessage from './index'
import ChannelMessageType from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'
import gameMessagesWithRFI from '@serge/mocks/game-messages-rfi.mock'
import { MessageStructure, CoreMessage } from '@serge/custom-types/message'

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

const Template: Story<ChannelMessageType> = (args) => {
  const [isRead, setIsRead] = useState(false)
  return (
    <ChannelMessage
      {...args}
      hasBeenRead={isRead}
      onRead={(): void => setIsRead(true)}
    />
  )
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Default = Template.bind({})
Default.args = {
  borderColor: '#3dd0ffB3',
  title: 'lorem ipsum do lor sit amet',
  timestamp: '2020-09-18T05:41:17.349Z',
  role: 'CO',
  messageType: 'Chat',
  privateMessage: 'Private message',
  isUmpire: true,
  detail: { content: 'Lorem ipsum do lor sit amet' }
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const StateOfTheWorld = Template.bind({})
StateOfTheWorld.args = {
  borderColor: '#ffffff',
  title: 'lorem ipsum do lor sit amet',
  timestamp: '2020-09-18T05:41:17.349Z',
  role: 'Game Control',
  messageType: 'State of The World',
  privateMessage: 'Private message',
  isUmpire: true,
  detail: { content: 'Lorem ipsum do lor sit amet' }
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const RequestForInformation = Template.bind({})
const RFIMessage = gameMessagesWithRFI[8]
const message = (RFIMessage as MessageStructure).message
const details = (RFIMessage as CoreMessage).details
RequestForInformation.args = {
  borderColor: '#3dd0ffB3',
  title: message.title,
  timestamp: '2020-09-18T05:41:17.349Z',
  role: 'CO',
  messageType: details.messageType,
  rfiStatus: details?.collaboration ? details?.collaboration?.status : undefined,
  rfiId: RFIMessage._id,
  privateMessage: 'Private message',
  collaboration: details?.collaboration,
  isUmpire: false,
  detail: message
}
