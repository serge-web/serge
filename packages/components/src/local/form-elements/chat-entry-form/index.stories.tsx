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
  icon: '',
  iconURL: ''
}

// @ts-ignore
const showMessage = (message: ChatMessage): void => window.alert(`Your message, from ${message.details.from.force} was: "${message.message.content}"`)

const Template: Story<ChatPropTypes> = (args) => {
  const { from, role, roleName, isUmpire, channel } = args

  const onChangePrivateStorage = (message: string): void => console.log('message:', message)

  const onchangeCheatInputMessage = (value: string, messageType: string): void => console.log({ value, messageType })

  const privatMessageValue = (privat: string): string => privat

  const chatEntryFormValue = (chat: string): string => chat

  return <ChatEntryForm
    chatEntryFormValue={chatEntryFormValue}
    privatMessageValue={privatMessageValue}
    onChangePrivateStorage={onChangePrivateStorage}
    onchangeCheatInputMessage={onchangeCheatInputMessage}
    turnNumber={1}
    from={from}
    isUmpire={isUmpire}
    channel={channel}
    roleName={roleName}
    role={role}
    postBack={showMessage}
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
