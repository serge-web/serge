import React from 'react'

// Import component files
import Speed from './index'
import docs from './README.md'

export default {
  title: 'local/form-elements/Speed',
  component: Speed,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <Speed colCount={6} options={[0, 10, 20, 30]} value={10}/>
