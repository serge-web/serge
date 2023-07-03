import React from 'react'

// Import component files
import FormHeader from './index'
import docs from './README.md'

export default {
  title: 'local/FormHeader',
  component: FormHeader,
  decorators: [],
  parameters: {
    options: {
      // No addons are used in this story so don't show the addon panel
      showPanel: false
    },
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FunctionComponent = () => <FormHeader string="This is the Form text" />
