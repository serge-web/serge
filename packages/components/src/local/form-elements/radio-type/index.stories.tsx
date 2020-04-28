import React from 'react'

// Import component files
import RadioType from './index'
import docs from './README.md'


export default {
  title: 'local/form-elements/RadioType',
  component: RadioType,
  decorators: [],
  parameters: {
    readme: {
      // Show readme before story
      content: docs
    }
  }
}

export const Default: React.FC = () => <RadioType label="States" options={['Fishing', 'Moored', 'Transiting']}/>

