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

const showMessage = (): void => window.alert('Your message was: ""')

export const Default: React.FC = () => <ChatInputText placeholder={'input text here'} postBack={showMessage} />
