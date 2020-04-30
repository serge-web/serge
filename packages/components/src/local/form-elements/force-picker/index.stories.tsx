import React from 'react'

// Import component files
import ForcePicker from './index'
import docs from './README.md'

/* import mock data */
import forces from './mocks/forces'

export default {
  title: 'local/form-elements/ForcePicker',
  component: ForcePicker,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Radio: React.FC = () => <ForcePicker label="Visible to" options={forces}/>
