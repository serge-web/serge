import React from 'react'

// Import component files
import Selector from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/Selector',
  component: Selector,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

const options = ['item1', 'item2', 'item3']

export const Default: React.FC = () => <Selector name="test" label="test" options={options} selected="item2" />
