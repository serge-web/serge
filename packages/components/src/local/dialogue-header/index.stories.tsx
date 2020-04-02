import React from 'react'

// Import component files
import DialogueHeader from './index'
import docs from './README.md'


export default {
  title: 'local/DialogueHeader',
  component: DialogueHeader,
  decorators: [],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false,
    },
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <DialogueHeader string="This is the dialogue text" />

