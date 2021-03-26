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

// @ts-ignore
const showMessage = (message: string): void => window.alert(`Your message was: "${message}"`)

export const Default: React.FC = () => <PrivateChatInputToggle placeholder={'Enter your private message'} postBack={showMessage} />
