import React from 'react'

// Import component files
import FormGroupShadow from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/FormGroupShadow',
  component: FormGroupShadow,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <FormGroupShadow placeholder='Travel Mode'>Demo Content</FormGroupShadow>
