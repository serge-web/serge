import React from 'react'

// Import component files
import PrivateChatInputToggle from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/PrivateChatInputToggle',
  component: PrivateChatInputToggle,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const showMessage = (): void => window.alert('Your message was: "{}"')

export const Default: React.FC = () => <PrivateChatInputToggle placeholder={'Enter your private message'} sendMessage={showMessage} />
