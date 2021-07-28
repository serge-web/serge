import React from 'react'

// Import component files
import AdminMessageCreator from './index'
import docs from './README.md'

import { MessageChannel } from '@serge/custom-types'

export default {
  title: 'local/molecules/AdminMessageCreator',
  component: AdminMessageCreator,
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

// @ts-ignore
const showMessage = (message: MessageChannel): void => window.alert(`Your message, from ${message.details.from.force} was: "${message.message.content}"`)

export const Default: React.FC = () => <AdminMessageCreator from={force} channel={'Game Admin'} roleName={'Umpire'} role={'r3453'} postBack={showMessage} />
