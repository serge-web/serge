import React from 'react'

// Import component files
import MessageCreator from './index'
import docs from './README.md'

import { MessageCustom } from '@serge/custom-types'

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
  icon: '',
  iconURL: ''
}

const showMessage = (message: MessageCustom): void => window.alert(`Your message, from ${message.details.from.force} was: "${message.message.content}"`)

export const Default: React.FC = () => <MessageCreator turnNumber={1} from={force} channel={'Game Admin'} roleName={'Umpire'} role={'r3453'} postBack={showMessage} />
