import React from 'react'

// Import component files
import RfiForm from './index'
import RfiFormTypes from './types/props'
import docs from './README.md'
import { Story } from '@storybook/react/types-6-0'

export default {
  title: 'local/molecules/RfiForm',
  component: RfiForm,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    },
    backgrounds: {
      default: 'message'
    }
  }
}

const Template: Story<RfiFormTypes> = (args) => <RfiForm {...args} />

// deepscan-disable-next-line USELESS_ARROW_FUNC_BIND
export const Default = Template.bind({})
Default.args = {
  request: {
    title: 'Fuel availability',
    description: 'Request for Information text example - This is a request for air support. Request for Information text example - This is a request for air support. Request for Information text example - This is a request for air support. Request for Information  text example - This is a request for air support.'
  },
  onSaveDraft: console.log,
  onSubmit: console.log
}
