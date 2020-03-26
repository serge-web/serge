import React from 'react'

// Import component files
import Message from './index'
import docs from './README.md'
import { MessagesMock } from '@serge/mocks'


export default {
  title: 'local/Message',
  component: Message,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Message message={MessagesMock[0]}/>

