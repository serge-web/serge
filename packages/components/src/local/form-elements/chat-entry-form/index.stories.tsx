import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChatEntryForm from './index'
import docs from './README.md'
import ChatPropTypes from './types/props'
import { MessageDetails } from '@serge/custom-types'

export default {
  title: 'local/form-elements/ChatEntryForm',
  component: ChatEntryForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  },
  argTypes: {
    isUmpire: {
      description: 'Player from umpire force'
    }
  }
}

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: '',
  iconURL: ''
}

const Template: Story<ChatPropTypes> = (args) => {
  const { from, role, roleName, isUmpire, channel } = args

  const postBack = (details: MessageDetails, message: any): void => {
    console.log('send message', details, message)
  }

  return <ChatEntryForm
    turnNumber={1}
    from={from}
    isUmpire={isUmpire}
    channel={channel}
    roleName={roleName}
    role={role}
    postBack={postBack}
  />
}

export const Default = Template
Default.args = {
  from: force,
  role: 'Um2342',
  roleName: 'Umpire',
  isUmpire: false,
  channel: 'Game Admin'
}
