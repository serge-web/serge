import React from 'react'

// Import component files
import ChatInputText from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/ChatInputText',
  component: ChatInputText,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

// @ts-ignore
const showMessage = (message: string): void => window.alert(`Your message was: "${message}"`)
const chatvalue = (value: string): any => window.alert(`message value: "${value}"`)

export const Default: React.FC = () => <ChatInputText chatInputvalue={chatvalue} placeholder={'input text here'} postBack={showMessage} />
