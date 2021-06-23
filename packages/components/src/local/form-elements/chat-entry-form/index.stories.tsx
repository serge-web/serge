import React from 'react'
import { Story } from '@storybook/react/types-6-0'

// Import component files
import ChatEntryForm from './index'
import docs from './README.md'
import ChatPropTypes from './types/props'
import { ChatMessage } from '@serge/custom-types'

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
  icon: ''
}

// @ts-ignore
const showMessage = (message: ChatMessage): void => window.alert(`Your message, from ${message.details.from.force} was: "${message.message.content}"`)

const Template: Story<ChatPropTypes> = (args) => {
  const { from, roleId, roleName, isUmpire, channel } = args
  return <ChatEntryForm from={from} isUmpire={isUmpire} channel={channel} roleId={roleId} roleName={roleName} postBack={showMessage} />
}

export const Default = Template
Default.args = {
  from: force,
  roleName: 'Umpire',
  isUmpire: false,
  channel: 'Game Admin',
  roleId: 'r12345'
}
