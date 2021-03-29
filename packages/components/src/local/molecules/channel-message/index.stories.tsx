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
let RFIMessage = gameMessagesWithRFI[8]
let message = (RFIMessage as MessageStructure).message
let details = (RFIMessage as CoreMessage).details
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

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const RequestForInformationUnallocated = Template.bind({})
RequestForInformationUnallocated.args = {
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
  isRFIManager: true,
  detail: message,
  onSubmit: console.log
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const RequestForInformationPendingReview = Template.bind({})
RFIMessage = gameMessagesWithRFI[9]
message = (RFIMessage as MessageStructure).message
details = (RFIMessage as CoreMessage).details
RequestForInformationPendingReview.args = {
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
  isRFIManager: true,
  detail: message,
  onSubmit: console.log,
  onReject: console.log
}

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const RequestForInformationInProgress = Template.bind({})
RFIMessage = gameMessagesWithRFI[10]
message = (RFIMessage as MessageStructure).message
details = (RFIMessage as CoreMessage).details
RequestForInformationInProgress.args = {
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
  isRFIManager: true,
  detail: message,
  onSubmit: console.log
}
