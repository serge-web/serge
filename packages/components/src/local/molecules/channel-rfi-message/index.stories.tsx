import React, { useState } from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChannelMessage from './index'
import docs from './README.md'
import RFIPropTypes from './types/props'
import { GameMessagesMockRFI } from '@serge/mocks'

import { MessageCustom } from '@serge/custom-types'
import { mostRecentOnly } from '@serge/helpers'

const wrapper: React.FC = (storyFn: any) => <div style={{ height: '600px' }}>{storyFn()}</div>
const newest = mostRecentOnly(GameMessagesMockRFI)
const unallocated = newest[3] as MessageCustom
const inProgress = newest[4] as MessageCustom
const forReview = newest[5] as MessageCustom
const released = newest[6] as MessageCustom

export default {
  title: 'local/molecules/ChannelRFIMessage',
  component: ChannelMessage,
  decorators: [wrapper],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const Template: Story<RFIPropTypes> = (args) => {
  const { isUmpire, role, message, isRFIManager } = args
  const [messageState, setMessageState] = useState<MessageCustom>(message)
  return (
    <ChannelMessage
      message={messageState}
      borderColor='#0F0'
      isRFIManager={isRFIManager}
      onRead={(readMessage): void => setMessageState({ ...readMessage as MessageCustom, hasBeenRead: true })}
      onChange={(nextMessage): void => setMessageState(nextMessage as MessageCustom)}
      role={role}
      isUmpire={isUmpire}
      forceColor='#0F0'
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  message: unallocated,
  isUmpire: true,
  isRFIManager: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control', roleName: 'CO' }
}

export const InProgress = Template.bind({})
InProgress.args = {
  message: inProgress,
  isRFIManager: true,
  isUmpire: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control 2', roleName: 'CO 2' }
}

export const ForReview = Template.bind({})
ForReview.args = {
  message: forReview,
  isRFIManager: true,
  isUmpire: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control 3', roleName: 'CO 3' }
}

export const Released = Template.bind({})
Released.args = {
  message: released,
  isRFIManager: true,
  isUmpire: true,
  role: { forceId: 'umpire', forceName: 'White', roleId: 'game control 4', roleName: 'CO 4' }
}
