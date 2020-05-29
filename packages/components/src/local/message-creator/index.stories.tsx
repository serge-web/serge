import React from 'react'

// Import component files
import MessageCreator from './index'
import docs from './README.md'

export default {
  title: 'local/MessageCreator',
  component: MessageCreator,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const force = {
  name: 'blue',
  color: '#6699cc',
  icon: ''
}

import { Message } from '@serge/custom-types'

const showMessage = (message: Message): void => alert(`Your message, from ${message.details.from.force} was: "${message.message.content}"`)

export const Default: React.FC = () => <MessageCreator from={force} channel={'Game Admin'} role={'Umpire'} postBack={showMessage} />
