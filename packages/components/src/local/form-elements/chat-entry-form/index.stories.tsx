import React from 'react'

// Import component files
import ChatEntryForm from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/ChatEntryForm',
  component: ChatEntryForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

// @ts-ignore
const showMessage = (message: string, privateMessage: string): void => window.alert(`Your message was: "${message}" \n Private message was: ${privateMessage}`)

export const Default: React.FC = () => <ChatEntryForm postBack={showMessage} />
